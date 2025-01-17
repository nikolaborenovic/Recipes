import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import './home.style.css'

const Home = () => {
    return(
        <div className='home_holder'>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
        </div>
    )
}

export default Home;