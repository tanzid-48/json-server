import { GetNews } from '@/lib/data';
import React from 'react';

const NewsPage = async() => {
    const news = await GetNews();
    return (
        <div>
            <h2>News:{news.length}</h2>
        </div>
    );
};

export default NewsPage;