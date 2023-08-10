import styled from 'styled-components';
import { DisclosureBox } from '../infos/DisclosureBox';

const FaqSectionStyled = styled.section`
    align-items: center;
    background-color: #39163e;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-bottom: 30px;
    h2{
        font-size: 1.8rem;
        text-align: center;
    }
    ul{
        gap: 10px;
        list-style: none;
        width: 100%;
    }
    @media(max-width: 650px){
        padding-bottom: 20px;
        padding-top: 10px;
        ul{
            list-style: none;
        }
    }
`

export function FaqSection({ content }){
    return(
        <FaqSectionStyled className='container'>
            <h2>{content.title}</h2>
            <ul className='flexC'>
                {content.list.map((item, i) => {
                    return(
                        <DisclosureBox key={`faq${i+1}`} item={item} />
                    )
                })}
            </ul>
        </FaqSectionStyled>
    )
}