import './NavBar.css'

function NavBar() {
    return (
        <div className='navBar'>
            <a className='photoLink' href='/api/photos'> Photos</a>
            <a className='uploadLink' href='/api/photos/upload'>Upload Photo </a>
            <a className='albumLink' href='/api/albums'>Album </a>
        </div>

    )
}

export default NavBar
