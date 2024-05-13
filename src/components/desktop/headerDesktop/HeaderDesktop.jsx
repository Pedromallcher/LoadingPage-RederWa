
import './StyleHeaderDesktop.css'



//import img

import logo from '../../../assets/logo-Linxy.png'





function HeaderDesktopComponent(){
    return (

        <div>
            
      <header className='header-all'>
        <img className='logo-homepage-desktop' src={logo} alt="" srcset="" />


        <div class="header-navbar">
           

           <nav class="navbar-desktop">
            <a  href="">Sobre</a>
            <a href="">Termos</a>
            <a href="">Produtos</a>
           </nav>

           
        </div>



      <div className='btns-header'>
        <button className='btn-contato'>Entre em Contato</button>
        <button className='btn-redirecionar-login'>Login</button>
      </div>







      </header>



        </div>


    )

}

export default HeaderDesktopComponent