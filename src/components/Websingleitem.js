import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

export default function Websingleitem({item}) {
    
    return (
        
        <div>
            <Link to={`/web/${item._id}`} class="singlehref"> 
            <div className="section_content web" style={ { backgroundImage: `url(${item.img})`}} id="progdiv">
              <p className="section_content_text">{item.title}</p> 
              <p className="state" id="one">{item.iravichak}</p>
            </div>
            </Link>
        </div>
    )
}
