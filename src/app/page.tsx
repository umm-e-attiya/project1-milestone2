import Image from "next/image";
import react from "react"
import profilepicture from "../../public/profilepicture.webp"

export default function Home() {
  return(
          <div className="flex flex-col lg:flex-row mt-16 lg:mt-32 mx-8 lg:mx-32">
            <div>
                 <h1 className="font-bold text-4xl
                 lg:text-5xl mt-6 lg:mt-14">Hi! I am Umm E Attiya</h1>
                 <h2 className="font-bold text-blue-600 text-xl lg:text-2xl mt-2">A Passionate Developer</h2>
                 <p className="mt-3 w-full lg:w-[600px]">Hello I'm Umm E Attiya, a passionate and dedicated web developer focused on creating user-friendly, responsive websites that brings ideas to life. With a background in HTML, CSS, Javascript, and frameworks like Next.js and Tailwind CSS, I specialize in building engaging web experiences, Each projects is an opportunity to learn and refine my skills, blending functionality with clean design. Please explore my work, where I strive to combine creativity and technical expertise to deliver solutions that make a lasting impact. Let's connect to collaborate on exciting new projects!</p>
            </div>
            <div className="mt-10 lg:mt-0 lg:mx-16 flex justify-center lg:w-1/2">
                <Image src={profilepicture} alt="profile-picture" width={500} height={400} />
            </div>
          </div>
  )
}