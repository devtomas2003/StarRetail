import {
    Container,
    BoxAccount,
    AccountContainer,
    MenuBox,
    TitleTxt,
    LinkMenu,
    CntZone
} from "./style";

import { useState } from "react";

import HomeFooter from "../../components/HomeFooter";
import HomeHeader from "../../components/HomeHeader";
import Tickets from "../../Views/Tickets";

export default function Account(){

    const [localContext, setLocalContext] = useState<number>(0);

    return (
        <Container>
            <HomeHeader />
                <BoxAccount>
                    <AccountContainer>
                        <MenuBox>
                            <TitleTxt>Menu</TitleTxt>
                            <LinkMenu href="#" onClick={(e) => { e.preventDefault(); setLocalContext(1); }}>Os meus bilhetes</LinkMenu>
                            <LinkMenu href="#">As minha encomendas</LinkMenu>
                            <LinkMenu href="#">Faturas</LinkMenu>
                            <LinkMenu href="#">Muradas</LinkMenu>
                            <LinkMenu href="#">Configurações</LinkMenu>
                            <LinkMenu href="#">Terminar sessão</LinkMenu>
                        </MenuBox>
                        <CntZone>
                            { localContext === 1 ? <Tickets /> : null }
                        </CntZone>
                    </AccountContainer>
                </BoxAccount>
            <HomeFooter />
        </Container>
    );
}