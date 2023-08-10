import styled from 'styled-components';

const BenefitsSectionStyled = styled.section`
    align-items: center;
    background-color: #f7e9f8;
    color: #39163e;
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
        text-align: left;
        li{
            font-size: 1.2rem;
            .title{
                font-weight: bold;
            }
        }
    }
    @media(max-width: 650px){
        padding-bottom: 20px;
        padding-top: 10px;
        ul{
            list-style: none;
        }
    }
`

export function BenefitsSection({ content }){
    return(
        <BenefitsSectionStyled className='container'>
            <h2>{content.title}</h2>
            <ul className='flexC'>
                {content.list.map((item, i) => {
                    return(
                        <li key={`ben${i+1}`}>
                            <span className='title'>{item.title}: </span>
                            <span>{item.txt}</span>
                        </li>
                    )
                })}
            </ul>
        </BenefitsSectionStyled>
    )
}