import { Link } from "react-router-dom";

import post from "../../scripts/shared/post"

const SignUp = () => {
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            const user = await post("/users",JSON.stringify(object))
            if(user){
                sessionStorage.setItem("user",JSON.stringify(user))
                window.location.href = "../client/dashboard" 
            }            
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section>
            <div>
                <h1>Hotel task app</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name:</label><br/>
                    <input type="text" id="name" name="name" required/><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" name="email" required/><br/>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username" required/><br/>
                    <label htmlFor="password">password:</label><br/>
                    <input type="password" id="password" name="password" required/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div><Link to="../client/login">Login</Link></div>
            <div><Link to="../client/forgot-password">Forgot Password</Link></div>
     
        </section>
     );
}
 
export default SignUp;