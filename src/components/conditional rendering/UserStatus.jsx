const UserStatus = (props) => {
    const {loggedIn, isAdmin} = props;

    return (
        <div>
            {loggedIn && isAdmin && <p>Welcome, Admin!</p>}
            {loggedIn && !isAdmin && <p>Welcome, User!</p>}
            {!loggedIn && <p>Please log in.</p>}
        </div>
    )
}

export default UserStatus;