import { useParams } from "react-router-dom";


import post from "../scripts/shared/post"
const PermissionForm = () => {
    const params = useParams()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        object.role_id = params.role_id
        try {
            await post("/permissions",JSON.stringify(object))
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section>
            <div>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Permission:</label><br/>
                    <input type="text" id="name" name="name" required/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
     );
}
 
export default PermissionForm;