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

export default function HomeFooter(){
    return (
        <BoxFooter>
            <Container>
                <LogoImg src={RetailLogo} title="Star Retail" alt="Star Retail" />
                <FooterBox>
                    <ListsBox>
                        <TxtTitle>Links</TxtTitle>
                        <ListsLinks>
                            <LinkTxt href="/">Home</LinkTxt>
                            <LinkTxt href="#">Lojas</LinkTxt>
                            <LinkTxt href="#">Mapas</LinkTxt>
                            <LinkTxt href="#">Carrinho</LinkTxt>
                            <LinkTxt href="/login">A minha area</LinkTxt>
                            <LinkTxt href="#">Ajuda</LinkTxt>
                            <LinkTxt href="#">Termos e condições</LinkTxt>
                            <LinkTxt href="#">Trocas e devoluções</LinkTxt>
                        </ListsLinks>
                    </ListsBox>
                    <ListsBox>
                        <TxtTitle>Atendimento</TxtTitle>
                        <ListsLinks>
                            <LinkTxt href="tel:00351967492692">+351 967492692</LinkTxt>
                            <LinkTxt href="mailto:dev.tomas2003@gmail.com">dev.tomas2003@gmail.com</LinkTxt>
                        </ListsLinks>
                    </ListsBox>
                    <ListsBox>
                        <TxtTitle>Metodos de pagamento</TxtTitle>
                        <ListsLinks>
                            <ListTxt>Cartão de debito/credito via GPay</ListTxt>
                            <ListTxt>MbWay (Verificação Manual)</ListTxt>
                            <ListTxt>Transferência bancaria</ListTxt>
                            <ListTxt>Operadoras (Vodafone, MEO) via GPay</ListTxt>
                        </ListsLinks>
                    </ListsBox>
                    <ListsBox>
                        <TxtTitle>Redes Sociais</TxtTitle>
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
                <TxtCopy>Software criado na <LblBold>S.T.A.R Labs</LblBold></TxtCopy>
            </CopyRightBx>
        </BoxFooter>
    );
}