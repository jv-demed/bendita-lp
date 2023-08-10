import styled from 'styled-components';
import { LightBtn } from '../buttons/LightBtn';
import { whatsapp } from '../../assets/infos';

const Content2SectionStyled = styled.section`
    background-color: #39163e;
    display: flex;
    gap: 20px;
    height: 90vh;
    width: 100%;
    .img{
        align-items: center;
        .normalImg{
            border-radius: ${props => props.borderImg};
            width: 380px;
        }
    }
    .content{
        align-items: center;
        gap: 20px;
        justify-content: center;
        width: 100%;
        h2{
            color: white;
            font-size: 2.2rem;
        }
        span{
            color: white;
            font-size: 1.2rem;
        }
    }
    @media(max-width: 850px){
        .img{
            .normalImg{
                width: 300px;
            }
        }
    }
    @media(max-width: 750px){
        .img{
            .normalImg{
                width: 250px;
            }
        }
    }
    @media(max-width: 650px){
        align-items: center;
        flex-direction: column;
        gap: 30px;
        height: auto;
        .img{
            .normalImg{
                width: 100%;
            }
        }
    }
`

export function Content2Section({ id, content, borderImg }){
    return(
        <Content2SectionStyled id={id} className='container' borderImg={borderImg}>
            <div className='img flexR'>
                <img src={content.img} className='normalImg' />
            </div>
            <div className='content flexC'>
                <h2>{content.title}</h2>
                <span>{content.txt}</span>
                <a href={`${whatsapp.link}${whatsapp.number}`} target='_blank'>
                    <LightBtn>
                        Saiba mais
                    </LightBtn>
                </a>
            </div>
        </Content2SectionStyled>
    )
}