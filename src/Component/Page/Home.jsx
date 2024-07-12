import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header/Header";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h2 className="text-2xl font-poppins font-bold">This is home</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border">
            <LeftSideNav></LeftSideNav>
        </div >
        <div className="col-span-3 border">
            <h2 className="text-2xl">New Coming soon</h2></div>
        <div className="border">
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
