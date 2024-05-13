// imports react
import './HomePageMobileStyle.css'


//import assets

import robo from '../../../assets/reder-robot.svg'
import instagram from "../../../assets/insta.svg"
import facebook from "../../../assets/facebook.svg"


//import component
import HeaderMobileComponent from '../../../components/Mobile/headerMobile'

function homePage(){
    return(
        <div className='content-homePage'>
           
            <HeaderMobileComponent/>
           
       
       <div className='content-homePage-txt'>
        <div className='text-title'> 
        <h1>Reder<span>WA</span></h1>
        <p>Otimize suas interações com clientes com nosso chatbot intuitivo. Oferecemos suporte personalizado 24/7 
        para simplificar suas operações, aumentar o engajamento do cliente e impulsionar o crescimento do seu negócio.</p>
            <button className='btn-mobile-visite'>Visite nossa Loja</button>
            </div>
        <img src={robo} alt="" srcset="" />

        

        <p>Coming Soon 01/09/2024</p>


        <div className="social">
                <div className="line"></div>
                <img src={instagram} alt="Instagram" />
                <img src={facebook} alt="Facebook" />
                <div className="line"></div>
            </div>



       </div>

     
            



        </div>

    )


}

export default homePage;