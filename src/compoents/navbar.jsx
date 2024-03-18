import { useState } from "react";
function Navbar(){

    const [isNavOpen, setIsNavOpen] = useState(false);
    return(
        <>
        <nav className="flex justify-center sticky top-2 ">
            <ul className="flex py-2 px-12 gap-8  fixed  top-2 bg-red-500  justify-center rounded-full">
                <li className="hover:text-center font-bold hover:bg-red-300 hover:rounded-lg hover:w-24"><a href="#">About</a> </li>
                <li className="hover:text-center font-bold hover:bg-red-300  hover:rounded-lg hover:w-24 "><a href="#">Projects</a></li>
                <li className="hover:text-center font-bold hover:bg-red-300 hover:rounded-lg hover:w-24 "><a href="#">Work</a></li>
                <li className="hover:text-center font-bold hover:bg-red-300 hover:rounded-lg hover:w-24 "><a href="#">Skill</a></li>
                <li className="hover:text-center font-bold hover:bg-red-300 hover:rounded-lg hover:w-24 "><a href="#"> Contact</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;