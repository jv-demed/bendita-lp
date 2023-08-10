import styled from 'styled-components';
import { PurpleBtn } from '../buttons/PurpleBtn';

const EquipSectionStyled = styled.section`
    background-color: #39163e;
    display: flex;
    gap: 10px;
    height: 90vh;
    .img{
        align-items: center;
        img{
            border-radius: ${props => props.$border};
            width: 250px;
        }
    }
    .content{
        align-items: center;
        color: white;
        gap: 30px;
        justify-content: center;
        width: 100%;
        h2{
            font-size: 2.2rem;
            text-align: center;
        }
        span{
            font-size: 1.2rem;
            text-align: center;
        }
    }
    @media(max-width: 850px){
        .img{
            img{
                width: 200px;
            }
        }
    }
    @media(max-width: 650px){
        align-items: center;
        flex-direction: column-reverse;
        gap: 30px;
        height: auto;
        .img{
            img{
                width: 200px;
            }
        }
    }
`

export function EquipSection({ content }){
    return(
        <EquipSectionStyled className='container' $border={content.borderImg}>
            <div className='img flexR'>
                <img
                    src={content.img.img} 
                    alt={content.img.alt}
                />
            </div>
            <div className='content flexC'>
                <h2>{content.title}</h2>
                <span>{content.text}</span>
                <a href={content.link}>
                    <PurpleBtn>
                        {content.textBtn}
                    </PurpleBtn>
                </a>
            </div>
        </EquipSectionStyled>
    )
}