const UserList = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
      ;
    </div>
  );
};

export default UserList;
