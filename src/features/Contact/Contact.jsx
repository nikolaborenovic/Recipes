import './contact.style.css'
import ContactPhoneImg from '../../assets/contactPhone.png'
import ContactEmailImg from '../../assets/email.png'
import ContactAddressImg from '../../assets/location.png'
import ContactFBImg from '../../assets/fb.png'
import ContactIGImg from '../../assets/ig.jpg'
import ContactTWImg from '../../assets/tw.png'

const Contact = () => {
    return(
        <div className='contact_holder'>
            <div className='contact_wrapper'>
                <div className='contact_comment_newsletter'>
                    <h2>Subscribe to our newsletter and leave a comment!</h2>
                    <div>
                        <input type='text' placeholder='Enter email here'/>
                        <button>SUBSCRIBE</button>
                    </div>
                    <form className='contact_commentForm'>
                        <label className='contact_name_input'>
                            <span>Name</span>
                            <input type='text' placeholder='Your name?'/>
                        </label>
                        <label className='contact_comment_input'>
                            <span>Comment</span>
                            <textarea typeof='text' placeholder='Enter your comment!'/>
                        </label>
                    </form>
                </div>
                <div className='contact_info_socials'>
                    <h2>You can contact us directly:</h2>
                    <div className='contact_infoHolder'>
                        <div className='contact_info'>
                            <img src={ContactPhoneImg}/>
                            <p>123:456:789</p>
                        </div>
                        <div className='contact_info'>
                            <img src={ContactEmailImg}/>
                            <p>healthyfoods@example.com</p>
                        </div>
                        <div className='contact_info'>
                            <img src={ContactAddressImg}/>
                            <p>123 Example street, Practice EU</p>
                        </div>
                    </div>
                    <div className='contact_socialsHolder'>
                        <h3>Check out our social networks:</h3>
                        <div className='contact_socialLinks'>
                            <img src={ContactFBImg}/>
                            <img src={ContactIGImg}/>
                            <img src={ContactTWImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;