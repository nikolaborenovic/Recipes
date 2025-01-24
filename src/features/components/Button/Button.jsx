import './button.style.css'

const Button = ({ buttonText, buttonColour, buttonClick }) => {
    return(
        <button
        className='button_defaultStyle'
        onClick={buttonClick}
        style={{ backgroundColor: buttonColour }}
        >{buttonText}</button>
    )
}

export default Button;