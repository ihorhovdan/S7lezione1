const Button = (props) => {
    return <button type="button" onClick={()=> window.alert(`Io sono ${props.nameB}`)}>{props.nameB}</button>
}

export default Button;