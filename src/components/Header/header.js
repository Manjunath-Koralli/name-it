import React from 'react';
import './header.css';

// If class based component - this.props.nameoftheprop

// prop for functional component
const Header = ({ headTitle, headerExpanded }) => {
    // props.headTitle = 'abc'; // Cannot assign read only property 
    return (
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="user-thinking"
                className={`head-image ${headerExpanded ? 
                                        'head-image-expanded' : 
                                        'head-image-contracted'} `} />
            <h1 className={`head-text ${headerExpanded ? 
                                        'head-text-expanded' : 
                                        'head-text-contracted'} `}>{headTitle}</h1>
        </div>
    )
}

export default Header