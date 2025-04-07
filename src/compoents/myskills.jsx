export default function skill() {

    const allskills = [
        {
            Skill: "",
            Percentage: "",
        },
    ]
    return (
        <div className="mt-10 content-center">
            <h1 className="font-bold text-4xl">My<span className="text-red-500"> Skills</span> </h1>
            <div className="mt-2 grid grid-rows-2 md:grid-rows-3 grid-flow-col gap-2" >
                <button className="bg-red-500 p-2 rounded-lg">React Js</button>
                <button className="bg-red-500 p-2 rounded-lg">Tailwindcss</button>
                <button className="bg-red-500 p-2 rounded-lg">Css</button>
                <button className="bg-red-500 p-2 rounded-lg">Python</button>
                <button className="bg-red-500 p-2 rounded-lg">C#</button>
                <button className="bg-red-500 p-2 rounded-lg">Django</button>
                <button className="bg-red-500 p-2 rounded-lg">Frontend</button>
                <button className="bg-red-500 p-2 rounded-lg">Backend</button>
                <button className="bg-red-500 p-2 rounded-lg">Full Stack Development</button>
            </div>
        </div>
    )
}
