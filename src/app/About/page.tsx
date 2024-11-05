import react from "react"
import Image from "next/image";
import profilepicture from "../../../public/profilepicture.webp"



const About = () =>{
       return(
            
               <div className="px-4 lg:px32">
                    <div className=" mt-7 text-3xl lg:text-5xl text-center">
                        <h1>About Me</h1>
                    </div>
                     <div className="flex flex-col lg:flex-row items-center lg:items-center mt-8">               
                     <div className="mt-8 lg:mt-11 lg: flex justify-center lg:mr10 lg:mx-4">
                        <Image src={profilepicture} alt="profile-picture" width={500} height={400} className="rounded-full " />

                    </div>
                       <div className="mt-9 lg:mt-32 lg:w-[600px] mx-4 lg:mx-0 lg:mx-10">
                         <p>Hi! I am Umm E Attiya, a passionate web developer currently pursuing my first year in Intermediate in Computer Science (ICS) after completing my matriculation in Biology Science. I have always been fascinated by the digital world and am dedicated to creating innovative and user-friendly solutions</p>

                         <p className="mt-4">I am building my skills in technologies such as HTML, CSS, Javascript, and React, which allow me to develop visually appealing and responsive websites. My goal is not just to focus on aesthetics but also enhance the user experience. I am constantly learning new tools and techniques to improve my projects.</p>

                         <p className="mt-4">I am committed to growing as a developer and constantly challenging myself to learn new skills with each project, I strive to create a better user experience and design. I am always open to collaboration and look forward to connecting with others who share a passion for tech and innovation
                         </p>

                                              
                    </div>
                    </div>
               </div>
       )
}

export default About;