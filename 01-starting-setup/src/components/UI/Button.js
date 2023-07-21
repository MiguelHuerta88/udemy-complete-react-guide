
const Button = (props) => {

    return <button type={props.type} onClick={props.onClickAddExpense}>{props.children}</button>
}

export default Button