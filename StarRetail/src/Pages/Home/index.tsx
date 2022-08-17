import { useEffect, useRef, useState } from "react";
import HomeHeader from "../../components/HomeHeader";

import {
    Container,
    SliderHome,
    ImageSlider,
    SliderSelect,
    BoxSldPos
} from "./style";

export default function Home(){

    const sliderStarted = useRef<boolean>(false);
    const [activeSlider, setActiveSlider] = useState<number>(0);
    
    const listSliders = [
        "https://lisboa.rockinrio.com/wp-content/uploads/2020/10/sitedestaque_beatbox-01-1920x650.png",
        "https://sudoeste.meo.pt/Style%20Library/MEOSW/images/facebook-meosw.png?2",
        "https://media.resources.festicket.com/www/photos/2779-artwork.jpg"
    ];

    useEffect(() => {
        function startSlider(){
            setInterval(() => {
                if(activeSlider === listSliders.length-1){
                    setActiveSlider(0);
                }else{
                    setActiveSlider(function(prevSlider: number){
                        if(prevSlider === listSliders.length-1){
                            return 0;
                        }else{
                            return prevSlider + 1;
                        }
                    });
                }
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
            <SliderHome>
                <ImageSlider src={listSliders[activeSlider]} title="Imagem 1" alt="Imagem 1" />
                <SliderSelect>
                    { listSliders.map((slider: string, i: number) => {
                        return (
                            <BoxSldPos key={i} isActive={i === activeSlider} onClick={() => { setActiveSlider(i); }} />
                        );
                    })}
                </SliderSelect>
            </SliderHome>
        </Container>
    );
}