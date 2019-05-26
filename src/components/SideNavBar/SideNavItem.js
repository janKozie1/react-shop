import React, { useState } from 'react';

import Logo from '../Logo/Logo'
import * as S from './styledComponents'

const SideNavItem = ({ path, text, iconSize, onClick, desc, expandable }) => {
    let [expanded, setExpanded] = useState(false);
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
    if (!onClick) {
        onClick = () => {
            setExpanded(!expanded)
        }
    }
    return (
        <>
            <S.Li onClick={() => onClick()} expandable={expandable} >
                <S.StyledNavLink exact to={path} >
                    <Logo name={text} size={iconSize} />
                    <p>{(desc || text)}</p>
                    {
                        expandable ?
                            <Logo name='expand' size='small' expanded={expanded} />
                            :
                            null
                    }

                </S.StyledNavLink>
            </S.Li >
                <S.Li sub expanded={expanded}>
                    <S.SubCategories>
                        {
                            categories.map((e, index) => {
                                return (
                                    <S.SubItem>
                                        <S.StyledNavLink exact to={`/browse${e.path}`} key={index} >
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

export default SideNavItem;