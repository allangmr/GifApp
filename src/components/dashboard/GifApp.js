import React, { useState } from 'react'
import AddCategory from './AddCategory';
import {GifGrid} from './GifGrid';

const GifAppComponent = () => { 

    const [categories, setCategories] = useState(["PDF"]);

    return (
        <>
            <h1>GifApp</h1>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {categories.map((category) => 
                    < GifGrid 
                        key={category}
                        category={category} 
                    />
                )}
            </ol>
        </>
    )
}

export default GifAppComponent
