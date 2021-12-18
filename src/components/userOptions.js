import useGet from "../hooks/useGet"

const UserOptions = () => {
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
 
export default UserOptions;