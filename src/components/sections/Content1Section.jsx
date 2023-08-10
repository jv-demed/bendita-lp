import styled from 'styled-components';
import { PurpleBtn } from '../buttons/PurpleBtn';
import { whatsapp } from '../../assets/infos';

const Content1SectionStyled = styled.section`
    background-color: #f7e9f8;
    display: flex;
    gap: 10px;
    height: 90vh;
    width: 100%;
    .content{
        align-items: center;
        gap: 20px;
        justify-content: center;
        width: 100%;
        h2{
            font-size: 2.2rem;
        }
        span{
            font-size: 1.2rem;
        }
    }
    .img{
        align-items: center;
        .normalImg{
            border-radius: ${props => props.$borderImg};
            width: 380px;
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
        flex-direction: column-reverse;
        gap: 30px;
        height: auto;
        .img{
            .normalImg{
                width: 100%;
            }
        }
    }
`

export function Content1Section({ id, content, borderImg }){
    return(
        <Content1SectionStyled id={id} className='container' $borderImg={borderImg}>
            <div className='content flexC'>
                <h2>{content.title}</h2>
                <span>{content.txt}</span>
                <a href={`${whatsapp.link}${whatsapp.number}`} target='_blank'>
                    <PurpleBtn>
                        Saiba mais
                    </PurpleBtn>
                </a>
            </div>
            <div className='img flexR'>
                <img src={content.img.img} className='normalImg' />
            </div>
        </Content1SectionStyled>
    )
}