import React, { use, useEffect, useState } from 'react'

const Loading = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data  = await res.json();
                setUsers(data);
                setLoading(false);
            } catch {
                setError("Something went wrong");
            }
        }

        fetchData();
    }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
        <h2>Users</h2>
        {users.map(user => (
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default Loading