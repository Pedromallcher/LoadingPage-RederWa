import HeaderMobile from "../../../components/Mobile/headerMobile";
import './TermosMobileStyle.css';

function TermosMobile() {
    return (
        <div className="All">
            <HeaderMobile />
            <form className="form" action="">
                <fieldset>
                    <legend><h2>📜 Termos de Uso 📜</h2></legend>

                    <h3>📲 Propósito do Chatbot 📲</h3>
                    <p>O chatbot “RederWA” é uma ferramenta desenvolvida com o propósito de fornecer uma experiência de conversação aos usuários do WhatsApp. O chatbot utiliza a API Baileys para integração com o WhatsApp e a sua própria API de conversão para gerar respostas personalizadas.</p>

                    <h3>🔥 Responsabilidades 🔥</h3>
                    <p>O chatbot “RederWA” é de total responsabilidade do desenvolvedor e utiliza a API Baileys para as interações disponibilizadas. O desenvolvedor do RederWA não colabora no desenvolvimento do Baileys. No entanto, os usuários têm a liberdade de modificar o código principal do Baileys, enquanto os códigos relacionados ao "RederWA" são criptografados de acordo com a política de direitos autorais.</p>

                    <h3> 🤯 Licença e Código Aberto 🤯 </h3>
                    <p>A ferramenta Baileys é licenciada sob a licença MIT e é um software de código aberto. O chatbot “RederWA” não está envolvido na comercialização ou colaboração com a ferramenta Baileys, que é apenas uma parte da infraestrutura técnica utilizada.</p>

                    <h3> ⚠️  Assinatura e API de Conversão ⚠️ </h3>
                    <p>A assinatura solicitada no chatbot “RederWA” refere-se à sua própria API de conversão, que é o principal serviço oferecido aos usuários. Os usuários pagam pela funcionalidade de conversão e não pela utilização da ferramenta Baileys.</p>

                    <h3>  🔱 Uso Responsável 🔱  </h3>
                    <p>O chatbot “RederWA” deve aderir a todas as políticas do WhatsApp Business e seguir as diretrizes do DialogFlow. É estritamente proibido enviar spam ou mensagens automatizadas em massa. É também fundamental respeitar os pedidos dos usuários para bloquear, interromper ou cancelar a comunicação via WhatsApp.</p>

                    <h3>  🔴 Observações Adicionais 🔴   </h3>
                    <p>É crucial ressaltar que o RederWA segue rigorosamente todas as políticas de uso do WhatsApp. O mecanismo de conversão do RederWA é cuidadosamente elaborado para gerenciar o uso de conversas em massa, evitando assim a disseminação de spam, o que está em total conformidade com as regras estabelecidas pelo WhatsApp.</p>

                </fieldset>
            </form>
        </div>
    );
}

export default TermosMobile;
