const post = async (url,data) => { 
    try {
        const res = await fetch(url,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: data
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
 
export default post;