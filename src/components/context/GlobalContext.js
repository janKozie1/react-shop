import React,{useReducer} from 'react';
import {uxReducer} from '../reducers/reducers'
import UxContext from './ux-context'
const GlobalContext = props => {
    let [uxState,dispatch] = useReducer(uxReducer,{
        sideNavVisible:false,
        bgFadeVisible:false,
        initialLoading:true,
        categories:[]
    });
    return (
        <UxContext.Provider value={{
            ...uxState,dispatch
        }}>
            {props.children}
        </UxContext.Provider>
    );
};

export default GlobalContext;