import {useState , useEffect} from 'react';


const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [wait,setwait] = useState(true);
    const [error,seterror] = useState(null); 

    useEffect(()=>{
        const abort = new AbortController();
        fetch(url,{signal: abort.signal} )
        .then( res =>{
            if (!res.ok){
                throw Error('nhi mila data')
            }
            return   res.json();
        })
        .then(data =>{
            setData(data);
            setwait(false);
        }).catch( err => {
            // console.log(err.message);
            if(err.name === 'AbortError'){
                console.log("fetch aborted")
            }else{
                seterror(err.message);
                setwait(false);
            }
        })
    
    return ()=> abort.abort();

    },[]);
    return {data ,wait, error}
    

};
export default useFetch;