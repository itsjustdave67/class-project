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
        <section className="text-center">
            <div className="bg-primary text-white p-3 text-large mb-2">Hotel Task Website</div>

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name:</label><br/>
                    <input className="form-control" type="text" id="name" name="name" required/><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input className="form-control" type="email" id="email" name="email" required/><br/>
                    <label htmlFor="username">Username:</label><br/>
                    <input className="form-control" type="text" id="username" name="username" required/><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input className="form-control" type="text" id="password" name="password" required/>
                    <button className="btn btn-primary mt-3"type="submit">Sign up</button>
                </form>
            </div>
            <div><Link to="../client/login" className="btn btn-primary mt-3">Login</Link></div>
            <div><Link to="../client/sign-up" className="btn btn-primary mt-3">Forgot Password</Link></div>
     
        </section>
     );
}
 
export default SignUp;