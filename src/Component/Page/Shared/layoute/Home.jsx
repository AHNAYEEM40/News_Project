
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import BreakingNews from "../News/BreakingNews";
import RightSideNav from "../RightSideNav/RightSideNav"
import NewsCard from "./NewsCard";


const Home = () => {
  const news =useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h2 className="text-2xl font-poppins font-bold">This is home</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div >
            <LeftSideNav></LeftSideNav>
        </div >
        <div className="col-span-2 ">
          {
            news.map(aNews => <NewsCard
              key={aNews._id}
              news={aNews}>

            </NewsCard>)
          }
            <h2 className="text-2xl">New Coming soon</h2></div>
        <div>
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
