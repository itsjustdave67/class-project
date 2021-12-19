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
    <section className="text-center">
        <div className="bg-primary text-white p-3 text-large mb-2">Hotel Task Website</div>
        <div>Admin area</div>
            <div className="p-4">
                {
                    isPending ? "loading" : 
                    <form onSubmit={handleSubmit} data_id={role.role_id}>
                        <label htmlFor="name">Task:</label><br/>
                        <input className="form-control" type="text" id="name" name="name"  defaultValue={role.name}/><br/>
                        
                        <button className="btn btn-primary mt-3"type="submit">Change</button>
                    </form>
                }
                
        </div>
        <div className="bg-light">
            <PermissionForm/>
        </div>
        <div>
            <Permssions/>
        </div>
    </section> 
    );
}
 
export default Roles;