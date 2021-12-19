import post from "../scripts/shared/post"
const CreateUser = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            const user = await post("/users",JSON.stringify(object))
            if(user){
               window.location.reload() 
            }
            
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section className="p-4">
            <p className="fw-bold">Add new user</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name:</label><br/>
                <input className="form-control"type="text" id="name" name="name" required/><br/>
                <label htmlFor="email">Email:</label><br/>
                <input className="form-control"type="email" id="email" name="email" required/><br/>
                <label htmlFor="username">Username:</label><br/>
                <input className="form-control"type="text" id="username" name="username" required/><br/>
                <label htmlFor="password">password:</label><br/>
                <input className="form-control"type="password" id="password" name="password" required/>
                <button className="btn btn-primary mt-3" type="submit">Add user</button>
            </form>
        </section>
     );
}
 
export default CreateUser;