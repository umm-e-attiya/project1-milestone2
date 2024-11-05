import react from "react"
import Image from "next/image";
import project1 from "../../../public/project1.png"
import project2 from "../../../public/project2.png"
import project3 from "../../../public/project3.png"


const Project = () =>{
    return(
          <div>
           <div className=" text-center text-3xl font-bold mt-16 lg:text-center lg:text-4xl lg:font-bold lg:mt-16">
                <h3>My Work</h3>
            </div>

              <div className="flex  flex-col  lg:flex-row lg:mt-24">
                <div className="text-center mt-3 mx-5 md:mx-48 text-center md:mt-3 lg:mt-10 lg:mt-16 lg:mx-5 lg:text-center">
                     <Image src={project1} alt="project1" width={500} height={400} />
                     <p className="mt-4 text-2xl font-bold">Project1</p>
                    <a target="_blank" href="https://milestone3-bice-iota.vercel.app/">Click Here </a>
                </div>

                <div className="text-center mt-3 mx-5 md:mx-48 text-center md: mt-3 lg:ml-4 lg:mt-16 lg:text-center">
                    <Image src={project2} alt="project2" width={500} height={400} />
                    <p className="mt-4 text-2xl font-bold">Project2</p>
                    <a target="_blank" href="https://milestone5-nu-black.vercel.app/">Click Here </a>

                </div>

                <div className=" text-center mt-3 mx-5 md:mx-48 text-center md:mt-3  lg:mt-10 lg:ml-4 lg:mt-16 lg:text-center">
                    <Image src={project3} alt="project3" width={500} height={400} />
                    <p className="mt-4 text-2xl font-bold">Project3</p>
                    <a target="_blank" href="https://restaurant-website-six-ochre.vercel.app/">Click Here</a>
                </div>
              </div>
          </div>
    )
}

export default Project;