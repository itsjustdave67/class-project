import { Link } from "react-router-dom"
import useGet from "../hooks/useGet"
import deleteRequest from "../scripts/shared/delete"

const RolesColumn = () => {
    const {isPending, data:roles} = useGet(`/roles`)
    const handleDelete = async(e) => {
        e.preventDefault()
        try {
            await deleteRequest(`/roles/${e.target.attributes.data_id.value}`)
            window.location.reload()
        } catch (err){
            debugger
            alert(err.message)
        }
    }
    return ( 
        <section className="p-3">
            <p className="fw-bold">NB: You cant delete role which is being is being used by a user or has a permmsision</p>
            {
                isPending ? "loading" :
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        roles.map(({role_id,name}) =>
                        <tr key={role_id}>
                            <td>{name}</td>
                            <td><Link to={`./roles/${role_id}`} className="btn btn-success"> Edit </Link></td>
                            <td><button data_id={role_id} onClick={handleDelete} className="btn btn-danger">Delete</button></td>
                        </tr>
                        
                    )
                    }
                    </tbody>
                </table>
                
            
            }
        </section>
     );
}
 
export default RolesColumn;