import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import logo from '../../images/768px-Flickr_dots.svg.png'
import { useDispatch } from 'react-redux';
import { getPhotos } from '../../store/photo';

function NavBar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    const onClick = async(e) => {

        await dispatch(getPhotos(user.id))
    }

    const sessionUser = useSelector((state) => state.session.user);
    if (sessionUser) {
        return (
            <div className='navBar'>
                <img class="dotsLogo" src={logo} height={30} width={30}/>
                <NavLink className="uploadLink" to="/api/photos/upload">Upload Photo</NavLink>
                <NavLink onClick={onClick} className="photoLink" to="/api/photos">Photos</NavLink>
            </div>

        )
    } else {
        return (
        <div className='navBar'>
        <img class="dotsLogo" src={logo} height={30} width={30}/>
        </div>
        )
    }
}

export default NavBar
