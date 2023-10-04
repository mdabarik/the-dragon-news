import Header from "../../pages/shared/Header/Header";
import LeftSideNav from "../../pages/shared/LeftSideNav/LeftSideNav";
import Navbar from "../../pages/shared/Navbar/Navbar";
import RightSideNav from "../../pages/shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border-2">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border-2">
                    <h2 className="text-4xl">News coming soon...</h2>
                </div>
                <div className="border-2">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;