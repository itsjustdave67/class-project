import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section className="text-center">
            <div className="bg-primary text-white p-3 text-large mb-2">Hotel Task Website</div>
            
            <p>Select area to proceed to:</p>
            <div ><Link to="/admin/login" className="btn btn-primary m-3 text-white">Proceed to Admin area</Link></div>
            <div><Link to="/client/login" className="btn btn-primary m-3 text-white">Proceed to Employee area</Link></div>
        </section>
     );
}
 
export default Home;