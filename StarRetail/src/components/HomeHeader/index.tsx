import {
    Container,
    HeaderBox,
    BoxSearch,
    InputSearch,
    LogoRetail,
    MenuOptions,
    BtnMenu,
    BtnTxt,
    BtnSrch,
    SloganRetail,
    LinkWho,
    AccountLink,
    AccountText,
    CartLink,
    CartItens,
    ChangeLang,
    IconFlag
} from "./style";

import SourceRetail from "../../resources/logo.png";
import US from "../../resources/us.png";
import PT from "../../resources/pt.png";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { HomeType } from "../../types/Langs";
import { useEffect, useState } from "react";

import api from "../../services/api";

type HomeHeaderType = {
    changeTextLang: any;
    fromCtx: string;
}

export default function HomeHeader(props: HomeHeaderType){

    const [lang, setLang] = useState<string>(new URLSearchParams(window.location.search).get("lang") || "pt");
    const [textsLang, setTextsLang] = useState<HomeType>();

    useEffect(() => {
        async function getTextsLang(){
            const pageTextsResponse = await api.get('/langs/' + props.fromCtx + '/' + lang);
            props.changeTextLang(pageTextsResponse.data);
            setTextsLang(pageTextsResponse.data);
        }
        getTextsLang();
    }, [lang]);
    
    return (
        <Container>
            <HeaderBox>
                <LogoRetail src={SourceRetail} title="Star Retail" alt="Star Retail" onClick={() => { location.href = "/?lang=" + lang; }} />
                <SloganRetail>{textsLang?.header?.slogan}</SloganRetail>
                <BoxSearch>
                    <InputSearch type="text" autoComplete="on" autoCapitalize="off" placeholder={textsLang?.header?.plSearch} />
                    <BtnSrch>
                        <AiOutlineSearch size={22} color="#041E46" />
                    </BtnSrch>
                </BoxSearch>
                <LinkWho href="#">{textsLang?.header?.whoWeAre}</LinkWho>
                <AccountLink onClick={() => { location.href = "/login?lang=" + lang; }}>
                    <RiAccountCircleFill size={20} color="#041E46"  />
                    <AccountText>{textsLang?.header?.accountArea}</AccountText>
                </AccountLink>
                <CartLink title={textsLang?.header?.hoverCart} onClick={() => { location.href = "/cart?lang=" + lang; }}>
                    <AiOutlineShoppingCart size={20} color="#E05931" />
                    <CartItens>{Object.keys(JSON.parse(localStorage.getItem('cartItens') || '{}')).length}</CartItens>
                </CartLink>
                <ChangeLang onClick={() => { setLang(lang === "en" ? "pt" : "en"); }}>
                    { lang === "en" ? <IconFlag src={PT} title="Português" /> : <IconFlag src={US} title="English" /> }
                </ChangeLang>
            </HeaderBox>
            <MenuOptions>
                <BtnMenu onClick={() => { location.href = "/?lang=" + lang; }}>
                    <BtnTxt>{textsLang?.header?.homeMenu}</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>{textsLang?.header?.ticketMenu}</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>{textsLang?.header?.storesMenu}</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>{textsLang?.header?.helpMenu}</BtnTxt>
                </BtnMenu>
            </MenuOptions>
        </Container>
    );
}