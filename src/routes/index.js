import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section>
            <div><Link to="/admin/login">Admin area</Link></div>
            <div><Link to="/client/login">Employee area</Link></div>
        </section>
     );
}
 
export default Home;