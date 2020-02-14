import React from 'react';
import {Link} from 'react-router-dom';

export default function Progsingleitem({item}) {
    
    return (
        
        <div>
            <Link to={`/prog/${item._id}`} class="singlehref"> 
            <div className="section_content web" style={ { backgroundImage: `url(${item.img})`}}>
              <p className="section_content_text">{item.title}</p> 
              <p className="state" id="state1">{item.iravichak}</p>
            </div>
            </Link>
        </div>
    )
}
