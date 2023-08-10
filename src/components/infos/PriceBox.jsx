import styled from 'styled-components';

const PriceBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .old{
        font-size: 1.4rem;
        s{
            color: tomato;
        }
    }
    .new{
        color: #95f395;
        font-size: 1.8rem;
    }
`

export function PriceBox({ oldP, newP, parce }){
    return(
        <PriceBoxStyled>
            <span className='old'>De <s>R${oldP}</s></span>
            <span>por apenas</span>
            <span className='new'>
                {parce ?
                    `${parce}x de R$${newP}` :
                    `R$${newP}`
                }
            </span>
        </PriceBoxStyled>
    )
}