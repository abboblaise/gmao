import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type='buttom' onClick={customFunc} style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
            <span style={{ background: dotColor }}
                className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' >
                {icon}
            </span>
        </button>
    </TooltipComponent>
)

const Navbar = ({ dashState, setDashState }) => {
    const activeMenu = dashState.activeMenu
    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title="Menu" customFunc={() => setDashState(
                (prevMenu) => ({ ...prevMenu, activeMenu: !prevMenu.activeMenu })
            )} color="blue" icon={<AiOutlineMenu />} />

            <div className='flex '>
                <NavButton
                    title="Cart"
                    customFunc={() => handleClick('cart')}
                    color="blue"
                    icon={<FiShoppingCart />}
                />
                <NavButton
                    title="Chat"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick('cart')}
                    color="blue"
                    icon={<BsChatLeft />}
                />
            </div>
        </div>
    );
};

export default Navbar;
