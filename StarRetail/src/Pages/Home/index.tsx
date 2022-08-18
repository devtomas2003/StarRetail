import { useEffect, useRef, useState } from "react";

import HomeHeader from "../../components/HomeHeader";
import HomeFooter from "../../components/HomeFooter";

import {
    Container,
    SliderHome,
    SliderSelect,
    BoxSldPos,
    FooterSlider,
    FooterItemSl,
    TxtFoItSl,
    MostedTickets,
    ListTitle,
    ListData,
    ImgList,
    ListName,
    EventLocal,
    ListsMore,
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

    const listsHome = {
        events: [
            {
                "name": "Feira de São Mateus",
                "uriImage": "44deee2d-91ca-440d-b072-8c91ee6bed48.png",
                "location": "Viseu"
            },
            {
                "name": "FICTON",
                "uriImage": "9373062b-2223-4c21-995e-b554e354e6ed.jpg",
                "location": "Tondela"
            },
            {
                "name": "Bataguas",
                "uriImage": "93daeff4-6495-417d-ad50-6a6bbed8da09.jpg",
                "location": "Multiplos Locais"
            },
            {
                "name": "T.R.A.U.M.A.S",
                "uriImage": "028763e6-4d86-41c2-883f-1da875f3c6c5.jpg",
                "location": "Multiplos Locais"
            },
            {
                "name": "Especial 20 Anos",
                "uriImage": "0ad51909-4622-4195-b194-b8f0c5fb75b4.jpg",
                "location": "Lisboa"
            },
            {
                "name": "Ruben Branco",
                "uriImage": "4b4ba34b-322c-48ac-a276-6cedc0061560.jpg",
                "location": "Multiplos Locais"
            },
            {
                "name": "Whindersson Nunes",
                "uriImage": "bf152e8e-a006-4d13-87a0-ea46cc85fc84.jpg",
                "location": "Lisboa"
            },
            {
                "name": "Gilmario Vemba",
                "uriImage": "1e2b45d1-2db8-487f-8a01-42963d371c7d.jpeg",
                "location": "Viseu"
            },
            {
                "name": "Xutos e Pontapés",
                "uriImage": "ecebb8cd-172c-4199-a0cd-bcaead720c57.jpg",
                "location": "Multiplos Locais"
            },
        ],
        "stores": [
            {
                "name": "Felipe Neto",
                "uriImage": "a24c2512-5001-4c9c-b899-87eaf873c5ed.png"
            },
            {
                "name": "Caue Moura",
                "uriImage": "da615d38-0ab5-4ed3-8622-22b11667a939.png"
            },
            {
                "name": "Celbit",
                "uriImage": "75fb6308-8c07-47fc-9259-2e63f20a6f6e.png"
            },
            {
                "name": "Nostalgia",
                "uriImage": "867a5bea-d5de-477a-876a-a7b2356605bb.png"
            },
            {
                "name": "Flavia Calina",
                "uriImage": "973308dd-0845-455e-b4c0-42936d4934c7.png"
            },
            {
                "name": "Ninna Secrets",
                "uriImage": "6fa47e63-c45a-4624-94b5-eb1aa98e85a3.png"
            },
            {
                "name": "Imaginago",
                "uriImage": "6a3b307a-24af-4942-ad64-a2b9b88fed18.png"
            },
            {
                "name": "Inutilismo",
                "uriImage": "c60515a9-b32e-4a56-97a4-3db1daa9a50d.png"
            },
            {
                "name": "Castro Brothers",
                "uriImage": "2571ac2a-5334-40f4-860d-7c6a760f924b.png"
            }
        ]
    };

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
                <ListTitle>Os eventos mais visitados</ListTitle>
                <ListsMore>
                    { listsHome.events.map((event, pos) => {
                        return (
                            <ListData key={pos}>
                                <ImgList src={"http://192.168.1.10/Retail/" + event.uriImage} title={event.name} alt={event.name} />
                                <ListName>{event.name}</ListName>
                                <EventLocal>{event.location}</EventLocal>
                            </ListData>
                        );
                    })}
                </ListsMore>
            </MostedTickets>
            <MostedStores>
                <ListTitle>As lojas mais visitadas</ListTitle>
                <ListsMore>
                    { listsHome.stores.map((store, pos) => {
                        return (
                            <ListData key={pos}>
                                <ImgList src={"http://192.168.1.10/Retail/" + store.uriImage} title={store.name} alt={store.name} />
                                <ListName>{store.name}</ListName>
                            </ListData>
                        );
                    })}
                </ListsMore>
            </MostedStores>
            <HomeFooter />
        </Container>
    );
}