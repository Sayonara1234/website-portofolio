import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>
              I am a Web Developer passionate about creating innovative digital solutions.
              With extensive experience in website development, I combine creativity with technical expertise to produce products 
              that are not only visually appealing, but also functional.
              As a programmer who is always hungry for new knowledge, I keep up with the latest technology developments and best practices in the industry.
              I have expertise in HTML, CSS, JavaScript, and frameworks such as React and Node.js.
              If you are interested in working together or want to talk further, please contact me via email: 
              <a href="mailto:willysentra92@email.com"> willysentra92@email.com</a>.
            </p>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaBootstrap /><FaGit />

                </div>
            </div>
        </section>
    )
}

export default About