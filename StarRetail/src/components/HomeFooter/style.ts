import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: #FEE8DE;
    padding: 20px;
`;

export const LogoImg = styled.img`
    width: 350px;
    height: fit-content;
`;

export const FooterBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    flex-wrap: wrap;
`;

export const ListsBox = styled.div`
    &:not(:first-child){
        margin-left: 60px;
    }
`;

export const TxtTitle = styled.p`
    color: #041E46;
    font-size: 23px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ListsLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
`;

export const LinkTxt = styled.a`
    color: #041E46;
    text-decoration: none;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    &:not(:first-child){
        margin-top: 7px;
    }
`;

export const ListTxt = styled.p`
    color: #041E46;
    &:not(:first-child){
        margin-top: 7px;
    }
`;

export const BtnSocial = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #F56034;
    padding: 8px;
    border-radius: 5px;
    user-select: none;
    &:hover{
        background: #E05931;
        cursor: pointer;
    }
    &:not(:first-child){
        margin-top: 7px;
    }
`;

export const BtnSocTxt = styled.p`
    color: #fff;
    margin-left: 5px;
`;

export const CopyRightBx = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 7px;
    background: #F6F6F6;
`;

export const TxtCopy = styled.p`
    color: #777;
`;

export const LblBold = styled.label`
    font-weight: bold;
`;

export const BoxFooter = styled.div`

`;