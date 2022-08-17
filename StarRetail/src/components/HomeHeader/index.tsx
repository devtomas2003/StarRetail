import {
    Container,
    LogoRetail,
    MenuOptions,
    BtnMenu,
    BtnTxt
} from "./style";

import SourceRetail from "../../resources/logo.png";

export default function HomeHeader(){
    return (
        <Container>
            <LogoRetail src={SourceRetail} title="Star Retail" alt="Star Retail" />
            <MenuOptions>
                <BtnMenu>
                    <BtnTxt>Home</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>Tickets</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>A minha conta</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>Ajuda</BtnTxt>
                </BtnMenu>
            </MenuOptions>
        </Container>
    );
}