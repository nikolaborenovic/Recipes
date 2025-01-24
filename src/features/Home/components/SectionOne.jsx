import '../home.style.css'
import SectionOneImg from '../../../assets/SectionOne.png'
import Button from '../../components/Button/Button';

const SectionOne = ({ handleRedirect }) => {
    return(
        <div className='sectionOne_holder'>
            <div className='sectionOne_wrapper'>
                <div className='sectionOne_info'>
                    <h2>Explore <span className='sectionOne_info_p'>HEALTHY</span>, quick and interesting meals!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <div className='sectionOne_button'>
                        <Button
                        buttonText='BROWSE RECIPES'
                        buttonColour='#f9ca24'
                        buttonClick={() => handleRedirect('/list')}
                        />
                    </div>
                </div>
                <div className='sectionOne_image'>
                    <img src={SectionOneImg}/>
                </div>
            </div>
        </div>
    )
}

export default SectionOne;