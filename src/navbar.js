import {Link} from 'react-router-dom'
const Navbar = () => {
    const clicked =()=>{
        
    }
    return ( 
        
        <nav className="navbar">
            <h1>THE WEEB's BLOG !!!!</h1>
            <div className="links">
                <Link to='/'>HOME</Link>
                {/* <a href="/">HOME</a> */}
                <Link to="/create">NEW BLOG</Link>
                <Link to="/login"><button onClick={clicked}>Sign in</button></Link>

            </div>

        </nav>
        
     );
}
 
export default Navbar;