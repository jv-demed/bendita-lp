import styled from 'styled-components';
import { social } from '../../assets/infos';
import { BsInstagram } from 'react-icons/bs';

const FooterStyled = styled.section`
    align-items: center;
    background-color: black;
    color: white;
    display: flex;
    height: 100px;
    justify-content: center;
    .icon{
        font-size: 2rem;
    }
`

export function Footer(){
    return(
        <FooterStyled className='container'>
            <a href={social.instagram.link} target='_blank'>
                <BsInstagram className='icon' />
            </a>
        </FooterStyled>
    )
}