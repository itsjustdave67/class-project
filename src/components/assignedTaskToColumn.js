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
        <section>
            <p>Tasks youve been assigned</p>
            {
                isPending ? "loading" :
                tasks.map(({assigned_task_id,name,from}) =>
                    <div key={assigned_task_id}>
                        <div>
                            <span>{name} </span>
                            <span><GetUser id={from}/></span>
                            
                            <span data_id={assigned_task_id} onClick={handleDelete}>Delete</span>
                        </div>
                    </div>
                    
                )
            
            }
     
        </section>
     );
}
 
export default AssignedTasksToColumn;