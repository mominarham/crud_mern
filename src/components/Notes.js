import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Notes.css'


function Notes() {
    const [data, setdata] = useState([{
        title:'',
        content:'',
        _id:''
    }])

    // for getting all nots 
    useEffect(()=>{
        fetch('/notes')
        .then(res=>{
            if(res.ok){
                return res.json()
            }
        })
        .then((data)=>{setdata(data)}
        ).catch((err)=> console.log(err))
    },[data])

    // for deleteting 
    const deleteItem = (id)=>{
        axios.delete('/delete/'+ id)
        alert('item deleted')
    }

    // for update    
    const [isPut,setIsPut] = useState(false)
    const [updateItem,setUpdateItem] = useState({
        title:'',
        content:'',
        id:''
    })
    const openUpdate = (id)=>{
        setIsPut(true)
        setUpdateItem((prev)=>{
            return {
                ...prev,
                id : id
            }
        })
    }

    const handleUpdate = (event)=>{
        const {name , value} = event.target
        setUpdateItem((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        } )
    }
    const update = (id)=>{
        axios.put('/put/'+ id, updateItem)
        alert('item updated ')
        setUpdateItem({
            title:'',
            content:''
        })
        setIsPut(false)
    }

    return (
        <div>
            <h1> Notes page</h1>
            {
                !isPut ? (
                    <>
                        {data.map((data)=>{
                            return(
                                    
                                <div key = {data._id} >
                                    <p>__________________________________________________________</p>
                                    <h6 className= 'title' > {data.title}</h6>
                                    <h6> {data.content}</h6>
                                        <button onClick={()=>openUpdate(data._id)} className='btn btn-warning' >Update </button>
                                        
                                        <button onClick={()=>deleteItem(data._id)}  className='btn btn-danger deleteBtn' > Delete </button>
                                    <p>__________________________________________________________</p>
                                </div>  
                            )
                        })}
                    </>

                    ) : (
                        <>
                            <input className='form-control' value={updateItem.title} onChange = {handleUpdate} name='title'  placeholder='title' autoComplete='off' />
                            <br></br>
                            <input className='form-control' value={updateItem.content} onChange = {handleUpdate} name='content'  placeholder='content' autoComplete='off' />
                            <br></br>
                            <button onClick ={()=> update(updateItem.id)} className='btn btn-warning'  > Update </button>        
                        </>
                    )
                }            
        </div>
    )
}

export default Notes
