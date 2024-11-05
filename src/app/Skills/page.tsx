import react from "react"

const Skills = () =>{
    return(
        <div>
        <div className="text-center text-3xl font-bold mt-16">
            <h1>Skills</h1>
        </div>

       <div className="bg-gray-400 mx-11 ml-2 lg:mx-36 lg:mt-8">
             <div className="font-bold text-center text-xl ">
                <h1 className="mt-3"><u>Languages</u></h1>
             </div>
            <div className="mt-7">
                <h1 className="font-bold text-center text-xl mx[400px]">HTML</h1>
                <div className=" bg-blue-600 w-full h-6 rounded-lg text-white text-lg  text-center">100%</div>
            </div> 

            <div className="mt-4">
            <h1 className="font-bold text-center text-xl mx[400px]">CSS</h1>
            <div className=" bg-yellow-300 w-5/6 h-6 rounded-lg text-white text-lg  text-center">90%</div>
           </div>

            <div className="mt-4">
            <h1 className="font-bold text-center text-xl mx[400px]">Javascript</h1>
            <div className=" bg-red-500 w-1/2 h-6 rounded-lg text-white text-lg  text-center">50%</div>
          </div>

           <div className="font-bold text-center text-xl mt-4">
                    <h1><u>Framework</u></h1>
                    </div>
                <div className="mt-4">
                <h1 className="font-bold text-center text-xl mx[400px]">Next.Js</h1>
                <div className=" bg-orange-500 w-4/6 h-6 rounded-lg text-white text-lg  text-center">80%</div> 
           </div>
           <div>
           <div className="mt-4 py-2">
                <h1 className="font-bold text-center text-xl mx[400px]">Tailwind CSS</h1>
                <div className=" bg-pink-600 w-4/6 h-6 rounded-lg text-white text-lg  text-center">80%</div> 
           </div>
           </div>
       </div>

     </div>

    )
}

export default Skills;