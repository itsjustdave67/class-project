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
        <section>
            <p>nb: you cant delete role which is being used as a foreign key</p>
            {
                isPending ? "loading" :
                roles.map(({role_id,name}) =>
                    <div key={role_id}>
                        <div>
                            <span>{name}</span>
                            <span><Link to={`./roles/${role_id}`}> Edit </Link></span>
                            <span data_id={role_id} onClick={handleDelete}>Delete</span>
                        </div>
                    </div>
                    
                )
            
            }
        </section>
     );
}
 
export default RolesColumn;