import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Intro from "../components/Into";

const MainLayout = () => {
    return (
        <div className="bg-[#0D0D0D]">
            <Navbar></Navbar>
            <Intro></Intro>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;