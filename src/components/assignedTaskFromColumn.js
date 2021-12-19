import useGet from "../hooks/useGet"
import deleteRequest from "../scripts/shared/delete"
import GetUser from "./getUser"


const AssignedTasksFromColumn = () => {
    const {user_id} = JSON.parse(sessionStorage.getItem("user"))
    const {isPending, data:tasks} = useGet(`/assigned-tasks/from?from=${user_id}`)
    const handleDelete = async(e) => {
        try {
            await deleteRequest(`/assigned-tasks/${e.target.attributes.data_id.value}`)
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section className="p-3">
            <p>Tasks you've been assigned</p>
            {
                isPending ? "loading" :
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>From</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tasks.map(({assigned_task_id,name,to}) =>
                        <tr key={assigned_task_id}>
                            <td>{name} </td>
                            <td><GetUser id={to}/></td>
                            
                            <td ><button data_id={assigned_task_id} onClick={handleDelete} className="btn btn-danger">Delete</button></td>
                               
                        </tr>
                    
                    )
                    }
                    </tbody>
                </table>
                
            
            }
     
        </section>
     );
}
 
export default AssignedTasksFromColumn;