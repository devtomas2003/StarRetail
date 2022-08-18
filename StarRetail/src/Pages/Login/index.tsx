import HomeFooter from "../../components/HomeFooter";
import HomeHeader from "../../components/HomeHeader";
import {
    Container,
    BoxLogin,
    TitleLogin,
    LoginContainer,
    ContTxt,
    InptBox,
    ForgotLink,
    BtnSignIn,
    SignInTxt,
    SelectActTp,
    OptionActTp
} from "./style";

export default function Login(){
    return (
        <Container>
            <HomeHeader />
            <BoxLogin>
                <TitleLogin>Identificação</TitleLogin>
                <LoginContainer>
                    <ContTxt>Utilizador</ContTxt>
                    <InptBox type="text" autoComplete="on" autoCapitalize="false" />
                    <ContTxt>Password</ContTxt>
                    <InptBox type="password" autoComplete="on" />
                    <ContTxt>Tipo de conta</ContTxt>
                    <SelectActTp>
                        <OptionActTp>Cliente</OptionActTp>
                        <OptionActTp>Lojista</OptionActTp>
                        <OptionActTp>Eventos</OptionActTp>
                    </SelectActTp>
                    <ForgotLink href="#">Esqueceu a sua password?</ForgotLink>
                    <BtnSignIn>
                        <SignInTxt>Iniciar sessão</SignInTxt>
                    </BtnSignIn>
                    <ForgotLink href="#">Ainda não têm conta? Crie uma!</ForgotLink>
                </LoginContainer>
            </BoxLogin>
            <HomeFooter />
        </Container>
    );
}