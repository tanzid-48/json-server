import { GetCategories } from '@/lib/data';
import React from 'react';

const CategoriesPage = async() => {
 const categories = await GetCategories();
    return (
        <div>
            <h2>categories:{categories.length}</h2>
        </div>
    );
};

export default CategoriesPage;