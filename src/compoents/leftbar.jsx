import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";

function LeftPanel(){

    return(

        <div className="LeftSidePanel h-96 grid content-center static">
            <ul className="space-y-4">
                <li className="hover:bg-red-300 hover:w-4 hover:rounded-full"><FaGithub /> </li>
                <li className="hover:bg-red-300 hover:w-4 hover:rounded-full"><CiLinkedin /> </li>
                <li className="hover:bg-red-300 hover:w-4 hover:rounded-full"><GrInstagram /></li>
                <li className="hover:bg-red-300 hover:w-4 hover:rounded-full"><FaWhatsapp /></li>
                <li className="hover:bg-red-300 hover:w-4 hover:rounded-full"><BsTwitterX /></li>
                <li className="hover:bg-red-300 hover:w-4 hover:rounded-full"><FaMedium /></li>
            </ul>
        </div>
    )
}

export default LeftPanel