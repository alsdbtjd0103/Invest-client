import React, { useState } from 'react';
import styles from '../../styles/Header.module.css';
import {AiOutlineMenu} from 'react-icons/ai';

function MenuModal(){
    
}
function HeaderMenu(){
    const [open,setOpen] = useState(false);

    const toggle = () => {
        setOpen(open => !open);
    }
    
    return(
        <div>
            <AiOutlineMenu size={24} style={{cursor:'pointer'}} onClick={() => console.log('asd')}/>
        </div>
    )
}

export default HeaderMenu;