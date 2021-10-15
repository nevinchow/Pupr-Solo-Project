import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navBar'>
            <NavLink className="uploadLink" to="/api/photos/upload">Upload Photo</NavLink>
            <NavLink className="photoLink" to="/api/photos">Photos</NavLink>
        </div>

    )
}

export default NavBar
