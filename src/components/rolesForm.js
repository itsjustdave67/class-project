import post from "../scripts/shared/post"
const RolesForm = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            await post("/roles",JSON.stringify(object))
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section>
            <div className="p-4">
                
                <form onSubmit={handleSubmit} title="form">
                    <label htmlFor="name">Role:</label><br/>
                    <input className="form-control" title="name" type="text" id="name" name="name" required  placeholder="add role"/><br/>
                    
                    <button className="btn btn-primary mt-3"type="submit">Submit</button>
                </form>
            </div>
        </section>
     );
}
 
export default RolesForm;