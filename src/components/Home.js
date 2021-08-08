import React from 'react'
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div style ={{'display':'flex', "flex-direction":"column",'justify-content':'center', 'alignItems':'center'}} >
            <h1>Welcome</h1>
            <Link style={{"color": '#4267B2','text-decoration':'none'}} to= '/createNote'> <h3  > Create Note </h3> </Link>
        </div>
    )
}

export default Home
