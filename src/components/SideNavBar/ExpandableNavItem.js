import React,{useState} from 'react';
import * as S from './styledComponents'
import Logo from '../Logo/Logo'
const ExpandableNavItem = ({onClickDefault, path, icon,text,iconSize,desc,list }) => {
    let [expanded,setExpanded] = useState(false);
    let innerClick = () => {
        setExpanded(false)
        onClickDefault();
    }
    return (
        <>
            <S.Li onClick={() => setExpanded(!expanded)}>
                <S.StyledNavLink exact to={path} >
                    <Logo name={text} size={iconSize} />
                    <p>{(desc || text)}</p>
                    <Logo name='expand' size='small' expanded={expanded} />   
                </S.StyledNavLink>
            </S.Li >
            <S.Li sub expanded={expanded}>
                <S.SubCategories expanded={expanded}>
                    {
                        list.map((e, index) => {
                            return (
                                <S.SubItem key={index}>
                                    <S.StyledNavLink exact to={`/browse${e.path}`} key={index} onClick={()=>innerClick()} >
                                        <Logo name='side' size='tiny' />
                                        <p>{e.text}</p>
                                    </S.StyledNavLink>
                                </S.SubItem>
                            )
                        })
                    }
                </S.SubCategories>
            </S.Li>
        </>
    );
};

export default ExpandableNavItem;