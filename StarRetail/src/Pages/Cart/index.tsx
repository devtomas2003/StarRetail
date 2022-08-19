import { useState } from "react";
import HomeFooter from "../../components/HomeFooter";
import HomeHeader from "../../components/HomeHeader";
import { CartType } from "../../types/Langs";

import {
    Container,
    CartWrapper,
    CartBox,
    TitleCart,
    TableCart,
    TRCart,
    TDCart,
    ImgItem,
    TxtCart,
    LinkRem,
    InptCart
} from "./style";

import { BsFillTrashFill } from "react-icons/bs";

export default function Cart(){

    const [pageTexts, setPageTexts] = useState<CartType>();

    return (
        <Container>
            <HomeHeader changeTextLang={setPageTexts} fromCtx="cart" />
                <CartWrapper>
                    <CartBox>
                        <TitleCart>Carrinho</TitleCart>
                        <TableCart cellPadding={0} cellSpacing={0}>
                            <TRCart>
                                <TDCart>Imagem</TDCart>
                                <TDCart>Nome</TDCart>
                                <TDCart>QTD</TDCart>
                                <TDCart>IVA</TDCart>
                                <TDCart>Preço Total</TDCart>
                                <TDCart>Ações</TDCart>
                            </TRCart>
                            <TRCart>
                                <TDCart><ImgItem src="http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg" title="ABC" alt="ABC" /></TDCart>
                                <TDCart><TxtCart>Diogo Bataguas - Processo</TxtCart></TDCart>
                                <TDCart><InptCart type="text" value="2" autoComplete="off" autoCapitalize="off" /></TDCart>
                                <TDCart><TxtCart>23%</TxtCart></TDCart>
                                <TDCart><TxtCart>5,80 €</TxtCart></TDCart>
                                <TDCart><LinkRem><BsFillTrashFill size={20} color="#041E46" /></LinkRem></TDCart>
                            </TRCart>
                            <TRCart>
                                <TDCart><ImgItem src="http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg" title="ABC" alt="ABC" /></TDCart>
                                <TDCart><TxtCart>Diogo Bataguas - Processo</TxtCart></TDCart>
                                <TDCart><InptCart type="text" value="2" autoComplete="off" autoCapitalize="off" /></TDCart>
                                <TDCart><TxtCart>23%</TxtCart></TDCart>
                                <TDCart><TxtCart>5,80 €</TxtCart></TDCart>
                                <TDCart><LinkRem><BsFillTrashFill size={20} color="#041E46" /></LinkRem></TDCart>
                            </TRCart>
                            <TRCart>
                                <TDCart><ImgItem src="http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg" title="ABC" alt="ABC" /></TDCart>
                                <TDCart><TxtCart>Diogo Bataguas - Processo</TxtCart></TDCart>
                                <TDCart><InptCart type="text" value="2" autoComplete="off" autoCapitalize="off" /></TDCart>
                                <TDCart><TxtCart>23%</TxtCart></TDCart>
                                <TDCart><TxtCart>5,80 €</TxtCart></TDCart>
                                <TDCart><LinkRem><BsFillTrashFill size={20} color="#041E46" /></LinkRem></TDCart>
                            </TRCart>
                            <TRCart>
                                <TDCart><ImgItem src="http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg" title="ABC" alt="ABC" /></TDCart>
                                <TDCart><TxtCart>Diogo Bataguas - Processo</TxtCart></TDCart>
                                <TDCart><InptCart type="text" value="2" autoComplete="off" autoCapitalize="off" /></TDCart>
                                <TDCart><TxtCart>23%</TxtCart></TDCart>
                                <TDCart><TxtCart>5,80 €</TxtCart></TDCart>
                                <TDCart><LinkRem><BsFillTrashFill size={20} color="#041E46" /></LinkRem></TDCart>
                            </TRCart>
                            <TRCart>
                                <TDCart><ImgItem src="http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg" title="ABC" alt="ABC" /></TDCart>
                                <TDCart><TxtCart>Diogo Bataguas - Processo</TxtCart></TDCart>
                                <TDCart><InptCart type="text" value="2" autoComplete="off" autoCapitalize="off" /></TDCart>
                                <TDCart><TxtCart>23%</TxtCart></TDCart>
                                <TDCart><TxtCart>5,80 €</TxtCart></TDCart>
                                <TDCart><LinkRem><BsFillTrashFill size={20} color="#041E46" /></LinkRem></TDCart>
                            </TRCart>
                            <TRCart>
                                <TDCart><ImgItem src="http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg" title="ABC" alt="ABC" /></TDCart>
                                <TDCart><TxtCart>Diogo Bataguas - Processo</TxtCart></TDCart>
                                <TDCart><InptCart type="text" value="2" autoComplete="off" autoCapitalize="off" /></TDCart>
                                <TDCart><TxtCart>23%</TxtCart></TDCart>
                                <TDCart><TxtCart>5,80 €</TxtCart></TDCart>
                                <TDCart><LinkRem><BsFillTrashFill size={20} color="#041E46" /></LinkRem></TDCart>
                            </TRCart>
                            <TRCart>
                                <TDCart><ImgItem src="http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg" title="ABC" alt="ABC" /></TDCart>
                                <TDCart><TxtCart>Diogo Bataguas - Processo</TxtCart></TDCart>
                                <TDCart><InptCart type="text" value="2" autoComplete="off" autoCapitalize="off" /></TDCart>
                                <TDCart><TxtCart>23%</TxtCart></TDCart>
                                <TDCart><TxtCart>5,80 €</TxtCart></TDCart>
                                <TDCart><LinkRem><BsFillTrashFill size={20} color="#041E46" /></LinkRem></TDCart>
                            </TRCart>
                        </TableCart>
                    </CartBox>
                </CartWrapper>
            <HomeFooter pageTexts={pageTexts} />
        </Container>
    );
}