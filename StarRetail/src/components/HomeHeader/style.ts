import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BoxSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #EDEFF3;
    padding: 3px;
    border-radius: 5px;
    margin-left: 50px;
    @media (max-width: 980px) {
        margin-left: 15px;
    }
`;

export const InputSearch = styled.input`
    background: transparent;
    border: none;
    padding: 8px;
    width: 230px;
    outline: none;
    &::placeholder{
        color: #444;
    }
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
    background: #F0F0F0;
    width: 100%;
`;

export const BtnMenu = styled.div`
    padding: 10px 30px 10px 30px;
    user-select: none;
    &:hover p{
        border-bottom: 1px solid #F56034;
    }
    &:hover{
        background: #DFDFDF;
        cursor: pointer;
    }
`;

export const BtnTxt = styled.p`
    font-size: 18px;
    border-bottom: 1px solid transparent;
    color: #041E46;
    text-transform: uppercase;
`;

export const BtnSrch = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

export const SloganRetail = styled.p`
    margin-left: 15px;
    font-size: 15px;
    color: #041E46;
`;

export const LinkWho = styled.a`
    color: #444;
    text-decoration: underline;
    margin-left: 50px;
    @media (max-width: 980px) {
        margin-left: 30px;
    }
`;

export const AccountLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const AccountText = styled.p`
    margin-left: 5px;
    font-size: 15px;
    color: #041E46;
`;

export const CartLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
    background: #FEE8DE;
    &:hover{
        cursor: pointer;
    }
`;

export const CartItens = styled.p`
    margin-left: 5px;
    font-size: 15px;
    color: #E05931;
`;