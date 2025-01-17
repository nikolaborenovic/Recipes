import './about.style.css'
import AboutImg from '../../assets/about.png'

const About = () => {
    return(
        <div className='about_holder'>
            <div className='about_wrapper'>
                    <div className='about_textIntro'>
                        <h2>Welcome to Healthy Delights!</h2>
                        <p>This is your go-to destination for delicious, nutritious recipes that fuel your body and delight your taste buds.</p>
                        <p>We believe that eating healthy shouldn’t mean sacrificing flavor or enjoyment. Our mission is to empower you with simple, wholesome recipes made from fresh, natural ingredients. Whether you’re a seasoned chef or a kitchen newbie, our step-by-step guides and creative meal ideas make it easy to cook nutritious meals for yourself and your loved ones.</p>
                    </div>
                    <div className='about_siteBenefits'>
                        <h2>Why Choose Healthy Delights?</h2>
                        <dl className='about_benefitsList'>
                            <div className='about_benefit'>
                                <dt>Nutrition:</dt>
                                <dd>Every recipe is designed to provide the perfect blend of vitamins, minerals, and macronutrients.</dd>
                            </div>
                            <div className='about_benefit'>
                                <dt>Ingredients:</dt>
                                <dd>We prioritize seasonal, organic, and minimally processed ingredients to bring out the best flavors.</dd>
                            </div> 
                            <div className='about_benefit'>
                                <dt>Diets:</dt>
                                <dd> From plant-based and gluten-free to keto and paleo, we cater to a variety of dietary preferences and lifestyles.</dd>
                            </div>
                            <div className='about_benefit'>
                                <dt>Quick:</dt>
                                <dd>Life is busy, so our recipes are created to fit your schedule, with plenty of options ready in under 30 minutes.</dd>
                            </div>
                        </dl>
                        <img src={AboutImg}/>
                    </div>
            </div>
        </div>
    )
}

export default About;