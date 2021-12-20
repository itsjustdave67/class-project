import post from "../scripts/shared/post"
import UserOptions from "./userOptions"

const AssignedTasksForm = () => {
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        const {user_id} = JSON.parse(sessionStorage.getItem("user"))
        object.from = user_id
        try {
            await post("/assigned-tasks",JSON.stringify(object))
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section>
            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Assign Task:</label><br/>
                    <input className="form-control" type="text" id="name" name="name" required/><br/>

                    <label for="to">Choose who to assign:</label>
                    <UserOptions/>
                    
                    <button className="btn btn-primary mt-3" type="submit">Assign Task</button>
                </form>
            </div>
     
        </section>
     );
}
 
export default AssignedTasksForm;