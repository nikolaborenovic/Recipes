import './navigation.style.css'
import LogoImg from '../../assets/logoRecipe.png'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'

const Navigation = () => {
    return(
        <div className='navigation_wrapper'>
            <div className='navigation_holder'>
                <div className='navigation_site_logo'>
                    <img src={LogoImg}/>
                    <p>HEALTHY</p>
                </div>
                <div className='navigation_links'>
                    <Link to={{pathname: '/'}}>Home</Link>
                    <Link to={{pathname: '/list'}}>Recipe List</Link>
                    <Link to={{pathname: '/about'}}>About</Link>
                    <Link to={{pathname: '/contact'}}>Contact</Link>
                </div>
                <form className='navigation_login_form'>
                    <label htmlFor='siteLogin'>
                        <div className='navigation_login_input'>
                            <input type='text' name='siteLogin_user' placeholder='Username'/>
                            <input type='text' name='siteLogin_pw' placeholder='Password'/>
                        </div>
                    </label>
                    <Button
                    buttonText='Log in'
                    buttonColour='#f9ca24'
                    />
                </form>
            </div>
        </div>
    )
}

export default Navigation;