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
                    {role ? role.name :"none"}
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
        <div className="py-3">
            
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col">
                    <label htmlFor="user_id">user id:</label><br/>
                    <input className="form-control" type="text" id="user" name="user_id" required defaultValue={user.user_id} disabled/><br/>
                    </div>
                    <div className="col">
                <label htmlFor="name">Full name:</label><br/>
                <input className="form-control" type="text" id="name" name="name" required defaultValue={user.name}/><br/>
                </div>

                <div className="col">
                <label htmlFor="email" >Email:</label><br/>
                <input className="form-control" type="email" id="email" name="email" required defaultValue={user.email}/><br/>
                </div>

                <div className="col">
                <label htmlFor="username">Username:</label><br/>
                <input className="form-control" type="text" id="username" name="username" required defaultValue={user.username}/><br/>
                </div>

                <div className="col">
                <label htmlFor="password">password:</label><br/>
                <input className="form-control" type="text" id="password" name="password" required  defaultValue={user.password}/>
                </div>
                
                <div className="col">
                <label htmlFor="role_id">Assign new role</label>
                {isPending ? "loading" :
                    <select id="role" name="role_id" className="form-select">
                        {
                            roles.map(({role_id,name}) => 
                                <option key={role_id} value={role_id}> 
                                    {name ? name :""} 
                                </option>
                            )
                        }
                    </select>                
                } 
                    </div>
                <div className="col">
                <button className="btn btn-primary mt-3" type="submit">Change</button>
                </div>

                </div>
            </form>
        </div>
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
            <CreateUser />
            <p className="fw-bold">User Details</p>
            <p className="fw-bold">NB: You cant delete a user which has a task or assigned task or has a assigned a task</p>

            <div className="p-3">
            {
                isPending ? "loading" :
                
                users.map((user) =>
                <div key={user.user_id} className="bg-light p-1 m-3">

                        <p><strong>Name: </strong>{user.name} </p>
                        <p><strong>Role: </strong><GetRole id={user.role_id}/> </p>
                        <p><button  data_id={user.user_id} onClick={handleDelete} className="btn btn-danger">Delete</button> </p>
                        <GetRoleForm user={user}/>
                        
                </div>                    
                ) 
                           
            }
            </div>
        </section>
     );
}
 
export default UserRoles;