import React from 'react';

import * as S from './styledComponents'

const Categories = () => {
    return (
        <S.CategoryList>
                <ul>
                    <li>Indoors</li>
                    <li>Outdoors</li>
                    <li>Herbs</li>
                    <li>Aquarium</li>
                    <li>Fruits</li>
                    <li>Vegetables</li>
                    <li>Accesories</li>
                </ul>
        </S.CategoryList>
    );
};

export default Categories;