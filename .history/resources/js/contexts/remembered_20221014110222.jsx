import React from "react";
import { useRemember } from "@inertiajs/inertia-react";


export default () => {
    const [dashboardProp, detDashboardProps] = useRemember({
        activeMenu: true,
        chat: false,
        cart: false,
        userProfile: false,
        notification: false,
    })
}