import React from 'react';

import * as S from './styledComponents'

const Categories = ({categories}) => {
    return (
        <S.CategoryList>
                <ul>
                    {categories.map((e,index)=>{
                        return <li key={index}>{e}</li>
                    })}
                </ul>
        </S.CategoryList>
    );
};

export default Categories;