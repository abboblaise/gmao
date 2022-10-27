import React from 'react';
import {SiShopware, MdOutlineCancel} from "react-icons/all";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {links} from '../data/dymmy1';
import { Link, usePage } from "@inertiajs/inertia-react";
import remembered from '../contexts/remembered'
import { Inertia } from '@inertiajs/inertia';

const Sidebar = ({ dashState, setDashState,  }) => {
    const activeMenu = dashState.activeMenu
    const screenSize = dashState.screenSize
    const { url, component, props} = usePage()

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            setDashState({ ...dashState, activeMenu: false })
        }
    }

    const handleClose = () => {
        console.log('handle close');
        Inertia.visit('/set-dash', {
            method: 'get', data: {},
            onStart: visit => { console.log(visit) },
            onSuccess: (page) => { console.log(Promise.all) },
            onError: (errors) => { console.log(errors) },
            onFinish: visit => { console.log(visit) },
        })

    }


    const activeLink ='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
    const normalLink ='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow:auto pb-10">
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link href={"/"} onClick={handleClose}
                    className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                        <SiShopware/> <span>GMAO</span>
                    </Link>
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button type='button' onClick={() => setDashState(
                            (prevState) => ({...prevState, activeMenu:!prevState.activeMenu})
                        )} 
                        className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                            <MdOutlineCancel/>
                        </button>
                    </TooltipComponent>
                </div>
                <div className='mt-10 '>
                    {links.map((item)=> (
                        <div key={item.title}>
                            <p className='text-gray-400 m-3 mt-4 uppercase'>
                            {item.title}
                            </p>
                            {item.links.map((link) => (
                                <Link href={`/${link.name}`} key={link.name}
                                    onClick={handleCloseSidebar}
                                    className={url === `/${link.name}` ? activeLink : normalLink}
                                >
                                    {link.icon}
                                    <span className='capitalize'>{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </>)}
        </div>
    );
};

export default Sidebar;
