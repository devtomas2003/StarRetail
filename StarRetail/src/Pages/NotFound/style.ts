import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const BoxError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const ImgError = styled.img`
    width: 400px;
`;

export const BackHomeBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #041E46;
    border-radius: 5px;
    padding: 12px;
    margin-top: 10px;
    user-select: none;
    &:hover{
        background: #041E40;
        cursor: pointer;
    }
`;

export const BcHomeTxt = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const TxtError = styled.p`
    color: #041E46;
    font-size: 18px;
    font-weight: bold;
`;