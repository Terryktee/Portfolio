function Contact(){
    return(

        <div className="grid">
            <div className="mt-10 bg-red-500 md:w-8/12 p-4 md:place-self-center md:rounded-lg  flex flex-col">
            <p>GET IN TOUCH</p>
            <h1 className="text-3xl font-extrabold">Contact</h1>
            <form className="font-medium flex flex-col space-y-2">
                <label>Your Name</label>
                <input type="text" className="p-1 px-3 rounded-lg " placeholder="What's your name?"/>
                <label>Your Email</label>
                <input type="email" className="p-1 px-3 rounded-lg " placeholder="What's your email?"/>
                <label>Your Message</label>
                <textarea name="message" className="p-1 px-3 rounded-lg " rows="4" cols="50" placeholder="What's your message?">

                </textarea>
                <button className="bg-red-300 w-32 rounded-lg">Submit</button>
            </form>
            
        </div>
        </div>
    )
}

export default Contact;