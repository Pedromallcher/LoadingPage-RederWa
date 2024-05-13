//import arquivos react
import React, { useState } from 'react';
import './StyleMobile.css';
import { Link } from 'react-router-dom';


// imports img
import logoMobile from '../../assets/logo-Linxy.png';
import MenuMobile from '../../assets/menu.svg';






// icons-react
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { BiArchive } from "react-icons/bi";
import { FaBook } from "react-icons/fa";




function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };





    return (



        <div>
            <header className='header'>
                <img className='logoMobile' src={logoMobile} alt="" />
                <img className='MenuMobile' src={MenuMobile} alt="Menu" onClick={toggleSidebar} />
            </header>

            <div className={`sidebar ${sidebarOpen ? 'visible' : ''}`}>
                <img className="logo-linxy" src={logoMobile} alt="Logo" />
                <nav className="sidebar-nav">


                    <Link to="/">
                     <IoHomeOutline className='iconNavBar' /> Home
                    </Link>


                    

                    <Link to="/sobremobile">
                     <AiOutlineTeam className='iconNavBar' /> Sobre
                    </Link>


                    <Link to="/termosmobile">
                     <IoMdDocument className='iconNavBar' /> Termos
                    </Link>


                    <Link to="/produtosmobile">
                     <BiArchive className='iconNavBar' /> Produtos
                    </Link>



                   

                   


                    <a href="/">
                        <FaBook className='iconNavBar'/>
                      Documentacao
                    </a>


                    <IoMdClose className='close-icon'  onClick={toggleSidebar}   />
                </nav>
            </div>








        </div>
    );
}

export default Header;

