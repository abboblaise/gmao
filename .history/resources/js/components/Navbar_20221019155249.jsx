import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'
import { ChartsHeader, Cart, Chat, UserProfile, Notification } from '.';
import { GiClassicalKnowledge } from 'react-icons/gi';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type='buttom' onClick={customFunc} style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
            <span style={{ background: dotColor }}
                className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
            {icon}
        </button>
    </TooltipComponent>
)



const Navbar = ({ dashState, setDashState, themep }) => {
    const activeMenu = dashState.activeMenu
    
    const handleClick = (clicked) => {
        setDashState({ ...initialVals(), [clicked]: true })
    }

    const initialVals = () => {
        return {
            ...dashState,
            chat: false,
            cart: false,
            userProfile: false,
            notification: false,
        }
    }

    useEffect(() => {
        const handleResize = () => setDashState((prevState) => ({
            ...prevState, screenSize: window.innerWidth
        }))

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (dashState.screenSize <= 900) {
            setDashState((prevMenu) => ({ ...prevMenu, activeMenu: false}))
        } else {
            setDashState((prevMenu) => ({ ...prevMenu, activeMenu: true}))
        }
    },[dashState.screenSize])

    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title="Menu" customFunc={() => setDashState(
                (prevMenu) => ({ ...prevMenu, activeMenu: !prevMenu.activeMenu })
            )} color={themep.currentColor} icon={<AiOutlineMenu />} />

            <div className='flex '>
                <NavButton
                    title="Cart"
                    customFunc={() => handleClick('cart')}
                    color={themep.currentColor} 
                    icon={<FiShoppingCart />}
                />
                <NavButton
                    title="Chat"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick('chat')}
                    color={themep.currentColor} 
                    icon={<BsChatLeft />}
                />
                <NavButton
                    title="Notifications"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick('notification')}
                    color={themep.currentColor} 
                    icon={<RiNotification3Line />}
                />
                <TooltipComponent content="Profile" position='BottomCenter'>
                    <div className='flex items-center gap-2 cursor-pointer p-1 
                    hover:bg-light-gray rounded-lg' onClick={()=>handleClick('userProfile')}>
                        <img className='rounded-full w-8 h-8'
                            src={avatar} />
                        <p>
                            <span className='text-gray-400 text-14'>Hi, </span> {' '}
                            <span className='text-gray-400 font-bold ml-1 text-14'>Admin</span>
                        </p>
                        <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>
                {dashState.cart && <Cart dashState={dashState} setDashState={setDashState} /> }
                {dashState.chat && <Chat dashState={dashState} setDashState={setDashState} /> }
                {dashState.notification && <Notification dashState={dashState} setDashState={setDashState} /> }
                {dashState.userProfile && <UserProfile dashState={dashState} setDashState={setDashState} /> }
            </div>
        </div>
    );
};

export default Navbar;
