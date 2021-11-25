import * as SC from './style';
import {Typography} from "@mui/material";
import email from  "../../img/email.png"
import location from  "../../img/location.png"
import telfo from "../../img/telfo.png";

const Contacto = () => {
    return(
    <SC.MainContainer>
        <SC.TesDubidas>
            <Typography>TES DÚBIDAS?</Typography>
            <Typography style={{paddingTop: 10}} variant="h2">CONTÁCTANOS</Typography>
        </SC.TesDubidas>
        <SC.ThreeIcons>
            <div>
                <img src={email} alt=""/>
                <h2>Escríbenos</h2>
                <Typography>lorem@ipsum.com</Typography>
            </div>
            <div>
                <img src={telfo} alt=""/>
                <h2>Chamanos</h2>
                <Typography>600000000</Typography>
            </div>
            <div>
                <img src={location} alt=""/>
                <h2>Visítanos</h2>
                <Typography>Rúa Velas vir N89</Typography>
            </div>
        </SC.ThreeIcons>
    </SC.MainContainer>)
}

export default Contacto;