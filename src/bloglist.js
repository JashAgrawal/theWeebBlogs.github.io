const { Link } = require('react-router-dom');
// var image = require('./kaka.jpg');
const Bloglist = ({blog,title}) => {
    // console.log(blog);
    
    return ( 
        <div className="bloglist">
          <h2>{title}</h2>
             {blog.map((blog)=>(
               <div className="content-preview" key={blog.id}>
                   <Link to={`/blogs/${blog.id}`}>
                      <ul>
                      <li><h1>{blog.title}</h1>
                      <p>{blog.body.slice(0,20)}</p></li>
                      {/* <li> <img src={image.default} alt="profile"/></li> */}
                      </ul>
                  </Link>
                </div>
                ))}

        </div>
     );
}
 
export default Bloglist;