import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <nav className='navbar bg-dark' >
            <div>
                <Link to='/'><h4> Home</h4> </Link>               
            </div>

            <div>
                <Link to='/notes'><h4> Note</h4> </Link>  
            </div>

            <div>
                <Link to='/createNote'><h4> Create note</h4> </Link>  
            </div>
        </nav>
    )
}

export default Navbar
