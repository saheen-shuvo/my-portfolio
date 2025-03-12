import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Intro from "../components/Into";
import About from "../components/About";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;