import { useNavigate } from 'react-router-dom';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import './home.style.css'

const Home = () => {
    const navigate = useNavigate();
    const handleRedirect = (route) => {
        navigate(route)
    }

    return(
        <div className='home_holder'>
            <SectionOne handleRedirect={handleRedirect}/>
            <SectionTwo/>
            <SectionThree handleRedirect={handleRedirect}/>
        </div>
    )
}

export default Home;