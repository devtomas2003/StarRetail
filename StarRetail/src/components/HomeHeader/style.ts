import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoRetail = styled.img`
    width: 150px;
    margin-top: 15px;
`;

export const MenuOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
    background: #fafafa;
    width: 100%;
`;

export const BtnMenu = styled.div`
    padding: 10px 30px 10px 30px;
    user-select: none;
    &:hover{
        cursor: pointer;
        background: #f0f0f0;
    }
`;

export const BtnTxt = styled.p`
    font-size: 18px;
`;