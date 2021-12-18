import useGet from "../hooks/useGet"

const GetUser = ({id}) => {
    const {isPending, data:user} = useGet(`/users/${id}`)
    return ( 
        <span>
            {isPending? "loading" :user.name}
        </span>
     );
}
 
export default GetUser;