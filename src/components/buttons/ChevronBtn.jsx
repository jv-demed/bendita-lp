import styled from 'styled-components';
import { BsChevronDown, BsChevronUp} from 'react-icons/bs';

const ChevronBtnStyled = styled.div`
    align-items: center;
    color: white;
    display: flex;
    padding-left: 10px;
`

export function ChevronBtn({ isOpen }){ 
    return(
        <ChevronBtnStyled>
            {isOpen ? 
                <BsChevronUp /> :
                <BsChevronDown />
            }
        </ChevronBtnStyled>
    )
}