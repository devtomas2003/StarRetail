import {
    Container,
    BoxError,
    ImgError,
    BackHomeBtn,
    BcHomeTxt,
    TxtError
} from "./style";

import HomeFooter from "../../components/HomeFooter";
import HomeHeader from "../../components/HomeHeader";

import ImgNotFound from "../../resources/404.png";
import { useState } from "react";
import { ErrorNotFoundType } from "../../types/Langs";

export default function PageNotFound(){
    
    const [pageTexts, setPageTexts] = useState<ErrorNotFoundType>();

    return (
        <Container>
            <HomeHeader changeTextLang={setPageTexts} fromCtx="not-found-page" />
                <BoxError>
                    <ImgError src={ImgNotFound} title={pageTexts?.imgError} alt={pageTexts?.imgError} />
                    <TxtError>{pageTexts?.notFoundTxt}</TxtError>
                    <BackHomeBtn onClick={() => { location.href = "/?lang=" + pageTexts?.header?.lang; }}>
                        <BcHomeTxt>{pageTexts?.btnBack}</BcHomeTxt>
                    </BackHomeBtn>
                </BoxError>
            <HomeFooter pageTexts={pageTexts} />
        </Container>
    );
}