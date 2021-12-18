import post from "../scripts/shared/post"

const TasksForm = () => {
    
    const handleSubmit = async(e) => {
        try {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        const {user_id} = JSON.parse(sessionStorage.getItem("user"))
        object.user_id= user_id
        
            await post("/tasks",JSON.stringify(object))
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }
    return ( 
        <section>
            
            <div>
                <form onSubmit={handleSubmit} title="form">
                    <label htmlFor="name">Task:</label><br/>
                    <input type="text" title="name" id="name" name="name" required placeholder="add tasks"/><br/>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
     
        </section>
     );
}
 
export default TasksForm;