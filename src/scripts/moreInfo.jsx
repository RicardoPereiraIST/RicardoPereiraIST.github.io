import React, { useState } from 'react';

const MoreInfoToggle = ({ position }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        if (position.description?.length > 0) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
    <div>
        <div 
            className="header clickable-header"
            onClick={toggleDescription}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleDescription(); }}
            aria-expanded={isExpanded}
            aria-label="Toggle description"
        >
            <span className="toggle-icon">
                <i className={`fas ${isExpanded ? "fa-caret-down" : "fa-caret-right"} icon`}></i>
            </span>
            <p className="role">{position.role}</p>
            <p className="date">{position.date}</p>
        </div>

        {isExpanded && (
            <ul className="description">
                {position.description.map((description, index) => (
                    <li key={index}>{description.text}</li>
                ))}
            </ul>
        )}
    </div>
    );
};

export default MoreInfoToggle;