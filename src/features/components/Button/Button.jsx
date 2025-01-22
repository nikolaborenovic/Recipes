import './button.style.css'

const Button = ({ buttonText, buttonColour, buttonClick }) => {
    return(
        <button
        onClick={buttonClick}
        style={{ backgroundColor: buttonColor }}
        >{buttonText}</button>
    )
}

export default Button;