
import React, { useEffect, useState } from 'react';

function Fetch() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://reqres.in/api/users");
                const data = await response.json();
                setUser(data.data);
            } catch (error) {
                console.log("error occurred");
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Users data</h1>
            <ul>
                {user.map((item) => (
                    <li key={item.id}>
                        <p>Email: {item.email}</p>
                        <p>First Name: {item.first_name}</p>
                        <p>Last Name: {item.last_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Fetch;
