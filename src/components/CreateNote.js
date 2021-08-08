import React,{useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function CreateNote() {
    const history = useHistory()
    const [input,setInput] = useState({
        title:'',
        content:''
    })

    const handleChange =(event)=>{
        const {name,value} = event.target;
        setInput(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    const addNote = (e)=>{
        e.preventDefault()
        const newNote ={
            title:input.title,
            content:input.content
        }
        axios.post('/create',newNote)
        alert('nots added')
        setInput({
            title:'',
            content:''
        })
        history.push('/')
    }
    return (
        <div>
            <h1> create page</h1>
            
            <form className='form-group'>
                <input className='form-control' name='title' value={input.title} onChange={handleChange} placeholder='title' autoComplete='off' />
                <br></br>
                <input className='form-control' name='content' value={input.content} onChange={handleChange} placeholder='content' autoComplete='off' />
                <br></br>
                <button style={{'background-color' : '#4267B2','color' : 'white'}} className='btn' onClick={addNote}  > Add Note </button>
            </form>
        </div>
    )
}

export default CreateNote
