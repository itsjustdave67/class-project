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
        <section className="p-3">
            <p className="fw-bold">Permssions</p>
            {
                isPending ? "loading" :
                permissions.map(({permission_id,name}) =>

                    <div key={permission_id}>
                        <form onSubmit={handleSubmit} data_id={permission_id}>
                        <div className="row bg-light">
                            <div className="col">
                            <label htmlFor="name">Permission:</label><br/>
                            <input className="form-control" type="text" id="name" name="name"  defaultValue={name}/><br/>
                            </div>
                            <div className="col">

                            <button className="btn btn-primary mt-3" type="submit">Change</button>
                            </div>
                            <div className="col">
                            <button className="btn btn-danger mt-3" data_id={permission_id} onClick={handleDelete}>Delete</button>
                            </div>
                            </div>
                        </form>
                        <div>
                        </div>
                    </div>
                    
                )
            
            }
        </section>
     );
}
 
export default Permssions;