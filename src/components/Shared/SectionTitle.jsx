import React from 'react';

const SectionTitle = ({ title, des }) => {
    return (
        <div>
            <h1
                className="text-[#162726] text-4xl font-bold leading-normal"
                dangerouslySetInnerHTML={{ __html: title }}
            />

            {des && <p>{des}</p>}
        </div>
    );
};

export default SectionTitle;
