import React from 'react';
import {SiShopware, MdOutlineCancel} from "react-icons/all";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {links} from '../data/dymmy1';
import {Link, usePage} from "@inertiajs/inertia-react";

const Sidebar = () => {
    const  activeMenu = true
    const {url, component} = usePage
    const activeLink ='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
    const normalLink ='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-black dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow:auto pb-10">
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link href={"/"} onClick={()=>{}}
                    className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                        <SiShopware/> <span>GMAO</span>
                    </Link>
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button type='button' onClick={()=>{}}  
                        className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                            <MdOutlineCancel/>
                        </button>
                    </TooltipComponent>
                </div>
                <div className='mt-10 '>
                    {links.map((item)=> (
                        <div key={item.title}>
                            <p className='text-gray-700 m-3 mt-4 uppercase'>
                            {item.title}
                            </p>
                            {item.links.map((link) => (
                                <Link href={`/${link.name}`} key={link.name}
                                    onClick={() => { }}
                                    className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg 
                                    text-md text-black dark:text-gray-200 dark:hover:text-black
                                    hover:bg-light-gray m-2'
                                >
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
