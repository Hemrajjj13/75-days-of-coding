import React, { useState } from 'react'

const FormData = () => {
    const [formData, setFormData] = useState({username: "", email: ""});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })

    }

    const handleClick = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username:'',
            email:''
        });

        console.log(FormData)
    }
  return (
    <div>
        <form onSubmit={handleClick}>
            <input 
                name= 'username'
                value={formData.username}
                onChange={handleChange}
            />
            <input 
                name= 'email'
                value={formData.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormData