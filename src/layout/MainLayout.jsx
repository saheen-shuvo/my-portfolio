import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Intro from "../components/Into";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;