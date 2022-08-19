import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: column;
`;

export const BoxAccount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const AccountContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
`;

export const MenuBox = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    background: #F2F4F4;
    width: 15%;
`;

export const TitleTxt = styled.h1`
    color: #041E46;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const CntZone = styled.div`
    width: 85%;
`;

export const BtnMenu = styled.div`
    padding: 15px;
    background: #F2F4F4;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover{
        background: #ebe8e8;
        cursor: pointer;
    }
`;

export const LinkMenu = styled.p`
    color: #041E46;
    margin-left: 5px;
`;