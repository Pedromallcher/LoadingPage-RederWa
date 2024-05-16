//Import component
import HeaderDesktopComponent from "../../../components/desktop/headerDesktop/HeaderDesktop"
import FooterDesktopComponent from "../../../components/desktop/FooterDesktop/FooterDesktop.jsx"


//import Style
import './TermosDesktopStyle.css'







function TermosDesktop(){
    return (

        <div className="all">
            <HeaderDesktopComponent/>


            <div className="content">

               

                <form >
                    <fieldset>
                        <legend>📜 Termos de Uso 📜 </legend>




                
                <div className="bloco">
                <fieldset>
                        <legend>📲 Propósito do Chatbot 📲</legend>
                        <p>O chatbot “RederWA” é uma ferramenta desenvolvida com o propósito de fornecer uma experiência de conversação aos usuários do WhatsApp. O chatbot utiliza a API Baileys para integração com o WhatsApp e a sua própria API de conversão para gerar respostas personalizadas.</p>
                    </fieldset>
                </div>


                 
               
                    
                <div className="bloco">
                    <fieldset>
                        <legend>🔥 Responsabilidades 🔥</legend>
                        <p>Nossa soluçao é de total responsabilidade do desenvolvedor e utiliza a API Baileys para as interações disponibilizadas. Os desenvolvedores do RederWA não colabora no desenvolvimento do Baileys. Entretanto,os usuários têm a liberdade de modificar o código principal do Baileys, enquanto os códigos relacionados ao "RederWA" são criptografados de acordo com a política de direitos autorais.</p>
                    </fieldset>
                </div>


                <div className="bloco">
                    <fieldset>
                        <legend>🤯 Licença e Código Aberto 🤯</legend>
                        <p>A ferramenta Baileys é licenciada sob a licença MIT e é um software de código aberto. O chatbot “RederWA” não está envolvido na comercialização ou colaboração com a ferramenta Baileys, que é apenas uma parte da infraestrutura técnica utilizada.</p>
                    </fieldset>
                </div>









                 
                <div className="bloco">
                <fieldset>
                        <legend>⚠️ Assinatura e API de Conversão ⚠️</legend>
                        <p>A assinatura solicitada no chatbot “RederWA” refere-se à sua própria API de conversão, que é o principal serviço oferecido aos usuários. Os usuários pagam pela funcionalidade de conversão e não pela utilização da ferramenta Baileys.</p>
                    </fieldset>
                </div>


                 
               
                    
                <div className="bloco">
                    <fieldset>
                        <legend>🔱 Uso Responsável 🔱</legend>
                        <p>O chatbot “RederWA” deve aderir a todas as políticas do WhatsApp Business e seguir as diretrizes do DialogFlow. É estritamente proibido enviar spam ou mensagens automatizadas em massa. É também fundamental respeitar os pedidos dos usuários para bloquear, interromper ou cancelar a comunicação via WhatsApp.</p>
                    </fieldset>
                </div>


                <div className="bloco">
                    <fieldset>
                        <legend>🔴 Observações Adicionais 🔴</legend>
                        <p>É crucial ressaltar que o RederWA segue rigorosamente todas as políticas de uso do WhatsApp. O mecanismo de conversão do RederWA é cuidadosamente elaborado para gerenciar o uso de conversas em massa, evitando assim a disseminação de spam, o que está em total conformidade com as regras estabelecidas pelo WhatsApp.</p>
                    </fieldset>
                </div>
    
                
              


                









                








                

                </fieldset>

                </form>


                


            </div>







            <FooterDesktopComponent/>
        </div>

    )

}

export default TermosDesktop;