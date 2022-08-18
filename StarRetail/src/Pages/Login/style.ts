import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100%;
`;

export const TitleLogin = styled.h1`
    color: #041E46;
    font-weight: bold;
    border-bottom: 4px solid #F56034;
    text-transform: uppercase;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 30vw;
`;

export const ContTxt = styled.p`
    color: #041E46;
    align-self: flex-start;
    &:not(:first-child){
        margin-top: 20px;
    }
`;

export const InptBox = styled.input`
    background: #EDEFF3;
    color: #041E46;
    border-radius: 20px;
    outline: none;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 5px;
`;

export const SelectActTp = styled.select`
    background: #EDEFF3;
    border-radius: 20px;
    outline: none;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 5px;
`;

export const OptionActTp = styled.option``;

export const ForgotLink = styled.a`
    color: #041E46;
    margin-top: 25px;
    font-size: 15px;
`;

export const BtnSignIn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #041E46;
    border-radius: 30px;
    padding: 12px;
    width: 100%;
    margin-top: 20px;
    user-select: none;
    &:hover{
        background: #041E40;
        cursor: pointer;
    }
`;

export const SignInTxt = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;