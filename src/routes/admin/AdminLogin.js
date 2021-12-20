import post from "../../scripts/shared/post"
import { Link } from "react-router-dom";

const AdminLogin = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            const user = await post("/users/login",JSON.stringify(object))
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
            <div  className="p-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label><br/>
                    <input className="form-control" type="text" id="username" name="username" required/><br/>
                    <label htmlFor="password">password:</label><br/>
                    <input className="form-control" type="text" id="password" name="password" required/>
                    <button className="btn btn-primary mt-3" type="submit">Login</button>
                </form>
            </div>
            <div><Link className="btn btn-primary mt-3" to="../admin/sign-up">Sign Up</Link></div>
            <div><Link className="btn btn-primary mt-3" to="../admin/login">Forgot Password</Link></div>
        </section>
     )
}
 
export default AdminLogin