const deleteRequest = async (url) => {  
    try {
        const res = await fetch(url,{
            method: "DELETE",
        })
        if(res.ok) {
            return( await res.json())
        } else{
            throw Error( await res.json())
        }
        
    }
    catch (err){
        alert(err.message)
    }    
}
 
export default deleteRequest;