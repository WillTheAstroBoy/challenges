import React from 'react';
import Loader from 'react-loader-spinner';

function Loading(){
    return (
        <>
            <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
            <p>Loading...</p>
        </>
    );
}

export default Loading;