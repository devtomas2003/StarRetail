import { useState } from "react";
import HomeFooter from "../../components/HomeFooter";
import HomeHeader from "../../components/HomeHeader";

import { LoginType } from "../../types/Langs";

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

    const [pageTexts, setPageTexts] = useState<LoginType>();

    return (
        <Container>
            <HomeHeader changeTextLang={setPageTexts} fromCtx="login" />
            <BoxLogin>
                <TitleLogin>{pageTexts?.idTitle}</TitleLogin>
                <LoginContainer>
                    <ContTxt>{pageTexts?.userlbl}</ContTxt>
                    <InptBox type="text" autoComplete="on" autoCapitalize="false" />
                    <ContTxt>{pageTexts?.passlbl}</ContTxt>
                    <InptBox type="password" autoComplete="on" />
                    <ContTxt>{pageTexts?.lblacctype}</ContTxt>
                    <SelectActTp>
                        <OptionActTp>{pageTexts?.clientTp}</OptionActTp>
                        <OptionActTp>{pageTexts?.lojisTp}</OptionActTp>
                        <OptionActTp>{pageTexts?.eventsTp}</OptionActTp>
                    </SelectActTp>
                    <ForgotLink href="#">{pageTexts?.forgotPass}</ForgotLink>
                    <BtnSignIn>
                        <SignInTxt>{pageTexts?.btnStartSession}</SignInTxt>
                    </BtnSignIn>
                    <ForgotLink href="#">{pageTexts?.createAcct}</ForgotLink>
                </LoginContainer>
            </BoxLogin>
            <HomeFooter pageTexts={pageTexts} />
        </Container>
    );
}