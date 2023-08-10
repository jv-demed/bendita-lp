import styled from 'styled-components';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronBtn } from '../buttons/ChevronBtn';

const DisclosureBoxStyled = styled.li`
    .btn{
        align-items: center;
        background-color: rgba(0,0,0,0);
        border: 1px solid white;
        border-radius: 5px;
        color: white;
        font-size: 1.2rem;
        justify-content: space-between;
        padding: 15px;
        width: 100%;
    }
    .panel{
        padding: 15px 5px;
    }
`

export function DisclosureBox({ item }){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <DisclosureBoxStyled>
            <Disclosure>
                <Disclosure.Button className='btn flexR'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {item.title}
                    <ChevronBtn isOpen={isOpen} />
                </Disclosure.Button>
                <Disclosure.Panel className='panel'>
                    {item.txt}
                </Disclosure.Panel>
            </Disclosure>
        </DisclosureBoxStyled>
    )
}