import styled from "styled-components";

export const Container = styled.div`

`;

export const CartWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CartBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 10px;
`;

export const TitleCart = styled.h1`
    color: #041E46;
    font-size: 30px;
`;

export const TableCart = styled.table`
    width: 100%;
    margin-top: 20px;
`;

export const TRCart = styled.tr`
    &:first-child{
        background: #f0f0f0;
    }
    &:nth-child(2n){
        background: #fafafa;
    }
`;

export const TDCart = styled.td`
    padding: 5px;
    color: #041E46;
    &:not(:first-child){
        text-align: center;
    }
    &:nth-child(2){
        width: 45vw;
    }
`;

export const ImgItem = styled.img`
    width: 150px;
`;

export const TxtCart = styled.p`
    color: #041E46;
`;

export const LinkRem = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

export const InptCart = styled.input`
    outline: none;
    border: 1px solid #333;
    text-align: center;
    font-size: 16px;
    width: 27px;
    height: 27px;
`;