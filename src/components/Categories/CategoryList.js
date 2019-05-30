import React, {useContext} from 'react';

import * as S from './styledComponents'
import UxContext from '../context/ux-context'
const Categories = () => {
    let {categories,initialLoading} = useContext(UxContext)
    let sub = [
        'flowers',
        'hedges',
        'shrubs',
        'trees',
        'succulents',
        'fruits',
        'grass',
        'ferns',
        'herbs',
        'vegetables'
    ]
    return (
        <S.CategoryList initialLoading={initialLoading}> 
                <ul>
                    {categories.map((e,index)=>{
                        return <S.StyledNavLink key={index} exact to={`/browse${e.path}`}>{e.text}</S.StyledNavLink>
                    })}
                </ul>
        </S.CategoryList>
    );
};

export default Categories;