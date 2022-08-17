import styled from "styled-components";

type SliderProps = {
    isActive: boolean;
};

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const SliderHome = styled.div`

`;

export const ImageSlider = styled.img`
    width: 100%;
    height: 45vh;
    &:hover{
        cursor: pointer;
    }
`;

export const SliderSelect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    top: -35px;
`;

export const BoxSldPos = styled.div`
    width: 18px;
    height: 18px;
    background: ${(props: SliderProps) => props.isActive ? '#fff' : 'transparent'};
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    &:not(:first-child){
        margin-left: 7px;
    }
    &:hover{
        cursor: pointer;
    }
`;