import React from "react";
import { useRemember } from "@inertiajs/inertia-react";


export default function dashParams () {
    const [dashState, setDashState] = useRemember({
        activeMenu: true,
        chat: false,
        cart: false,
        userProfile: false,
        notification: false,
        screenSize: undefined,
    })
    return { dashState, setDashState }
}

export const themeParams = () => {
    const [themep, setThemep] = useRemember({
        currentColor: '#03C9D7',
        currenMode: 'Light',
        themeSettings: false,
    })

    const setMode = (e) => {
        setThemep(prevP => ({ ...prevP, currenMode: e.target.value }))
        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor = (value) => {
        setThemep(prevP => ({ ...prevP, currentColor: value }))
        localStorage.setItem('themeColor', value)
    }

    return {themep, setThemep, setColor, setMode}
}