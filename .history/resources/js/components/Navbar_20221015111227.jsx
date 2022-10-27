import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'

const NavButton = ({ title, customFunc, icon, color, dorColor }) => {
    <TooltipComponent content={title} position="BottomCenter">
        <button></button>
    </TooltipComponent>
}

const Navbar = ({ dashState, setDashState }) => {
    const activeMenu = dashState.activeMenu
    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title="Menu" />
        </div>
    );
};

export default Navbar;
