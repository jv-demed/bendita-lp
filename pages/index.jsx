import styled from 'styled-components';
import { HomeSection } from '../src/components/sections/HomeSection';
import { Content1Section } from '../src/components/sections/Content1Section';
import { contents } from '../src/assets/texts';
import { Content2Section } from '../src/components/sections/Content2Section';
import { WhatsappBtn } from '../src/components/buttons/WhatsappBtn';

const HomeStyled = styled.main`

`

export default function Home(){
    return(
        <HomeStyled>
            <HomeSection />
            <Content1Section 
                id='ultraformer'
                content={contents.ultraformer}
                border='0'
            />
            <Content2Section 
                id='criolipolise'
                content={contents.criolipolise} 
                border='48% 52% 48% 52% / 34% 35% 65% 66%'
            />
            <Content1Section 
                id='depilacao'
                content={contents.depilacao} 
                border='50% 50% 59% 41% / 14% 32% 68% 86%'
            />
            <WhatsappBtn />
        </HomeStyled>
    )
}