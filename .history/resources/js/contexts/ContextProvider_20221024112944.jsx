import React, { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setactiveMenu] = useState(true)
    const [isClicked, setisClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const handleClick = (clicked) => {
        setisClicked({...initialState, [clicked]:true})
    }
    const handleReset = () => {
        setisClicked(initialState)
    }

    

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }

    const setColor = (value) => {
        setCurrentColor(value)
        localStorage.setItem('themeColor', value)
        setThemeSettings(false)
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu, setactiveMenu,
                isClicked, setisClicked,
                screenSize, setScreenSize,
                currentColor, 
                currentMode, 
                themeSettings, setThemeSettings,
                setMode,
                setColor,
                handleClick,
                handleReset,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)