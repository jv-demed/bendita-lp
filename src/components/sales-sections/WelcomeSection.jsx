import styled from 'styled-components';
import { PurpleBtn } from '../buttons/PurpleBtn';

const WelcomeSectionStyled = styled.section`
    background-color: #f7e9f8;
    display: flex;
    gap: 10px;
    height: 90vh;
    .content{
        align-items: center;
        color: #39163e;
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
    .img{
        align-items: center;
        img{
            border-radius: ${props => props.$border};
            width: 380px;
        }
    }
    @media(max-width: 850px){
        img{
            width: 300px;
        }
    }
    @media(max-width: 750px){
        img{
            width: 250px;
        }
    }
    @media(max-width: 650px){
        align-items: center;
        flex-direction: column-reverse;
        gap: 30px;
        height: auto;
        img{
            width: 100%;
        }
    }
`

export function WelcomeSection({ content }){
    return(
        <WelcomeSectionStyled className='container' $border={content.borderImg}>
            <div className='content flexC'>
                <h2>{content.title}</h2>
                <span>{content.text}</span>
                <a href={content.link}>
                    <PurpleBtn>
                        {content.textBtn}
                    </PurpleBtn>
                </a>
            </div>
            <div className='img flexR'>
                <img
                    src={content.img.img} 
                    alt={content.img.alt}
                />
            </div>
        </WelcomeSectionStyled>
    )
}