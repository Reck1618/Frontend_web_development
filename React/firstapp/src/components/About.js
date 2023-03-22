import MyVideo from "./Video";

function AboutMe() {
    return (
        <>
        <div className="aboutMe">
            <h1>About Me</h1>
            <p>I am a software developer</p>
        </div>
        <div>
            <p>Here you go, Listen to some awesome <strong>Music</strong></p>
            <MyVideo />
        </div>
        
        </>
    )
}

export default AboutMe;