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
        <section>
            <p>Tasks you have assigned others</p>
            {
                isPending ? "loading" :
                tasks.map(({assigned_task_id,name,to}) =>
                    <div key={assigned_task_id}>
                        <div>
                            <span>{name} </span>
                            <span><GetUser id={to}/> fd</span>
                            <span data_id={assigned_task_id} onClick={handleDelete}>Delete</span>
                        </div>
                    </div>
                    
                )
            
            }
     
        </section>
     );
}
 
export default AssignedTasksFromColumn;