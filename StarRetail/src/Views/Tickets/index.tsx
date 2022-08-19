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
import { useEffect, useState } from "react";
import api from "../../services/api";
import { TicketsType } from "../../types/Langs";

type TicketsProps = {
    lang?: string;
};

export default function Tickets(props: TicketsProps){

    const [txtLangs, setTxtLangs] = useState<TicketsType>();

    useEffect(() => {
        async function changeTexts(){
            const ticketLangs = await api.get('/langs/tickets/' + props.lang);
            setTxtLangs(ticketLangs.data);
        }
        changeTexts();
    }, [props.lang]);

    return (
        <Container>
            <ViewTitle>{txtLangs?.ticketTitle}</ViewTitle>
            <RecomendTxt>{txtLangs?.conserWarm}</RecomendTxt>
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
                        <TicketTDate>{txtLangs?.ticketTitle}</TicketTDate>
                        <BoxMetadata>
                            <MLLabel>{txtLangs?.lblname} <BoldLbl>Diogo Bataguas - Processo</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lbllocal} <BoldLbl>ACERT</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblvalidtk} <BoldLbl>2</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblrestrict} <BoldLbl>M12</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lbldate} <BoldLbl>{txtLangs?.lvldate?.replace("__DATE__", "20/08/2022").replace("__HOUR__", "18:00")}</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblduraction} <BoldLbl>180 minutos</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblbene} <BoldLbl>{txtLangs?.lblstudent}</BoldLbl></MLLabel>
                            <BtnPrint>
                                <AiFillEye size={20} color="#fff" />
                                <PrintTxt>{txtLangs?.lvlViewTk}</PrintTxt>
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
                        <TicketTDate>{txtLangs?.ticketTitle}</TicketTDate>
                        <BoxMetadata>
                            <MLLabel>{txtLangs?.lblname} <BoldLbl>Diogo Bataguas - Processo</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lbllocal} <BoldLbl>ACERT</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblvalidtk} <BoldLbl>2</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblrestrict} <BoldLbl>M12</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lbldate} <BoldLbl>{txtLangs?.lvldate?.replace("__DATE__", "20/08/2022").replace("__HOUR__", "18:00")}</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblduraction} <BoldLbl>180 minutos</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblbene} <BoldLbl>{txtLangs?.lblstudent}</BoldLbl></MLLabel>
                            <BtnPrint>
                                <AiFillEye size={20} color="#fff" />
                                <PrintTxt>{txtLangs?.lvlViewTk}</PrintTxt>
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
                        <TicketTDate>{txtLangs?.ticketTitle}</TicketTDate>
                        <BoxMetadata>
                            <MLLabel>{txtLangs?.lblname} <BoldLbl>Diogo Bataguas - Processo</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lbllocal} <BoldLbl>ACERT</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblvalidtk} <BoldLbl>2</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblrestrict} <BoldLbl>M12</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lbldate} <BoldLbl>{txtLangs?.lvldate?.replace("__DATE__", "20/08/2022").replace("__HOUR__", "18:00")}</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblduraction} <BoldLbl>180 minutos</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblbene} <BoldLbl>{txtLangs?.lblstudent}</BoldLbl></MLLabel>
                            <BtnPrint>
                                <AiFillEye size={20} color="#fff" />
                                <PrintTxt>{txtLangs?.lvlViewTk}</PrintTxt>
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
                        <TicketTDate>{txtLangs?.ticketTitle}</TicketTDate>
                        <BoxMetadata>
                            <MLLabel>{txtLangs?.lblname} <BoldLbl>Diogo Bataguas - Processo</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lbllocal} <BoldLbl>ACERT</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblvalidtk} <BoldLbl>2</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblrestrict} <BoldLbl>M12</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lbldate} <BoldLbl>{txtLangs?.lvldate?.replace("__DATE__", "20/08/2022").replace("__HOUR__", "18:00")}</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblduraction} <BoldLbl>180 minutos</BoldLbl></MLLabel>
                            <MLLabel>{txtLangs?.lblbene} <BoldLbl>{txtLangs?.lblstudent}</BoldLbl></MLLabel>
                            <BtnPrint>
                                <AiFillEye size={20} color="#fff" />
                                <PrintTxt>{txtLangs?.lvlViewTk}</PrintTxt>
                            </BtnPrint>
                        </BoxMetadata>
                    </MetadataContainer>
                </TicketContainer>
            </ListTickets>
        </Container>
    );
}