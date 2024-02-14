
const Button = ({ label, onClick, disabled,type ,style}) => {
    return (
        <button
            className={style}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {label}

        </button>
    )
}

export default Button
