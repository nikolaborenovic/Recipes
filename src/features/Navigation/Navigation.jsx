import './navigation.style.css'
import LogoImg from '../../assets/logoRecipe.png'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <div className='navigation_wrapper'>
            <div className='navigation_holder'>
                <img src={LogoImg}/>
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
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Navigation;