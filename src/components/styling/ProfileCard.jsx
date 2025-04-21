const ProfileCard = () => {
    const styles = {
        backgroundColor: 'lightgray',
        padding: '15px',
        borderRadius: '8px',
        color: 'black',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '16px',
        marginTop: '20px',
    }

    return (
        <div style={styles}>
            <h1>Profile Card</h1>
            <p>This is a card component that can be used to display user profile information.</p>
        </div>
    )
}

export default ProfileCard;