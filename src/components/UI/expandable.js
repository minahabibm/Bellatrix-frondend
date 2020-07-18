import React from "react";
import { useState } from 'react';

import './expandable.css';
import { ReactComponent as Expand } from '../../images/Expand.svg'
import { ReactComponent as Expanded } from '../../images/Expanded.svg'



function Expandable(props) {

    const [click, setClick] = useState(false)

    const toggleTrueFalse = () => setClick(!click);

    let newText = props.content.split ('\\n').map ((item, i) => <p key={i}>{item}</p>);

    return (
        <div>

            <div onClick={toggleTrueFalse} className={click ? 'headerAfter' : 'header'}>
                {props.title}
                {click ? <Expanded className = "indicator"></Expanded> : <Expand className = "indicator"></Expand> }
            </div>
            
            {click ?(<div className='content'> <hr className="titleContentLine"/> <div className="text-wrap contentpar">{newText}</div> </div>) : null}
            


        </div>
  );
}

export default Expandable;