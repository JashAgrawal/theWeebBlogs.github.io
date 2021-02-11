// import{ useEffect, useState } from 'react';
// import kaka from './kaka.jpg';
// import bg from './bg.jpg';
// import hh from './hh.png';
import Bloglist from './bloglist';
import useFetch from './useFetch'
// var image = require('./kaka.jpg');

const Home = () => {
   const { data: blog,wait,error} = useFetch('http://localhost:3000/posts');
    return ( 
        <div className="home">
            {error && <h1 className="loading">Error  ......</h1>}
            {wait && <h1 className="loading">Loading ......</h1>}
          {blog && <Bloglist blog={blog} title="All Blogs" />}
          {/* {blog && <Bloglist blog={blog.filter((blog)=> blog.author === "modi"  )}  title="MY BLOGS"/>} */}

        </div>
     );
}
 
export default Home;