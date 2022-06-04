import React from 'react';
import '@styles/error404.css';

const Error404 = () => {
    return(
        <body>
            <div className='error-container'>
                <h1 className='errorh1'>Error 404</h1>
                <p>La página que usted esta buscando no existe</p>
            </div>
        </body>
    );
}

export default Error404; 