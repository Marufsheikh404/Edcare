import React from 'react';

const SectionTitle = ({ title, des }) => {
    return (
        <div>
            <h1
                className="text-[#162726] text-4xl font-bold leading-normal"
                dangerouslySetInnerHTML={{ __html: title }}
            />

            {des && <p className='text-xs text-[#6C706F] leading-relaxed'>{des}</p>}
        </div>
    );
};

export default SectionTitle;
