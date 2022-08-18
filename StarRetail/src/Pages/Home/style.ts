import styled from "styled-components";

type SliderProps = {
    isActive: boolean;
};

type PropsSliderBg = {
    imageSrc: string;
};

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const SliderHome = styled.div`
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 100%;
    justify-content: flex-end;
    background: url(${(props: PropsSliderBg) => props.imageSrc });
    background-size: cover;
    &:hover{
        cursor: pointer;
    }
`;

export const SliderSelect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
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

export const FooterSlider = styled.div`
    background: #F56034;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const FooterItemSl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px;
    user-select: none;
    &:hover{
        cursor: pointer;
        background: #E05931;
    }
`;

export const TxtFoItSl = styled.p`
    color: #fff;
    margin-left: 5px;
`;

export const MostedTickets = styled.div`
    background: #FEE8DE;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const EventsList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const MTText = styled.p`
    color: #E05931;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const EventData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 190px;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 980px) {
        &:nth-child(-n+1){
            display: none;
        }
    }

`;

export const ImgEvent = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-top: 15px;
`;

export const EventName = styled.p`
    margin-top: 10px;
    font-size: 20px;
    color: #333;
    text-align: center;

`;

export const EventLocal = styled.p`
    margin-top: 5px;
    font-size: 18px;
    text-align: center;
    color: #333;
`;

export const MostedStores = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;