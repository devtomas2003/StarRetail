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
    CartItens
} from "./style";

import SourceRetail from "../../resources/logo.png";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";

export default function HomeHeader(){
    return (
        <Container>
            <HeaderBox>
                <LogoRetail src={SourceRetail} title="Star Retail" alt="Star Retail" onClick={() => { location.href = "/"; }} />
                <SloganRetail>Compre sem complicações</SloganRetail>
                <BoxSearch>
                    <InputSearch type="text" autoComplete="on" autoCapitalize="off" placeholder="Pesquisar..." />
                    <BtnSrch>
                        <AiOutlineSearch size={22} color="#041E46" />
                    </BtnSrch>
                </BoxSearch>
                <LinkWho href="#">Quem somos?</LinkWho>
                <AccountLink onClick={() => { location.href = "/login"; }}>
                    <RiAccountCircleFill size={20} color="#041E46"  />
                    <AccountText>A minha area</AccountText>
                </AccountLink>
                <CartLink>
                    <AiOutlineShoppingCart size={20} color="#E05931" />
                    <CartItens>2</CartItens>
                </CartLink>
            </HeaderBox>
            <MenuOptions>
                <BtnMenu onClick={() => { location.href = "/"; }}>
                    <BtnTxt>Home</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>Tickets</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>Lojas</BtnTxt>
                </BtnMenu>
                <BtnMenu>
                    <BtnTxt>Ajuda</BtnTxt>
                </BtnMenu>
            </MenuOptions>
        </Container>
    );
}