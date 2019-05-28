import React,{useContext} from 'react';

import * as S from './styledComponents'
import SideNavItem from './SideNavItem'
import UxContext from '../context/ux-context'

const SideNavBar = ({links}) => {
    let {sideNavVisible,dispatch} = useContext(UxContext)
    let onClickDefault = () =>{
        dispatch({type:'toggleSideNav',value:false})
    }
    let categories = [
        {
            path: '/outdoors',
            text: 'Outdoors',

        },
        {
            path: '/indoors',
            text: 'Indoors',
        },
        {
            path: '/herbs',
            text: 'Herbs',

        },
        {
            path: '/aquarium',
            text: 'Aquarium',

        },
        {
            path: '/fruits',
            text: 'Fruits',

        },
        {
            path: '/vegetables',
            text: 'Vegetables',

        },
        {
            path: '/accesories',
            text: 'Accesories',

        },
    ]
    return (
        <S.Nav sideNavVisible={sideNavVisible}>
            <SideNavItem path='/account/login' text='Log in' icon={false} iconSize='' onClick={onClickDefault} expandable={false} primary={true}/>
            <SideNavItem path='/account/signup' text='Sign up' icon={false} iconSize='' onClick={onClickDefault} expandable={false} primary={true}/>
            {links.map((e,index)=>{
                return <SideNavItem key={index} path={e.path} desc={e.desc} text={e.text} icon={true} iconSize={'small'} onClick={onClickDefault} expandable={false}/>
            })}
            <SideNavItem path='/categories' text='categories' iconSize={'small'} icon={true} expandable={true} list={categories}/>
            
        </S.Nav>
    );
};

export default SideNavBar;