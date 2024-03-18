import profile from '../assets/profile.png'
function ShowWork(){

    const projects_detail=[

        {
            project_name:"E-Commerce",
            project_type:"Web Site",
            work_place:"Fiveer",
            url:"https:"
        },
    ]

    return(
        <div className="mt-12">
        <h1 className="font-bold text-4xl"><span className="text-red-500">Work</span> Projects</h1>
        <div className="mt-12">
        <div className="mt-8 flex flex-cols overflow-y-hidden gap-x-4">
            <div className="bg-red-500 p-2 h-1/4 w-1/3 md:w-1/5 rounded-lg max-w-sm">
                <img src={profile} className="object-center object-cover w-64 h-40 rounded-lg "/>
                <div className="info text-balance">
                            <h1 className="font-bold text-center text-1xl">Project Name</h1>
                    <div className="flex justify-around mt-10 ">
                        <a href="#" className='rounded-full py-2 px-4  text-sm bg-red-400'> Read More</a>
                        <a href="#" className='rounded-full py-2 px-4  bg-red-400'>View</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ShowWork;