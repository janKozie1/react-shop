import React,{useState} from 'react';
import NavContext from './nav-context'
const GlobalContext = props => {
    let [isToggled,setToggle] = useState(false);
    return (
        <NavContext.Provider value={{
            isToggled,
            setToggle
        }}>
            {props.children}
        </NavContext.Provider>
    );
};

export default GlobalContext;