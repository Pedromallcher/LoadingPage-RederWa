import './styleSobreMobile.css'


//import imgs
import pedro from '../../../assets/pedro-img.svg'
import isac from '../../../assets/isac.svg'
import linkeDin from '../../../assets/icon-linkdin.svg'
import gitHub from '../../../assets/icon-github.svg'
import instagram from '../../../assets/icon-instagram.svg'

//import components
import HeaderMobile from "../../../components/Mobile/headerMobile"



function pageMobileSobre(){
    return (

        <div>

        
            <HeaderMobile/>
       

        <div className='box-content'>
            <div className='box-img'></div>




        <div className='txt-box'> 




        <div className='titulo'>
        <h2>🤖 Sobre a <span>Linxy</span>🤖</h2>  
        </div>
        
        <p>Somos a Linyx, uma empresa inovadora de tecnologia no mercado de dropshipping e venda de software. Com uma abordagem ágil e foco na excelência, simplificamos o processo de compra e entrega de produtos por meio do
             dropshipping, oferecendo uma ampla gama de produtos tecnológicos de alta qualidade. Além disso, nossa equipe talentosa desenvolve e comercializa softwares inovadores, 
              atendendo às necessidades de diversos setores. Na Linyx, estamos comprometidos em 
              oferecer soluções eficientes e de ponta, impulsionando o sucesso e o crescimento 
              dos nossos clientes.</p>  
        
        
              <div className='titulo'>
        <h2>🧑‍💻 Nosso <span>Time</span>🧑‍💻</h2>  
        </div>
        
        <p>Na Linyx, nossa equipe diversificada e talentosa é o pilar de nossa inovação e sucesso. 
            Juntos, enfrentamos desafios, colaboramos e nos apoiamos, formando uma verdadeira família. 
            Cultivamos um ambiente que valoriza a criatividade, a iniciativa e o crescimento pessoal e 
            profissional de cada membro. Na busca por excelência, estamos 
            construindo um futuro promissor, onde cada indivíduo desempenha 
            um papel vital em nossa jornada.</p>  

    
        </div>



        <div class="content">








    



    <div class="bloco">
        <img className='pedro-img' src={isac} alt="" />
        <h4>@Isac Nilson</h4>
        <div className='box-share-person'>
        <a href="https://www.linkedin.com/in/isac-gondim-07a836227/"><img src={linkeDin} alt="" srcset="" /></a>
        <img src={gitHub} alt="" srcset="" />
        </div>
        </div>


        <div class="bloco">
        <img className='pedro-img' src={pedro} alt="" />
        <h4>@Pedro Malcher</h4>
        <div className='box-share-person'>
        <a  href="https://www.linkedin.com/in/pedro-malcher-80415420a/" target="_blank"><img src={linkeDin} alt="" srcset="" /></a>
        <img src={gitHub} alt="" srcset="" />  
        </div>
         </div>
    

    

</div>



        </div>

        

        </div>

    )
}


export default pageMobileSobre