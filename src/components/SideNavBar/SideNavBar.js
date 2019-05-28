import React,{useContext} from 'react';

import * as S from './styledComponents'
import SideNavItem from './SideNavItem'
import ExpandableNavItem from './ExpandableNavItem'
import UxContext from '../context/ux-context'

const SideNavBar = ({links}) => {
    let {sideNavVisible,dispatch,categories} = useContext(UxContext)
    let onClickDefault = () =>{
        dispatch({type:'toggleSideNav',value:false})
    }
    return (
        <S.Nav sideNavVisible={sideNavVisible}>
            <SideNavItem path='/account/login' text='Log in' icon={false} iconSize='' onClickDefault={onClickDefault} primary={true}/>
            <SideNavItem path='/account/signup' text='Sign up' icon={false} iconSize='' onClickDefault={onClickDefault}  primary={true}/>
            {links.map((e,index)=>{
                return <SideNavItem key={index} path={e.path} desc={e.desc} text={e.text} icon={true} iconSize={'small'} onClickDefault={onClickDefault} />
            })}
            <ExpandableNavItem path='/categories' text='categories' iconSize={'small'} icon={true} expandable={true} list={categories} onClickDefault={onClickDefault}/>
            
        </S.Nav>
    );
};

export default SideNavBar;