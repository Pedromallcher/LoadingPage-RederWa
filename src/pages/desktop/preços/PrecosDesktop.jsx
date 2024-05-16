import './PrecosDesktopStyle.css'


//import component
import HeaderDesktopComponent from '../../../components/desktop/headerDesktop/HeaderDesktop';
import FooterDesktopComponent from "../../../components/desktop/FooterDesktop/FooterDesktop.jsx"

function PrecosDesktop(){

    return (
        <div className='all'>

            <HeaderDesktopComponent/>
            

        <div className='content'>

            <div className='blocos'>
                <h4>RederWa</h4>
                <p>Teste</p>
            </div>


           
            <div className='blocos'>
                <h4>RederWa</h4>
                <p>Teste</p>
            </div>


            <div className='blocos'>
                <h4>RederWa</h4>
                <p>Teste</p>
            </div>
            


        </div>



       < FooterDesktopComponent/>
        </div>
       

    )

}


export default PrecosDesktop;