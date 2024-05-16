//Imports components
import HeaderDesktopComponent from "../../../components/desktop/headerDesktop/HeaderDesktop"
import FooterDesktopComponent from "../../../components/desktop/FooterDesktop/FooterDesktop.jsx"
//Imports Css
import './SobreDesktopStyle.css'



//Imports imgs

import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img3 from '../../../assets/img3.png'
import img4 from '../../../assets/img4.png'
import pedro from '../../../assets/pedro-img.svg'
import Github from '../../../assets/icon-github.svg'
import Linkdin from '../../../assets/icon-linkdin.svg'



function SobrePageDesktop(){
    return  (
        <div className="all">
           <HeaderDesktopComponent/>
        


        <div className="content-blocos">

            <div className="blocos">
            <form >
                <fieldset className="fieldset">
                <legend><img src={img1} alt="" srcset="" /></legend>

                <div className="text-SobrePageDesktop">
                    <p>A Linyx teve sua origem a partir de uma ideia voltada a interligar o mundo dos negócios com a praticidade e eficiência dos chatbots. Com esse propósito, fundamos a Linyx, determinados a oferecer uma abordagem inovadora para o comércio eletrônico e serviços empresariais. O foco inicial da empresa era integrar chatbots em plataformas de dropshipping, visando facilitar o processo de compra e entrega de produtos para clientes em todo o mundo.</p>
                </div>
                </fieldset>
            </form>
            </div>










            <div className="blocos">
            <form >
                <fieldset className="fieldset">
                <legend><img src={img2} alt="" srcset="" /></legend>

                <div className="text-SobrePageDesktop">
                   <p>O público-alvo da Linyx é composto por empreendedores e proprietários de negócios online, empresas de diversos setores e usuários finais. Eles compartilham o desejo de simplificar e otimizar suas operações, buscando soluções inovadoras e eficientes que possam não apenas simplificar o processo de compra e entrega, mas também proporcionar uma experiência de usuário excepcional. Essas soluções são essenciais para acompanhar um mercado em constante evolução.</p>
                </div>
                </fieldset>
            </form>
            </div>



            
            <div className="blocos">
            <form >
                <fieldset className="fieldset">
                <legend><img src={img3} alt="" srcset="" /></legend>

                <div className="text-SobrePageDesktop">
                   <p>O sistema da Linyx é uma plataforma abrangente que simplifica as operações de comércio eletrônico e o gerenciamento de negócios. Em nossa plataforma está o chatbot inteligente, altamente personalizável e integrável ao Whatsapp. Utilizando inteligência artificial e processamento de linguagem natural, o chatbot automatiza interações com clientes, responde a perguntas comuns e facilita o processo de compra.</p>
                </div>
                </fieldset>
            </form>
            </div>


            <div className="blocos">
            <form >
                <fieldset className="fieldset">
                <legend><img src={img4} alt="" srcset="" /></legend>

                <div className="text-SobrePageDesktop">
                  

                <div content="content-box-developer">
                    <div className="developers">
                    <div className="developers-content-box">
                    <img src={pedro} alt="" />
                    <div className="developers-content-box-txt">
                    <h6>@PedroMalcher</h6>
                    <div className="icons-social">
                    <img src={Github} alt="" />
                    <img src={Linkdin} alt="" />
                    </div>
                    <div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div content="content-box-developer">
                    <div className="developers">
                    <div className="developers-content-box">
                    <img src={pedro} alt="" />
                    <div className="developers-content-box-txt">
                    <h6>@PedroMalcher</h6>
                    <div className="icons-social">
                    <img src={Github} alt="" />
                    <img src={Linkdin} alt="" />
                    </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div content="content-box-developer">
                    <div className="developers">
                    <div className="developers-content-box">
                    <img src={pedro} alt="" />
                    <div className="developers-content-box-txt">
                    <h6>@PedroMalcher</h6>
                    <div className="icons-social">
                    <img src={Github} alt="" />
                    <img src={Linkdin} alt="" />
                    </div>
                    </div>
                    </div>
                    </div>
                </div>


               




















                


                </div>
                </fieldset>
            </form>
            </div>













        </div>







        <FooterDesktopComponent/>
        </div>
    )
}

export default SobrePageDesktop