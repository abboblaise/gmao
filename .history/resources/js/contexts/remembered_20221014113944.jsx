import React from "react";
import { useRemember } from "@inertiajs/inertia-react";


export default function dashParams () {
    const  elements = useRemember({
        activeMenu: true,
        chat: false,
        cart: false,
        userProfile: false,
        notification: false,
    })
}