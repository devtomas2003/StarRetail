import styled from "styled-components";

export const Container = styled.div``;

export const BoxAccount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
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
    background: #fafafa;
    padding: 15px;
    width: 15vw;
`;

export const TitleTxt = styled.h1`
    color: #041E46;
`;

export const LinkMenu = styled.a`
    margin-top: 7px;
    width: fit-content;
    color: #041E46;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;

export const CntZone = styled.div`

`;