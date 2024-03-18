import profile from '../assets/profile.png'
function Profile(){

    return(
        <div className="lg:flex md:place-items-center mt-24">
           <div className="lg:flex md:justify-content-betweeen ml-12">
           <div className="info">
                <h1 className="font-bold">Hey , My name is <br/>
                    <span className="font-bold text-red-500 text-center md:text-8xl text-5xl">Terryktee</span>
                </h1>
                <p className="text-end font-bold">I'm full Web Stack Developer</p>
            </div>
            <div className="profile md:ml-64">
                <img src={profile} className="md:h-64 md:w-64 md:object-cover md:rounded-lg"/>
            </div>
           </div>
        </div>
    )
}

export default Profile;