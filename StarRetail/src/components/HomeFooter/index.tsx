import {
    Container,
    LogoImg,
    FooterBox,
    ListsBox,
    TxtTitle,
    ListsLinks,
    LinkTxt,
    ListTxt,
    BtnSocial,
    BtnSocTxt,
    CopyRightBx,
    TxtCopy,
    LblBold,
    BoxFooter
} from "./style";

import RetailLogo from "../../resources/logo.png";

import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { HomeType } from "../../types/Langs";

type FooterProps = {
    pageTexts?: HomeType;
};

export default function HomeFooter(props: FooterProps){
    return (
        <BoxFooter>
            <Container>
                <LogoImg src={RetailLogo} title="Star Retail" alt="Star Retail" />
                <FooterBox>
                    <ListsBox>
                        <TxtTitle>Links</TxtTitle>
                        <ListsLinks>
                            <LinkTxt href={"/?lang=" + props.pageTexts?.header?.lang}>{props.pageTexts?.header?.homeMenu}</LinkTxt>
                            <LinkTxt href="#">{props.pageTexts?.header?.storesMenu}</LinkTxt>
                            <LinkTxt href="#">{props.pageTexts?.footer?.footerMaps}</LinkTxt>
                            <LinkTxt href="#">{props.pageTexts?.footer?.footerCart}</LinkTxt>
                            <LinkTxt href={"/login?lang=" + props.pageTexts?.header?.lang}>{props.pageTexts?.header?.accountArea}</LinkTxt>
                            <LinkTxt href="#">{props.pageTexts?.header?.helpMenu}</LinkTxt>
                            <LinkTxt href="#">{props.pageTexts?.footer?.footerTermsAndConds}</LinkTxt>
                            <LinkTxt href="#">{props.pageTexts?.footer?.footerExchanges}</LinkTxt>
                        </ListsLinks>
                    </ListsBox>
                    <ListsBox>
                        <TxtTitle>{props.pageTexts?.footer?.footerAtend}</TxtTitle>
                        <ListsLinks>
                            <LinkTxt href="tel:00351967492692">+351 967492692</LinkTxt>
                            <LinkTxt href="mailto:dev.tomas2003@gmail.com">dev.tomas2003@gmail.com</LinkTxt>
                        </ListsLinks>
                    </ListsBox>
                    <ListsBox>
                        <TxtTitle>{props.pageTexts?.footer?.footerPayMethod}</TxtTitle>
                        <ListsLinks>
                            <ListTxt>{props.pageTexts?.footer?.payMethodCard}</ListTxt>
                            <ListTxt>{props.pageTexts?.footer?.payMethodMbWay}</ListTxt>
                            <ListTxt>{props.pageTexts?.footer?.payMethodBank}</ListTxt>
                            <ListTxt>{props.pageTexts?.footer?.payMethodCarrier?.replace("__CARRIERS__", "Vodafone, MEO")}</ListTxt>
                        </ListsLinks>
                    </ListsBox>
                    <ListsBox>
                        <TxtTitle>{props.pageTexts?.footer?.footerSocial}</TxtTitle>
                        <ListsLinks>
                            <BtnSocial onClick={() => { window.open("https://www.instagram.com/tomas20031234/", '_blank'); }}>
                                <BsInstagram size={20} color="#fff" />
                                <BtnSocTxt>Instagram</BtnSocTxt>
                            </BtnSocial>
                            <BtnSocial onClick={() => { window.open("https://www.facebook.com/tomas.dinis.2003/", '_blank'); }}>
                                <BsFacebook size={20} color="#fff" />
                                <BtnSocTxt>Facebook</BtnSocTxt>
                            </BtnSocial>
                            <BtnSocial>
                                <BsYoutube size={20} color="#fff" />
                                <BtnSocTxt>Youtube</BtnSocTxt>
                            </BtnSocial>
                            <BtnSocial onClick={() => { window.open("https://twitter.com/devtomas2003/", '_blank'); }}>
                                <BsTwitter size={20} color="#fff" />
                                <BtnSocTxt>Twitter</BtnSocTxt>
                            </BtnSocial>
                        </ListsLinks>
                    </ListsBox>
                </FooterBox>
            </Container>
            <CopyRightBx>
                <TxtCopy>© 2022 - {new Date().getFullYear()} IMM, SA.</TxtCopy>
                <TxtCopy>{props.pageTexts?.footer?.copyright} <LblBold>S.T.A.R Labs</LblBold></TxtCopy>
            </CopyRightBx>
        </BoxFooter>
    );
}