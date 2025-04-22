import { useState } from "react"

const Profile = () => {
    const [user, setUser] = useState({
        name: "Arthur Morgan",
        age: 35,
        location: "West Elizabeth",
        occupation: "Outlaw",
    })

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleUpdate = () => {
        setUser({...user, name: name ? name : user.name, age: age ? age : user.age})
        setName('')
        setAge('')
    }

    return (
        <div className="profile-card">
            <h2>Profile</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
            <p>Occupation: {user.occupation}</p>
            
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <label htmlFor="age">Age: </label>
            <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
            <br />

            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default Profile;