const UserDetails = (props) => {

    return (
        <form>
            Username: <input type="text" onChange={(e) => {props.usernameChange(e.target.value)}}/> <br />
            Password: <input type="password" onChange={(e) => {props.passwordChange(e.target.value)}}/>
            <button onClick={props.submitAction}>{props.text}</button>
        </form>
    )
}

export default UserDetails