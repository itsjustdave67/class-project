import useGet from "../hooks/useGet"
import deleteRequest from "../scripts/shared/delete"
import post from "../scripts/shared/post"
import put from "../scripts/shared/put"
import CreateUser from "./createUser"

const RoleOptions = () => {
    const {isPending, data:users} = useGet(`/users`)

    return ( 
        <select id="to" name="to" >
            {
                isPending ? "loading" :
                users.map(({user_id,name}) =>
                    <option key={user_id} value={user_id}> 
                        {user_id} | {name} 
                    </option>
                    
                )
            
            }
            
        </select>
     );
}

const GetRole = ({id}) => {
    const {isPending, data:role} = useGet(`/roles/${id}`)
    
    return ( 
        <span>
            { isPending? "loading" :
                <span>
                    role:{role ? role.name :"none"}
                </span>
            }
        </span>
     )
}

const GetRoleForm = ({user}) => {
    const {isPending, data:roles} = useGet(`/roles`)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const object = {}
        formData.forEach((value, key) => object[key] = value)
        try {
            await put(`/users/${user.user_id}`,JSON.stringify(object))
            window.location.reload()
        } catch (err){
            alert(err.message)
        }
    }

    return ( 
        <form onSubmit={handleSubmit} >
            <label htmlFor="user_id">user id:</label><br/>
            <input type="text" id="user" name="user_id" required defaultValue={user.user_id} disabled/><br/>

            <label htmlFor="name">Full name:</label><br/>
            <input type="text" id="name" name="name" required defaultValue={user.name}/><br/>

            <label htmlFor="email" >Email:</label><br/>
            <input type="email" id="email" name="email" required defaultValue={user.email}/><br/>

            <label htmlFor="username">Username:</label><br/>
            <input type="text" id="username" name="username" required defaultValue={user.username}/><br/>

            <label htmlFor="password">password:</label><br/>
            <input type="text" id="password" name="password" required  defaultValue={user.password}/>

            <label htmlFor="role_id">Assign new role</label>
            {isPending ? "loading" :
                <select id="role" name="role_id" >
                    {
                        roles.map(({role_id,name}) => 
                            <option key={role_id} value={role_id}> 
                                {name ? name :""} 
                            </option>
                        )
                    }
                </select>                
            }           
            <button type="submit">Submit</button>
        </form>
     )
}

const UserRoles = () => {
    const {isPending, data:users} = useGet(`/users`)
    
    const handleDelete = async({target}) => {
        try {
            await deleteRequest(`/users/${target.attributes.data_id.value}`)
            window.location.reload()
        } catch (err){
            debugger
            alert(err.message)
        }
    }
    return ( 
        <section>
            <div>
                <CreateUser />
            </div>
            user roles<br/>
            {
                isPending ? "loading" :
                users.map((user) =>
                    <div key={user.user_id}>
                        <div>
                            <span>{user.name} </span>
                            <span><GetRole id={user.role_id}/> </span>
                            <GetRoleForm user={user}/>
                            <span data_id={user.user_id} onClick={handleDelete}>Delete</span>
                        </div>
                    </div>                    
                )            
            }
        </section>
     );
}
 
export default UserRoles;