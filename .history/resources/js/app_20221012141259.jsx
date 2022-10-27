import React from 'react'
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react'
import {InertiaProgress} from "@inertiajs/progress";
import Main from "./Pages/Layouts/Main";

InertiaProgress.init()
createInertiaApp({
    resolve: name => {
        const page = import(`./Pages/${name}.jsx`)
        page.then((value) => {
            value.default.layout ??= pp => <Main>{pp}</Main>;
        })
        return page
    },
    setup({ el, App, props }) {
        //render(<App {...props} />, el)
        const root = createRoot(el) // createRoot(container!) if you use TypeScript
        root.render(<App {...props} />);
    },
})

