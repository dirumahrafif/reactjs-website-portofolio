import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} />
                <h3>Muhammad Rafif</h3>
                <p>Programmer - Content Creator - Researcher</p>
                <div className='socialMedia'>
                    <a href=''><FaInstagram /></a>
                    <a href=''><FaTiktok /></a>
                    <a href=''><FaTwitter /></a>
                    <a href=''><FaFacebookF /></a>
                </div>
            </div>
        </header>
    )
}

export default Header