import Navbar from "./compoents/navbar";
import LeftPanel from "./compoents/leftbar";
import RightPanel from "./compoents/rightbar";
import Profile from "./compoents/profile";
import About from "./compoents/about";
import ShowProjects from "./compoents/projects";
import ShowWork from "./compoents/work";
import MySkill from "./compoents/myskills";
import Contact from './compoents/contact';
function Index() {
    return(
        <>
        <div className="lg:h-screen">
        <Navbar />
        <div className="flex ">
        <LeftPanel />
        <Profile/>
        </div>
        <RightPanel />
        </div>
        
        <About />
        <ShowProjects />
        <ShowWork />
        <MySkill />
        <Contact />
        </>
        
    )
}

export default Index ;