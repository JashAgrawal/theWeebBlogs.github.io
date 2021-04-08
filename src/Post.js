import { useState , useEffect } from 'react';
import { useHistory } from "react-router-dom";
const UsePost = () => {
    const [input1='',setinput1] = useState('');
    const [input2='',setinput2] = useState('');
    const [input3='',setinput3] = useState('');
    const [pending='',setpending] = useState(false);
    const history = useHistory();
    
    
    const handlesubmit = (e)=> {
        e.preventDefault();
        const details = {input1,input2};
        setpending(true);
        fetch('http://localhost:3000/details',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(details)
        }).then(()=>{
            setpending(false);
            history.push('/')
        })
    };

    return {input1,input2,input3,pending,setinput1,setinput2,setinput3};
}
 
export default UsePost;