import styled from 'styled-components';
import { BsWhatsapp } from 'react-icons/bs';
import { whatsapp } from '../../assets/infos';

const WhatsappBtnStyle = styled.div`
    position: fixed;
    bottom: 10px;
    right: 20px;
    .icon{
        color: #54b154;
        font-size: 2.5rem;
    }
    @media(max-width: 650px){
        bottom: 20px;
        right: 30px;
        .icon{
            font-size: 3rem;
        }
    }
`

export function WhatsappBtn(){
    return(
        <WhatsappBtnStyle>
            <a href={`${whatsapp.link}${whatsapp.number}`} target='_blank'>
                <BsWhatsapp className='icon' />
            </a>
        </WhatsappBtnStyle>
    )
}