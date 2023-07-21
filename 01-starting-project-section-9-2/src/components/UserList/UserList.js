import UserListItem from "./UserListItem";
import styles from './UserList.module.css'
import Card from "../UI/Card/Card";

const UserList = props => {

    return <Card>
        <ul className={styles.list}>
            {props.items.map(item => <UserListItem username={item.username} age={item.age} id={item.id} />)}
        </ul>
    </Card>
}

export default UserList;