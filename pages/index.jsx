import { HomeSection } from '../src/components/sections/HomeSection';
import { Content1Section } from '../src/components/sections/Content1Section';
import { contents } from '../src/assets/texts';
import { Content2Section } from '../src/components/sections/Content2Section';
import { WhatsappBtn } from '../src/components/buttons/WhatsappBtn';

export default function Home(){
    return(
        <>
            <HomeSection />
            <Content1Section 
                id='ultraformer'
                content={contents.ultraformer}
            />
            <Content2Section 
                id='criolipolise'
                content={contents.criolipolise} 
                borderImg='48% 52% 48% 52% / 34% 35% 65% 66%'
            />
            <Content1Section 
                id='depilacao'
                content={contents.depilacao} 
                borderImg='50% 50% 59% 41% / 14% 32% 68% 86%'
            />
            <WhatsappBtn />
        </>
    )
}