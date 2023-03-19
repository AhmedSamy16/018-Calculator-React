
const checker = val => {
    return !isNaN(val) || val === "." || val === "="
}

const Button = ({ children, handleClick }) => {
    return <div onClick={() => handleClick(children)} className={`button-wrapper ${!checker(children) && 'operator'}`}>
            {children}
        </div>
}

export default Button