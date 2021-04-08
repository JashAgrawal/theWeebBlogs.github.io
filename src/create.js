import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,settitle] = useState('');
    const [body,setbody] = useState('');
    const [author,setauthor] = useState('');
    const [pending,setpending] = useState(false);
    const history = useHistory();
    const handlesubmit = (e)=> {
        e.preventDefault();
        const blog = {title,body,author};
        setpending(true);
        fetch('http://localhost:3001/posts',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setpending(false);
            history.push('/')
        })
    };
    return (  <div className="create">
        <h1>Create your New Blog</h1>
        <form className='forms' onSubmit={handlesubmit}>
            <label>Blog Title :- </label>
            <input type="text" required value={title} onChange={(e)=>{settitle(e.target.value)}}></input><br /><br />
            <label>Blog body :- </label><br />
            <textarea type="text" required value={body} onChange={(e)=>{setbody(e.target.value)}}></textarea><br />
            <label>Blog Author :-</label>
            <select required value={author} onChange={(e)=>{setauthor(e.target.value)}}>
                <option value="omen">omen</option>
                <option value="yoru">yoru</option>
                <option value="jett">jett</option>
            </select><br />
            {!pending && <button> ADD BLOG </button>}
            { pending && <button disabled>ADDING BLOG . . . . </button>}
        </form>

    </div>);
}
 
export default Create;