import "./About.css"

function About(props) {
    return (
        <div className="about__container">
            <div className="about__card">
                <span>
                    {'\u00A0'}"This is a movie archive website which, in ther first place, was a free React tutorial offerered by Nomad Coder.
                    Though, I have made a great improve and turned this to an abosolute gem with responsive layout with grid, flexbox and use of React Styled Component.
                    Also, it follows React folder & file structure conventions which, in another aspect, have improved the scalability and sustainabilty of this gem."
                </span>
                <span>"Anyway, this is just awesome! please enjoy!"</span>
                <span>- Project Completed, 14 - 07 - 2021</span>
                <span>{'\u00A0'}{'\u00A0'}Wontae Choi</span>
            </div>
        </div>
    )
}

export default About;