import useGet from "../hooks/useGet"
import deleteRequest from "../scripts/shared/delete"


const TasksColumn = () => {
    const {user_id} = JSON.parse(sessionStorage.getItem("user"))
    const {isPending, data:tasks} = useGet(`/tasks/?user_id=${user_id}`)
    const handleDelete = async({target}) => {
        try {
            await deleteRequest(`/tasks/${target.attributes.data_id.value}`)
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section>
            <p>tasks</p>
            {
                isPending ? "loading" :
                tasks.map(({task_id,name}) =>
                    <div key={task_id}>
                        <div>
                            <span>{name} </span>
                            <span data_id={task_id} onClick={handleDelete}>Delete</span>
                        </div>
                    </div>
                    
                )
            
            }
     
        </section>
     );
}
 
export default TasksColumn;