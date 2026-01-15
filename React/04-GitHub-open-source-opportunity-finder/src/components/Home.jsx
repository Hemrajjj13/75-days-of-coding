import React, { useState } from 'react'
import styles from './Home.module.css'

const Home = () => {
    const [language, setLanguage] = useState("javascript");
    const [loading, setLoading] = useState(false);
    const [issues, setIssues] = useState([]);
    const [error, setError] = useState(null);


    const loadIssues = async () => {
        setLoading(true);
        setError(null);
        setIssues([]);

        const query = `label:"good first issue" language:${language} state:open`;
        const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&order=desc`;

        try {
            const response = await fetch(url, {
                headers: {
                    "Accept": "application/vnd.github+json",
                    "User-Agent": "issue-finder-app"
                }
            });
            
            if (!response.ok) {
                throw new Error("Github API error");
            }

            const data = await response.json();
            /****************************/
            // console.log(JSON.parse(data))
            /****************************/
            if (!data.items || data.items.length === 0) {
                setIssues([]);
                return;
            }
            setIssues(data.items.slice(0, 10));
        } catch (err) {
            setError ("Error fetching data.");
            console.error(err);
        } finally {
            setLoading(false);
        }


    }; 
  return (
    <div className={styles.page} >

        <div className={styles.container}>
            <h1 className={styles.title}>GitHub Open-Source Opportunity Finder</h1>

            <div className={styles.controls}>
                <select
                    className={styles.select}
                    id='language' 
                    value={language} 
                    onChange={e => setLanguage(e.target.value)}
                >
                    <option value={"javascript"}>Jvascript</option>
                    <option value={"java"}>Java</option>
                    <option value={"python"}>Python</option>
                    <option value={"go"}>Go</option>
                    <option value={"typescript"}>TypeScript</option>
                </select>

                <button 
                    onClick={loadIssues}
                    className={styles.button}
                >
                    Find Issues
                </button>
            </div>

            <div className={styles.issueCard} >
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {!loading && !error && issues.length === 0 && (<div>No issues found.</div>
                )}

                {issues.map((issue) => (
                    <div 
                        key={issue.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: 12,
                            margin: "10px 0",
                        }}
                    >
                        <div style={{fontWeight: "bold"}}>
                            {issue.repository_url.replace("https://api.github.com/repos/","")}
                        </div>
                        <div>{issue.title}</div>
                        <a 
                            href={issue.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#0366d6", textDecoration: "none" }}
                        >
                            View Issue →
                        </a>
                    </div>
                ))}
            </div>
        </div>





    </div>
  )
}

export default Home

// https://api.github.com/search/issues?q=${encodeURIComponent(label:"good first issue"+java+state:open)}&sort=update&order=desc