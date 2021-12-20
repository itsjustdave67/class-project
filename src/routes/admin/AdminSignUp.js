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
                window.location.href = "../admin/dashboard" 
            }
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section className="text-center">
            <div className="bg-primary text-white p-3 text-large mb-2">Hotel Task Website</div>
            <div>Admin area</div>
            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name:</label><br/>
                    <input className="form-control" type="text" id="name" name="name" required/><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input className="form-control" type="email" id="email" name="email" required/><br/>
                    <label htmlFor="username">Username:</label><br/>
                    <input className="form-control" type="text" id="username" name="username" required/><br/>
                    <label htmlFor="password">password:</label><br/>
                    <input className="form-control" type="text" id="password" name="password" required/>
                    <button className="btn btn-primary mt-3" type="submit">Submit</button>
                </form>
            </div>
            <div><Link className="btn btn-primary mt-3" to="../admin/login">Login</Link></div>
            <div><Link className="btn btn-primary mt-3" to="../admin/login">Forgot Password</Link></div>
     
        </section>
     );
}
 
export default SignUp;