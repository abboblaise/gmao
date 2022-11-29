import React, { useEffect } from 'react'
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../../components";
import { useStateContext } from '../../contexts/ContextProvider';
import "primereact/resources/primereact.min.css";                  //core css
import "primereact/resources/themes/tailwind-light/theme.css";
import "primeicons/primeicons.css";

const Main = ({ children }) => {

    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, setCurrentColor, setCurrentMode } = useStateContext()

    useEffect(() => {
        const themode = localStorage.getItem('themeMode');
        const thecolor = localStorage.getItem('themeColor');
        if (themode) {
            setCurrentMode(themode)
        }
        if (thecolor) {
            setCurrentColor(thecolor)
        }
    }, []);

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className=" flex relative dark:bg-main-dark-bg w-screen">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: currentColor, borderRadius: '50%' }}
                            onClick={() => setThemeSettings(true)}
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className={`w-72 fixed z-[1500] sidebar dark:bg-secondary-dark-bg bg-white`}>
                        <Sidebar/>
                    </div>
                ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                )}
                <div className={`relative dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`}>
                    <div className="sticky top-0 bg-main-bg dark:bg-main-dark-bg navbar w-full ">
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
