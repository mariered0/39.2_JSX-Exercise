const Tweet = (props) => {
    return (<ul>
        <li>By: {props.name}</li>
        <li>By: {props.username}</li>
        <li>On: {props.date}</li>
        <li>Message: {props.message}</li>
    </ul>)
}