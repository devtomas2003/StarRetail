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

export default function PageNotFound(){
    return (
        <Container>
            <HomeHeader />
                <BoxError>
                    <ImgError src={ImgNotFound} title="Error 404" alt="Error 404" />
                    <TxtError>A página que procuras não existe!</TxtError>
                    <BackHomeBtn onClick={() => { location.href = "/"; }}>
                        <BcHomeTxt>Voltar para a Pagina Inicial</BcHomeTxt>
                    </BackHomeBtn>
                </BoxError>
            <HomeFooter />
        </Container>
    );
}