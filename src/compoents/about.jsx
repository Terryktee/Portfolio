import profile from '../assets/profile.png'

function About() {

    return (
        <>
            <div className="bg-red-500 rounded-lg h-full p-4 container mt-4 ">
                <div>
                    <h1 className="font-bold text-4xl">About <span className="text-red-400">Me </span></h1>
                    <p className="w-3/4 mt-4">
                       <span className="font-bold text-3xl">Hello there!</span>  I'm a dedicated self-taught programmer with a passion for learning and a drive to contribute to the <span className="font-bold text-red-300">transformation of technology</span>. I thrive on challenges and am always eager to acquire new skills and explore emerging technologies.<span className="font-bold text-red-300">My enthusiasm lies in turning innovative visions into tangible realities, pushing the boundaries of what's possible.
                        </span>In my free time, you'll often find me immersed in the pages of history books, exploring the depths of different eras and civilizations. I also find solace in the digital realms of gaming and the cinematic world of movies. Music is my constant companion, aiding me in focusing and channeling my concentration into my work.Currently, I'm pursuing studies in data science as a first-year student, driven by the desire to unlock insights from data and harness its potential for impactful solutions. Additionally, I'm deeply engaged in <span className="font-bold text-red-300">self-learning artificial intelligence,
                        </span>recognizing it as my forte and an area where I can make significant contributions.
                        Passionate, driven, and always hungry for knowledge, I'm excited about the endless possibilities that lie ahead in the ever-evolving landscape of technology
                    </p>
                </div>

            </div>
        </>
    )
}

export default About;