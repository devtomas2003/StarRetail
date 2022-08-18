import { useEffect, useRef, useState } from "react";

import FSM from "../../resources/fsm.png";
import FICTON from "../../resources/ficton.jpg";
import Bataguas from "../../resources/bataguas.jpg";
import MAU from "../../resources/mau.jpg";
import Rocha from "../../resources/rocha.jpg";
import Ruben from "../../resources/ruben.jpg";
import Whindersson from "../../resources/whindersson.jpg";
import Gilmario from "../../resources/gilmario.jpeg";
import Xutos from "../../resources/xutos.jpg";

import HomeHeader from "../../components/HomeHeader";

import {
    Container,
    SliderHome,
    SliderSelect,
    BoxSldPos,
    FooterSlider,
    FooterItemSl,
    TxtFoItSl,
    MostedTickets,
    MTText,
    EventData,
    ImgEvent,
    EventName,
    EventLocal,
    EventsList,
    MostedStores
} from "./style";

import { RiSecurePaymentFill } from "react-icons/ri";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";

type SliderProps = {
    imageUri: string;
    titleSlider: string;
}

export default function Home(){

    const sliderStarted = useRef<boolean>(false);
    const [activeSlider, setActiveSlider] = useState<number>(0);
    
    const listSliders = [
        {
            imageUri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/974/635/themes/new_linkedman/1-slide-1660355790243-7050026326-d0a81776c607fcfeaf74d4cf0ed97c5b1660355793-1920-1920.webp?36620553",
            titleSlider: "Loja 1"
        },
        {
            imageUri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/974/635/themes/new_linkedman/1-slide-1660576946725-3525807589-e080cd50a55e1237593e531e793327991660576961-1920-1920.webp?36620553",
            titleSlider: "Loja 2"
        },
        {
            imageUri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/974/635/themes/new_linkedman/1-slide-1660355730326-2466900941-188db897cc922b008e4ab9b6493620df1660355738-1920-1920.webp?36620553",
            titleSlider: "Loja 3"
        }
    ];

    useEffect(() => {
        function startSlider(){
            setInterval(() => {
                setActiveSlider(function(prevSlider: number){
                    if(prevSlider === listSliders.length-1){
                        return 0;
                    }else{
                        return prevSlider + 1;
                    }
                });
            }, 5000);
        }
        if(!sliderStarted.current){
            startSlider();
            sliderStarted.current = true;
        }
    }, []);

    return (
        <Container>
            <HomeHeader />
            <SliderHome imageSrc={listSliders[activeSlider].imageUri} title={listSliders[activeSlider].titleSlider}>
                <SliderSelect>
                    { listSliders.map((slider: SliderProps, i: number) => {
                        return (
                            <BoxSldPos key={i} isActive={i === activeSlider} onClick={() => { setActiveSlider(i); }} />
                        );
                    })}
                </SliderSelect>
            </SliderHome>
            <FooterSlider>
                <FooterItemSl>
                    <RiSecurePaymentFill size={25} color="#fff" />
                    <TxtFoItSl>Pagamentos faceis e seguros</TxtFoItSl>
                </FooterItemSl>
                <FooterItemSl onClick={() => { window.open("https://github.com/devtomas2003/StarRetail", '_blank'); }}>
                    <AiFillGithub size={25} color="#fff" />
                    <TxtFoItSl>Somos 100% transparentes</TxtFoItSl>
                </FooterItemSl>
                <FooterItemSl>
                    <AiFillYoutube size={25} color="#fff" />
                    <TxtFoItSl>Videos técnicos no YouTube</TxtFoItSl>
                </FooterItemSl>
            </FooterSlider>
            <MostedTickets>
                <MTText>Os eventos mais visitados</MTText>
                <EventsList>
                    <EventData>
                        <ImgEvent src={FSM} title="FSM" alt="FSM" />
                        <EventName>Feira de São Mateus</EventName>
                        <EventLocal>Viseu</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FICTON} title="FICTON" alt="FICTON" />
                        <EventName>FICTON</EventName>
                        <EventLocal>Tondela</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={Bataguas} title="Processo" alt="Processo" />
                        <EventName>Processo</EventName>
                        <EventLocal>Multiplos Locais</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={MAU} title="T.R.A.U.M.A.S" alt="T.R.A.U.M.A.S" />
                        <EventName>T.R.A.U.M.A.S</EventName>
                        <EventLocal>Multiplos Locais</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={Rocha} title="Especial 20 Anos" alt="Especial 20 Anos" />
                        <EventName>Especial 20 Anos</EventName>
                        <EventLocal>Lisboa</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={Ruben} title="Rúben Branco" alt="Rúben Branco" />
                        <EventName>Rúben Branco</EventName>
                        <EventLocal>Multiplos Locais</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={Whindersson} title="Whindersson Nunes" alt="Whindersson Nunes" />
                        <EventName>Whindersson Nunes</EventName>
                        <EventLocal>Lisboa</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={Gilmario} title="Gilmario Vemba" alt="Gilmario Vemba" />
                        <EventName>Gilmario Vemba</EventName>
                        <EventLocal>Viseu</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={Xutos} title="Xutos e Pontapés" alt="Xutos e Pontapés" />
                        <EventName>Xutos e Pontapés</EventName>
                        <EventLocal>Multiplos Locais</EventLocal>
                    </EventData>
                </EventsList>
            </MostedTickets>
            <MostedStores>
                <MTText>As lojas mais visitadas</MTText>
                <EventsList>
                    <EventData>
                        <ImgEvent src={FSM} title="FSM" alt="FSM" />
                        <EventName>Feira de São Mateus</EventName>
                        <EventLocal>Viseu</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FICTON} title="FICTON" alt="FICTON" />
                        <EventName>FICTON</EventName>
                        <EventLocal>Tondela</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FSM} title="FSM" alt="FSM" />
                        <EventName>Feira de São Mateus</EventName>
                        <EventLocal>Viseu</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FICTON} title="FICTON" alt="FICTON" />
                        <EventName>FICTON</EventName>
                        <EventLocal>Tondela</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FSM} title="FSM" alt="FSM" />
                        <EventName>Feira de São Mateus</EventName>
                        <EventLocal>Viseu</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FICTON} title="FICTON" alt="FICTON" />
                        <EventName>FICTON</EventName>
                        <EventLocal>Tondela</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FSM} title="FSM" alt="FSM" />
                        <EventName>Feira de São Mateus</EventName>
                        <EventLocal>Viseu</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FICTON} title="FICTON" alt="FICTON" />
                        <EventName>FICTON</EventName>
                        <EventLocal>Tondela</EventLocal>
                    </EventData>
                    <EventData>
                        <ImgEvent src={FSM} title="FSM" alt="FSM" />
                        <EventName>Feira de São Mateus</EventName>
                        <EventLocal>Viseu</EventLocal>
                    </EventData>
                </EventsList>
            </MostedStores>
        </Container>
    );
}