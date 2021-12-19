import useGet from "../hooks/useGet"
import deleteRequest from "../scripts/shared/delete"
import GetUser from "./getUser"


const AssignedTasksToColumn = () => {
    const {user_id} = JSON.parse(sessionStorage.getItem("user"))
    const {isPending, data:tasks} = useGet(`/assigned-tasks/to?to=${user_id}`)
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
            <p className="fw-bold">Tasks you've been assigned</p>
            {
                isPending ? "loading" :
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tasks.map(({assigned_task_id,name,from}) =>
                        <tr key={assigned_task_id}>
                            <td>{name} </td>
                            <td><GetUser id={from}/></td>
                            <td data_id={assigned_task_id} onClick={handleDelete} className="btn btn--danger"><button>Delete</button></td>
                        </tr>
                    )
                    }
                    </tbody>
                </table>
                
            
            }
     
        </section>
     );
}
 
export default AssignedTasksToColumn;