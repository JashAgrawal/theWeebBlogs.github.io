import './details.css'
import { useParams } from "react-router-dom";
import Bloglist from "./bloglist";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog ,wait ,error} = useFetch('http://localhost:3000/posts/'+ id);
    return ( 
    <div className="blogdetails">
    {wait && <p>Loading. . . . . </p>}
    {error && <p>Error . . . . .</p>}
    {blog && (<div className="detailsbody">
        <h1>{blog.title}</h1><br />
        <p className="blogbody">{blog.body}</p><br />
        <h3>WRITTEN BY <p>{blog.author}</p></h3>
    </div>
    )}
        </div>
        
    );
    
}
 
export default BlogDetails;