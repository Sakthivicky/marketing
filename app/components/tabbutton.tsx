import React from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}
const Tabbutton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonclass = active ? 'text-white  border-b border-purple' : 'text-[#ADB7BE]'


    return (
        <div>
            <button onClick={selectTab} >
                <p className={`mr-3  font-semibold  text-gray-400 hover:text-white ${buttonclass}`}>
                    {children}
                </p>
            </button>
        </div>
    )
}

export default Tabbutton
