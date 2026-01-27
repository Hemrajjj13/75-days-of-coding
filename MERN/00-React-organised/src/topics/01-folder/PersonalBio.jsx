import React from 'react'
import Hemraj from "./assets/Hemraj.png"
import styles from './PersonalBio.module.css'

const PersonalBio = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Hemraj Suryawanshi</h1>

      <div className={styles.container}>
        <div className={styles.left}>
          <h3>About</h3>
          <p>
            I'm Hemraj, a passionate developer who enjoys building clean,
            efficient, and user-friendly web applications. I focus on learning
            modern technologies and continuously improving my skills.
          </p>
        </div>

        <div className={styles.right}>
          <img src={Hemraj} alt="Hemraj" />
        </div>
      </div>
    </div>
  )
}

export default PersonalBio
