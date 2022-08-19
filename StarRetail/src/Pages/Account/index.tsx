import {
    Container,
    BoxAccount,
    AccountContainer,
    MenuBox,
    TitleTxt,
    LinkMenu,
    CntZone,
    BtnMenu
} from "./style";

import { useState } from "react";

import HomeFooter from "../../components/HomeFooter";
import HomeHeader from "../../components/HomeHeader";
import Tickets from "../../Views/Tickets";
import { AccountType } from "../../types/Langs";

import { FaTicketAlt, FaFileInvoiceDollar, FaAddressBook } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";

export default function Account(){

    const [pageTexts, setPageTexts] = useState<AccountType>();
    const [localContext, setLocalContext] = useState<number>(0);

    return (
        <Container>
            <HomeHeader changeTextLang={setPageTexts} fromCtx="account" />
                <BoxAccount>
                    <AccountContainer>
                        <MenuBox>
                            <TitleTxt>{pageTexts?.menTitle}</TitleTxt>
                            <BtnMenu onClick={(e) => { e.preventDefault(); setLocalContext(1); }}>
                                <FaTicketAlt size={20} color="#041E46" />
                                <LinkMenu>{pageTexts?.tickMenOpt}</LinkMenu>
                            </BtnMenu>
                            <BtnMenu>
                                <BiPackage size={20} color="#041E46" />
                                <LinkMenu>{pageTexts?.orderMenOpt}</LinkMenu>
                            </BtnMenu>
                            <BtnMenu>
                                <FaFileInvoiceDollar size={20} color="#041E46" />
                                <LinkMenu>{pageTexts?.fatsMenOpt}</LinkMenu>
                            </BtnMenu>
                            <BtnMenu>
                                <FaAddressBook size={20} color="#041E46" />
                                <LinkMenu>{pageTexts?.addrMenOpt}</LinkMenu>
                            </BtnMenu>
                            <BtnMenu>
                                <BsGearFill size={20} color="#041E46" />
                                <LinkMenu>{pageTexts?.confMenOpt}</LinkMenu>
                            </BtnMenu>
                            <BtnMenu>
                                <ImExit size={20} color="#041E46" />
                                <LinkMenu>{pageTexts?.endSessMenOpt}</LinkMenu>
                            </BtnMenu>
                        </MenuBox>
                        <CntZone>
                            { localContext === 1 ? <Tickets lang={pageTexts?.header?.lang} /> : null }
                        </CntZone>
                    </AccountContainer>
                </BoxAccount>
            <HomeFooter pageTexts={pageTexts} />
        </Container>
    );
}