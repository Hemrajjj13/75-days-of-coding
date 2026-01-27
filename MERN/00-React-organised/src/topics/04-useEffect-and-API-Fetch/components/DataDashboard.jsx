import React, { useEffect, useState } from 'react'
import styles from './DataDashboard.module.css'

const DataDashboard = () => {

    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refetchIndex, setRefetchIndex] = useState(0);

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            setLoading(true);
            setError(null);
            setData([]);


            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/${type}`,
                    { signal }
                );

                console.log("response.ok", response.ok);//********** */
                
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                setData(result);
                console.log("Result:", result); //********** */
            } catch (err) {
                if(err.name !== "AbortError") {
                    setError(err.message);
                    console.log(err.message);//********** */
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        // Clean Up

        return () => {
            controller.abort();
        }

    }, [type, refetchIndex]);

  return (
    <div className={styles.container}>

        <h2>Data Dashboard</h2>

        {/* Dropdown */}
        <select value={type} onChange={e => setType(e.target.value)}>
            <option value={"users"}>Users</option>
            <option value={"posts"}>Posts</option>
            <option value={"comments"}>Comments</option>
        </select>

        {/* Refetch */}
        <button onClick={() => setRefetchIndex((i) => i + 1)}>
            Refetch
        </button>

        {/* States */}
        {loading && <p>Loading ...</p>}
        {!loading && !error && (
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {type === 'users' && item.name}
                        {type === 'posts' && item.title}
                        {type === 'comments' && item.email}
                    </li>
                ))}
            </ul>
        )}

    </div>
  )
}

export default DataDashboard