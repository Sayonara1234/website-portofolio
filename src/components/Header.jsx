import profilePicture from '../assets/foto-saya.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} />
                <h3>Willy Sinaga</h3>
                <p>Programmer - Designer UI/UX</p>
                <div className='socialMedia'>
                    <a href=''><FaInstagram /></a>
                    <a href=''><FaLinkedin /></a>
                    <a href=''><FaSquareXTwitter /></a>
                    <a href='https://github.com/Sayonara1234'><FaGithub /></a>
                </div>
            </div>
        </header>
    )
}

export default Header