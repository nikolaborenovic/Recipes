import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import './home.style.css'

const Home = () => {
    return(
        <div className='home_holder'>
            <SectionOne/>
            <SectionTwo/>
        </div>
    )
}

export default Home;