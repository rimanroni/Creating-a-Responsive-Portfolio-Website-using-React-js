import React from 'react';
import { twMerge } from 'tailwind-merge'
const Container = ({children , className, id}) => {
    const newClass = twMerge('max-w-screen-xl mx-auto    px-4 lg:px-0', className )
    return (
        <div id={id} className={newClass} >
            {children}
        </div>
    );
};

export default Container;