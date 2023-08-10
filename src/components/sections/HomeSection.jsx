import styled from 'styled-components';
import { images, logos } from '../../assets/imgs';
import { LightBtn } from '../buttons/LightBtn';

const HomeSectionStyled = styled.section`
    background-color: #39163e;
    display: flex;
    height: 90vh;
    justify-content: space-evenly;
    width: 100%;
    .infos{
        align-items: center;
        gap: 30px;
        justify-content: center;
        .logo{
            width: 300px;
        }
        span{
            color: white;
            text-align: center;
        }
        .actions{
            align-items: center;
            gap: 10px;
            justify-content: center;
            a{
                color: black;
                text-decoration: none;
            }
        }
    }
    .body{
        height: 100%;
    }
    @media(max-width: 650px){
        justify-content: center;
        .infos{
            .logo{
                width: 250px;
            }
        }
        .body{
            display: none;
        }
    }
`

export function HomeSection(){
    return(
        <HomeSectionStyled className='container'>
            <div className='infos flexC'>
                <img className='logo'
                    src={logos.logoVert.img} 
                    alt={logos.logoVert.alt}
                />
                <span>Conheça nossos principais procedimentos</span>
                <div className='actions flexC'>
                    <LightBtn>
                        <a href='#ultraformer'>
                            Ultraformer 3
                        </a>
                    </LightBtn>
                    <LightBtn>
                        <a href='#criolipolise'>
                            Criolipólise
                        </a>
                    </LightBtn>
                    <LightBtn>
                        <a href='#depilacao'>
                            Depilação
                        </a>
                    </LightBtn>
                </div>
            </div>
            <div>
                <img src={images.bodyHome} className='body' />
            </div>
        </HomeSectionStyled>
    )
}