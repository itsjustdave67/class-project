import { useParams } from "react-router-dom";
import PermissionForm from "../../components/permissionForm";
import Permssions from "../../components/permissions";
import useGet from "../../hooks/useGet";
import put from "../../scripts/shared/put"

const Roles = () => {  
    const params = useParams()
    const {isPending, data:role} = useGet(`/roles/${params.role_id}`)
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            await put(`/roles/${e.target.attributes.data_id.value}`,JSON.stringify(object))
            window.location.reload()
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
                {
                    isPending ? "loading" : 
                    <form onSubmit={handleSubmit} data_id={role.role_id}>
                        <label htmlFor="name">Task:</label><br/>
                        <input type="text" id="name" name="name"  defaultValue={role.name}/><br/>
                        
                        <button type="submit">Submit</button>
                    </form>
                }
                
        </div>
        <div>
            <PermissionForm/>
        </div>
        <div>
            <Permssions/>
        </div>
    </section> 
    );
}
 
export default Roles;