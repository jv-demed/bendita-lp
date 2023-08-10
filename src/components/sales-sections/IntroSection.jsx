import styled from 'styled-components';
import { logos } from '../../assets/imgs';
import { PriceBox } from '../infos/PriceBox';
import { ActionLightBtn } from '../buttons/ActionLightBtn';

const IntroSectionStyled = styled.section`
    align-items: center;
    background-color: #39163e;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 80vh;
    justify-content: center;
    text-align: center;
    img{
        width: 120px;
    }
    @media(max-width: 650px){
        h1{
            font-size: 1.4rem;
        }
    }
`

export function IntroSection({ content }){
    return(
        <IntroSectionStyled className='container'>
            <img src={logos.logoVert.img} alt={logos.logoVert.alt} />
            <h1>{content.text}</h1>
            <PriceBox
                oldP={content.oldPrice}
                newP={content.newPrice}
                parce={content.parce}
            />
            <a href={content.link} target='_blank'>
                <ActionLightBtn>
                    {content.textBtn}
                </ActionLightBtn>
            </a>
        </IntroSectionStyled>
    )
}