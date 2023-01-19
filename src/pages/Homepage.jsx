import LandingPage1 from "./landingpage/Landingpage1";
import Landingpage3 from "./landingpage/Landingpage3";
import BackToTopButton from "./components/BackToTopButton";

const HomePage = () => {
    
    document.title = "Michael - Full Stack Web Developer"; 
    
    return (
        <>
            <LandingPage1/>
            <Landingpage3/>
            <BackToTopButton/>
        </>
    );
}

export default HomePage;