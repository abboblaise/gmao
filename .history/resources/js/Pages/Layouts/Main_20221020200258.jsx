import React, { useEffect } from 'react'
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../../components";
import { Ecommerce, Orders, Calendar, Employee, Stacked, Pyramid, Customer, Kanban, Area, Bar, Pie, ColorMapping, ColorPicker, Editor } from "../index";
import remembered, { themeParams } from '../../contexts/remembered'
import { useStateContext } from '../../contexts/ContextProvider';

const Main = ({ children }) => {

    const { activeMenu, setactiveMenu, themeSettings, setThemeSettings } = useStateContext()

    const { themep, setThemep, setColor, setMode } = themeParams()

    return (
        <div>
            <div className=" flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: 'blue', borderRadius: '50%' }}
                            onClick={() => setThemeSettings(true)}
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        <Sidebar/>
                    </div>
                ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                )}
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72 flex-2' : 'flex-2'}`}>
                    <div className="fixed bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>

                    <div>
                        {themeSettings && <ThemeSettings />}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
