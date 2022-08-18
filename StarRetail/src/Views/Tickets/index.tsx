import {
    Container,
    ViewTitle,
    ListTickets,
    TicketBox,
    TicketTitle,
    ImgTicket,
    TicketState,
    TicketMetadata,
    TicketContainer,
    BoxMetadata,
    MLLabel,
    BoldLbl,
    MetadataContainer,
    TicketTDate,
    BtnPrint,
    PrintTxt,
    RecomendTxt
} from "./style";

import { AiFillEye } from "react-icons/ai";

export default function Tickets(){
    return (
        <Container>
            <ViewTitle>Os meus bilhetes</ViewTitle>
            <RecomendTxt>Pense antes de imprimir! Pode apresentar os bilhetes de forma digital.</RecomendTxt>
            <ListTickets>
                <TicketContainer>
                    <TicketBox>
                        <ImgTicket src={"http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg"} title="Test" alt="Test" />
                        <TicketMetadata>
                            <TicketTitle>Diogo Bataguas Processo</TicketTitle>
                            <TicketState>18:00</TicketState>
                        </TicketMetadata>
                    </TicketBox>
                    <MetadataContainer>
                        <TicketTDate>Dados do Bilhete</TicketTDate>
                        <BoxMetadata>
                            <MLLabel>Nome: <BoldLbl>Diogo Bataguas - Processo</BoldLbl></MLLabel>
                            <MLLabel>Local: <BoldLbl>ACERT</BoldLbl></MLLabel>
                            <MLLabel>Lugar: <BoldLbl>C8</BoldLbl></MLLabel>
                            <MLLabel>Bilhetes válidos: <BoldLbl>2</BoldLbl></MLLabel>
                            <MLLabel>Restrinções: <BoldLbl>M12</BoldLbl></MLLabel>
                            <MLLabel>Data: <BoldLbl>20/08/2022 às 18:00</BoldLbl></MLLabel>
                            <MLLabel>Duração: <BoldLbl>180 minutos</BoldLbl></MLLabel>
                            <MLLabel>Beneficio: <BoldLbl>Estudante</BoldLbl></MLLabel>
                            <BtnPrint>
                                <AiFillEye size={20} color="#fff" />
                                <PrintTxt>Ver Bilhetes</PrintTxt>
                            </BtnPrint>
                        </BoxMetadata>
                    </MetadataContainer>
                </TicketContainer>
                <TicketContainer>
                    <TicketBox>
                        <ImgTicket src={"http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg"} title="Test" alt="Test" />
                        <TicketMetadata>
                            <TicketTitle>Diogo Bataguas Processo</TicketTitle>
                            <TicketState>18:00</TicketState>
                        </TicketMetadata>
                    </TicketBox>
                    <MetadataContainer>
                        <TicketTDate>Dados do Bilhete</TicketTDate>
                        <BoxMetadata>
                            <MLLabel>Nome: <BoldLbl>Diogo Bataguas - Processo</BoldLbl></MLLabel>
                            <MLLabel>Local: <BoldLbl>ACERT</BoldLbl></MLLabel>
                            <MLLabel>Lugar: <BoldLbl>C8</BoldLbl></MLLabel>
                            <MLLabel>Bilhetes válidos: <BoldLbl>2</BoldLbl></MLLabel>
                            <MLLabel>Restrinções: <BoldLbl>M12</BoldLbl></MLLabel>
                            <MLLabel>Data: <BoldLbl>20/08/2022 às 18:00</BoldLbl></MLLabel>
                            <MLLabel>Duração: <BoldLbl>180 minutos</BoldLbl></MLLabel>
                            <MLLabel>Beneficio: <BoldLbl>Estudante</BoldLbl></MLLabel>
                            <BtnPrint>
                                <AiFillEye size={20} color="#fff" />
                                <PrintTxt>Ver Bilhetes</PrintTxt>
                            </BtnPrint>
                        </BoxMetadata>
                    </MetadataContainer>
                </TicketContainer>
                <TicketContainer>
                    <TicketBox>
                        <ImgTicket src={"http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg"} title="Test" alt="Test" />
                        <TicketMetadata>
                            <TicketTitle>Diogo Bataguas Processo</TicketTitle>
                            <TicketState>18:00</TicketState>
                        </TicketMetadata>
                    </TicketBox>
                    <MetadataContainer>
                        <TicketTDate>Dados do Bilhete</TicketTDate>
                        <BoxMetadata>
                            <MLLabel>Nome: <BoldLbl>Diogo Bataguas - Processo</BoldLbl></MLLabel>
                            <MLLabel>Local: <BoldLbl>ACERT</BoldLbl></MLLabel>
                            <MLLabel>Lugar: <BoldLbl>C8</BoldLbl></MLLabel>
                            <MLLabel>Bilhetes válidos: <BoldLbl>2</BoldLbl></MLLabel>
                            <MLLabel>Restrinções: <BoldLbl>M12</BoldLbl></MLLabel>
                            <MLLabel>Data: <BoldLbl>20/08/2022 às 18:00</BoldLbl></MLLabel>
                            <MLLabel>Duração: <BoldLbl>180 minutos</BoldLbl></MLLabel>
                            <MLLabel>Beneficio: <BoldLbl>Estudante</BoldLbl></MLLabel>
                            <BtnPrint>
                                <AiFillEye size={20} color="#fff" />
                                <PrintTxt>Ver Bilhetes</PrintTxt>
                            </BtnPrint>
                        </BoxMetadata>
                    </MetadataContainer>
                </TicketContainer>
                <TicketContainer>
                    <TicketBox>
                        <ImgTicket src={"http://192.168.1.10/Retail/93daeff4-6495-417d-ad50-6a6bbed8da09.jpg"} title="Test" alt="Test" />
                        <TicketMetadata>
                            <TicketTitle>Diogo Bataguas Processo</TicketTitle>
                            <TicketState>18:00</TicketState>
                        </TicketMetadata>
                    </TicketBox>
                    <MetadataContainer>
                        <TicketTDate>Dados do Bilhete</TicketTDate>
                        <BoxMetadata>
                            <MLLabel>Nome: <BoldLbl>Diogo Bataguas - Processo</BoldLbl></MLLabel>
                            <MLLabel>Local: <BoldLbl>ACERT</BoldLbl></MLLabel>
                            <MLLabel>Lugar: <BoldLbl>C8</BoldLbl></MLLabel>
                            <MLLabel>Bilhetes válidos: <BoldLbl>2</BoldLbl></MLLabel>
                            <MLLabel>Restrinções: <BoldLbl>M12</BoldLbl></MLLabel>
                            <MLLabel>Data: <BoldLbl>20/08/2022 às 18:00</BoldLbl></MLLabel>
                            <MLLabel>Duração: <BoldLbl>180 minutos</BoldLbl></MLLabel>
                            <MLLabel>Beneficio: <BoldLbl>Estudante</BoldLbl></MLLabel>
                            <BtnPrint>
                                <AiFillEye size={20} color="#fff" />
                                <PrintTxt>Ver Bilhetes</PrintTxt>
                            </BtnPrint>
                        </BoxMetadata>
                    </MetadataContainer>
                </TicketContainer>
            </ListTickets>
        </Container>
    );
}