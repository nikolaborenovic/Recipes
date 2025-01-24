import '../home.style.css'
import ReviewUserImg from '../../../assets/user.jpg'
import Button from '../../components/Button/Button';

const SectionThree = ({ handleRedirect }) => {
    return(
        <div className='sectionThree_holder'>
            <div className='sectionThree_wrapper'>
                <div className='sectionThree_info'>
                    <h2>Comments from our users</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button
                    buttonText='LEAVE REVIEW'
                    buttonColour='#f9ca24'
                    buttonClick={() => handleRedirect('/contact')}
                    />
                </div>
                <div className='sectionThree_reviewHolder'>
                    <div className='sectionThree_reviewCard'>
                        <img src={ReviewUserImg}/>
                        <h3>John Doe</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='sectionThree_reviewCard'>
                        <img src={ReviewUserImg}/>
                        <h3>John Doe</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='sectionThree_reviewCard'>
                        <img src={ReviewUserImg}/>
                        <h3>John Doe</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='sectionThree_reviewCard'>
                        <img src={ReviewUserImg}/>
                        <h3>John Doe</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree;