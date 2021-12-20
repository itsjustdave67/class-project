import { useState } from "react"
import post from "../../scripts/shared/post"
import { Link } from "react-router-dom";

const Login = () => {
    const [error,setError] = useState(null)
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            const user = await post("/users/login",JSON.stringify(object))
            sessionStorage.setItem("user",JSON.stringify(user))
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
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username"/><br/>
                    <label htmlFor="password">password:</label><br/>
                    <input type="password" id="password" name="password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div><Link to="/sign-up">Sign Up</Link></div>
            <div><Link to="/forgot-password">Forgot Password</Link></div>
        </section>
     )
}
 
export default Login