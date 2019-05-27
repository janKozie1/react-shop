import React, { useState } from 'react';

import Logo from '../Logo/Logo'
import * as S from './styledComponents'

const SideNavItem = ({ path, text, iconSize, onClick, desc, expandable ,list,icon,primary}) => {
    let [expanded, setExpanded] = useState(false);
    
    let handleClick = () =>{
        if(!onClick){
            console.log("?")
            setExpanded(!expanded)
        }else{
            onClick();
            setExpanded(false)
        }

    }
    return (
        <>
            <S.Li onClick={() => handleClick()} expandable={expandable} primary={primary}>
                <S.StyledNavLink exact to={path} >
                    {icon && <Logo name={text} size={iconSize} />}
                    <p>{(desc || text)}</p>
                    {
                        expandable ?
                            <Logo name='expand' size='small' expanded={expanded} />
                            :
                            null
                    }

                </S.StyledNavLink>
            
            </S.Li >
            {expandable ? 
                <S.Li sub expanded={expanded}>
                    <S.SubCategories>
                        {
                            list.map((e, index) => {
                                return (
                                    <S.SubItem key={index}>
                                        <S.StyledNavLink exact to={`/browse${e.path}`} key={index} onClick={()=>setExpanded(false)} >
                                            <Logo name='side' size='tiny' />
                                            <p>{e.text}</p>
                                        </S.StyledNavLink>
                                    </S.SubItem>
                                )
                            })
                        }
                    </S.SubCategories>
                </S.Li>
                :
                null
        
             }
                
                   
            

        </>
    );
};

export default SideNavItem;