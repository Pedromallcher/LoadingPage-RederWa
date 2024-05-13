
//components import

import HeaderDesktopComponent from "../../../components/desktop/headerDesktop/HeaderDesktop.jsx"
import FooterDesktopComponent from "../../../components/desktop/FooterDesktop/FooterDesktop.jsx"

//import css local
import './HomePageDesktop.css'
import shareicon from '../../../assets/share.svg'
import heart from '../../../assets/heart.svg'
import robo from '../../../assets/reder-robot.svg'


function HomePageDesktop (){
    return (

        <div className="all">
            <HeaderDesktopComponent/>
            
       

            <div class="home-desktop">

        <div class="text-desktop">




    <h5>Coming Soon 23/08/2024</h5>
    <h1>REDER<span className="h1-destaque">WA</span></h1>
    <p>Otimize suas interações com clientes com nosso chatbot intuitivo. Oferecemos suporte personalizado 24/7 
        para simplificar suas operações, aumentar o engajamento do cliente e impulsionar o crescimento do seu negócio.</p>

        <div class="share">
            <img className="heart-img" src={heart} alt="" srcset="" />
            <img className="share-img" src={shareicon} alt="" srcset="" />
            

        </div>

        <button className="btn-store">Visite nossa loja</button>

        <div className="blocos-1">
    


            <div className="blocos-2">
              <div className="overlay-reder">
                <h3>RederWa</h3>
              </div>
            </div>
            <div className="blocos-2">
            </div>
            <div className="blocos-2">teset</div>
            <div className="blocos-2">teset</div>
        </div>




</div>
<div>

<img className="img-home-desktop" src={robo} alt="" />


</div>
</div>

<footer>
  <FooterDesktopComponent/>
</footer>






        
</div>


    )
}

export default HomePageDesktop