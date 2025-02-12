import React from 'react';

const NavbarButton = ({ name, isActive, onClick }: { name: string; isActive?: boolean; onClick?: (name: string) => void }) => {
    return (
        <button
            onClick={() => onClick && onClick(name)}
            className={`border rounded-3xl px-5 py-3 font-extrabold shadow-lg  hover:text-white transition-all duration-300 backdrop-blur-lg hover:bg-black/50 
                ${isActive ? 'border-[#595959] text-white' : 'border-transparent text-[#a1a1a1]'}  `}
        >
            {name}
        </button>
    );
};

export default NavbarButton;
