import React,{useState} from 'react';
import * as S from './styledComponents'
import Logo from '../Logo/Logo'
const ExpandableNavItem = ({onClickDefault, path,text,iconSize,desc,list }) => {
    let [expanded,setExpanded] = useState(false);
    let innerClick = () => {
        setExpanded(false)
        onClickDefault();
    }
    //make a loader if list is empty
    //pas a calulated height instead of hardcoded
    //maybe use as for main nav items and for expandable nav items
    return (
        <>
            <S.Li onClick={() => setExpanded(!expanded)}>
                <S.StyledNavLink exact to={path} >
                    <Logo name={text} size={iconSize} />
                    <p>{(desc || text)}</p>
                    <Logo name='expand' size='small' expanded={expanded} />   
                </S.StyledNavLink>
            </S.Li >
            <S.SubLi sub expanded={expanded}>
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
            </S.SubLi>
        </>
    );
};

export default ExpandableNavItem;