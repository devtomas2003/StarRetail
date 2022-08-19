import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
`;

export const ViewTitle = styled.h1`
    color: #041E46;
    font-size: 30px;
    margin-left: 10px;
`;

export const ListTickets = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const TicketBox = styled.div`
    display: flex;
    flex-direction: column;
    background: url("src/resources/ticket.png");
    background-size: cover;
    width: 130px;
    height: max-content;
    height: 323px;
    &:hover{
        cursor: pointer;
    }
`;

export const TicketTitle = styled.p`
    text-align: center;
    margin-top: 2px;
    color: #041E46;
`;

export const ImgTicket = styled.img`
    width: 100%;
    align-self: center;
    margin-top: 44px;
`;

export const TicketState = styled.p`
    font-size: 18px;
    margin-top: 5px;
    text-align: center;
    color: #041E46;
    font-weight: bold;
`;

export const TicketMetadata = styled.div`
    padding: 5px;
`;

export const TicketContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #fafafa;
    padding: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 15px;
`;

export const BoxMetadata = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const MLLabel = styled.p`
    color: #041E46;
    margin-top: 10px;
`;

export const BoldLbl = styled.label`
    font-weight: bold;
    color: #041E46;
`;

export const TicketTDate = styled.p`
    color: #041E46;
    font-size: 25px;
    font-weight: bold;
`;

export const MetadataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    width: 12vw;
`;

export const BtnPrint = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: auto;
    align-items: center;
    padding: 7px;
    border-radius: 5px;
    background: #041E46;
    width: fit-content;
    &:hover{
        cursor: pointer;
    }
`;

export const PrintTxt = styled.p`
    color: #fff;
    margin-left: 5px;
`;

export const RecomendTxt = styled.p`
    color: #041E46;
    font-size: 14px;
    margin-left: 10px;
`;