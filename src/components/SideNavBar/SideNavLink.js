import React,{useState} from 'react';

import Logo from '../Logo/Logo'
import * as S from './styledComponents'

const SideNavLink = ({path,text,iconSize,onClick,desc,expandable }) => {
    let [expanded,setExpanded] = useState(false);
    let categories = [
        'Indoors',
        'Outdoors',
        'Herbs',
        'Aquarium',
        'Fruits',
        'Vegetables',
        'Accesories'
    ]
    if(!onClick){
        onClick = () => {
            console.log("lol!")
            setExpanded(!expanded)
        }
    }
    return (
        <S.Li onClick={() => onClick()}>
            <S.StyledNavLink exact to={path}>
                <Logo name={text} size={iconSize} />
                <p>{(desc || text)}</p>
                {
                    expandable ? 
                        <Logo name='expand' size='small' expanded={expanded}/>
                    :
                    null
                }
                {
                    expanded ? 
                        <S.SubCategories>
                            {categories.map((e,index)=>{
                                return <S.Li key={index}>{e}</S.Li>
                            })}
                        </S.SubCategories>
                    :
                    null
                }
            </S.StyledNavLink>
        </S.Li>
    );
};

export default SideNavLink;