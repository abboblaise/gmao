import React from 'react';

const Navbar = () => {
    const { dashState, setDashState } = props
    const activeMenu = dashState.activeMenu
    return (
        <div>
            <h3>Navbar</h3>
        </div>
    );
};

export default Navbar;
