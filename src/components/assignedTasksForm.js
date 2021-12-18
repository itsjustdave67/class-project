import { useState } from "react"

import post from "../scripts/shared/post"
import UserOptions from "./userOptions"

const AssignedTasksForm = () => {
    const [error,setError] = useState(null)
    
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
            setError(err.message)
        }
    }
    return ( 
        <section>
            
            <div>
                <div><p>{error ? error : "" }</p></div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Assign Task:</label><br/>
                    <input type="text" id="name" name="name" required/><br/>

                    <label for="to">Choose who to assign:</label>
                    <UserOptions/>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
     
        </section>
     );
}
 
export default AssignedTasksForm;