import React from 'react'
import {useContext} from 'react'
import {ReviewContext} from '../context'
import Title from '../components/Title';

//Create a function that takes in 2 arguments: items (from data.js) and returns value. Do this iteratively.
const getUnique = (items, value)=>{
    return [...new Set(items.map(item => item[value]))]
}

//Deploy that function and create the front end for it.
export default function ReviewsFilter({reviews}) {
    const context = useContext(ReviewContext);
    const{
        handleChange, type
    } = context;
    //get unique types
    let types = getUnique(reviews, 'type')
    //add all
    types = ['all',...types]
    //map to jsx
    types = types.map((item,index)=>{return <option value={item} key={index}>{item}</option>})
    return (<section className="filter-container"> 
    <Title title="Search Reviews" />
    <form className="filter-form">
        {/* select type */}
        <div className="form-group">
            <label htmlFor="type"> Review Type</label>
            <select name="type" id="type" value ={type} className="form-control" onChange={handleChange}>{types}</select>
        </div>
        {/* end of select type */}
    </form>
    </section>
    );
}
