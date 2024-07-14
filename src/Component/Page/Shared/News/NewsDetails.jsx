import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";

const NewsDetails = () => {
    const {id}=useParams();

    return (
        <div>
            <Navbar></Navbar>
           <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                <h2 className="text-2xl">News Details </h2>
                <p>{id}</p>
            </div>
            <div>
                 <RightSideNav></RightSideNav></div>
           </div>
        </div>
    );
};

export default NewsDetails;