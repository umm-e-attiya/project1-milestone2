
import Link from "next/link";

const Navbar = () =>{
    return(
           <div className="flex flex-col md:flex-row 
            justify-between bg-blue-400 py-4">
              <div className="text-2xl py-1">
                   <h1>My Portfolio</h1>


              </div>
              <div className=" text-xl py-1">
                    <ul className="flex flex-col  md:flex-row space-y-2 md:space-y-0  md: space-x-5 mt-2 md:mt-0  md:mr-6 lg:space-x-5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Project">Project</Link></li>
                        <li><Link href="/Skills">Skills</Link></li>
                        <li><Link href="/Contact">Contact Us</Link></li>
                    </ul>
                    </div>
             
                
             
           </div>
    )
}
            export default Navbar;