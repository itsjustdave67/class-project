import useGet from "../hooks/useGet"

const UserOptions = () => {
    const {isPending, data:users} = useGet(`/users`)

    return ( 
        <select id="to" name="to" class="form-select">
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
 
export default UserOptions;