import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

import useGet from "../hooks/useGet"
import deleteRequest from "../scripts/shared/delete"
import put from "../scripts/shared/put";

const Permssions = () => {
    const params = useParams()
    const {isPending, data:permissions} = useGet(`/permissions?role_id=${params.role_id}`)
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            await put(`/permissions/${e.target.attributes.data_id.value}`,JSON.stringify(object))
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }

    const handleDelete = async(e) => {
        e.preventDefault()
        try {
            await deleteRequest(`/permissions/${e.target.attributes.data_id.value}`)
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section>
            {
                isPending ? "loading" :
                permissions.map(({permission_id,name}) =>

                    <div key={permission_id}>
                        <form onSubmit={handleSubmit} data_id={permission_id}>
                            <label htmlFor="name">Permission:</label><br/>
                            <input type="text" id="name" name="name"  defaultValue={name}/><br/>
                            
                            <button type="submit">Submit</button>
                        </form>
                        <div>
                            <span>{name} </span>
                            <span data_id={permission_id} onClick={handleDelete}>Delete</span>
                        </div>
                    </div>
                    
                )
            
            }
        </section>
     );
}
 
export default Permssions;