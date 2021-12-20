import { useState } from "react"
import { Link } from "react-router-dom";

import post from "../../scripts/shared/post"

const SignUp = () => {
    const [error,setError] = useState(null)
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            await post("/users",JSON.stringify(object))
        } catch (err){
            setError(err.message)
        }
    }
    return ( 
        <section>
            <div>
                <h1>Hotel task app</h1>
            </div>
            <div>
                <div><p>{error ? error : "" }</p></div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name:</label><br/>
                    <input type="text" id="name" name="name" /><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" name="email"/><br/>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username"/><br/>
                    <label htmlFor="password">password:</label><br/>
                    <input type="password" id="password" name="password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/forgot-password">Forgot Password</Link></div>
     
        </section>
     );
}
 
export default SignUp;