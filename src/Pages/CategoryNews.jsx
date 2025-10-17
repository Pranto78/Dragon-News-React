import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {


    const {id} = useParams();

    return (
        <div>
                <h2>Category news-{id}</h2>
        </div>
    );
};

export default CategoryNews;