import React,{useState} from 'react';
import * as S from './styledComponents'

const SideNavLink = ({path,text,iconSize,desc,text,expandable,expanded}) => {
    return (
        <S.StyledNavLink exact to={path} >
            <Logo name={text} size={iconSize} />
            <p>{(desc || text)}</p>
            {
                expandable ? 
                    <Logo name='expand' size='small' expanded={expanded}/>
                :
                null
            } 
        </S.StyledNavLink>
    );
};

export default SideNavLink;