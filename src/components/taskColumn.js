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
        <section className="p-3">
            <p className="fw-bold">Tasks</p>
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
                    tasks.map(({task_id,name}) =>
                        <tr key={task_id}>
                            <td>{name} </td>
                            <td ><button data_id={task_id} onClick={handleDelete} className="btn btn-danger">Delete</button></td>
                        </tr>
                        
                    )}
                    </tbody>
                </table>               
            
            }
     
        </section>
     );
}
 
export default TasksColumn;