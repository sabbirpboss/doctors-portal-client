import React from 'react';

const MainBtn = ({children}) => {
    return (
        <button class="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary">
          {children}
        </button>
    );
};

export default MainBtn;