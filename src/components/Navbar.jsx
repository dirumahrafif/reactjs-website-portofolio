import { useState } from 'react';
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'


function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')

    function tampilMenu() {
        if (statusTampil == '') {
            setStatusTampil('tampil')
        } else {
            setStatusTampil('')
        }
    }
    return (
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <Link to="/">RumahRafif</Link>
                </div>
                <button onClick={tampilMenu}>
                    {
                        statusTampil == '' ? (<FaBars />) : (<IoMdClose />)
                    }
                </button>
                <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                    <ul>
                        <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
                        <li><HashLink to="/#about">About</HashLink></li>
                        <li><Link to="/experience">Experience</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar