import React from 'react';
import { RiseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <RiseLoader
                color="green"
                size={22}
            />
        </div>
    );
};

export default Loading;