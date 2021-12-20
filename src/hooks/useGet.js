import { useState, useEffect } from 'react';

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    useEffect(() => {
        const fetchData = async(url) => {
          try {
              const res = await fetch(url)
              if(res.ok){
                setData(await res.json()) 
                setIsPending(false)
              } else {
                throw Error(await res.json())
              }
              
          }
          catch (err){
              setIsPending(false)
              alert(err.message)
          }
        }
        
        fetchData(url)
  
      },[url])
  return { data, isPending};
}
 
export default useGet;
