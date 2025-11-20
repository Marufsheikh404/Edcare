import React from 'react';

const SectionTitle = ({ title, des }) => {
    return (
        <div>
            <h1
                className="text-[#162726] text-4xl font-bold leading-11"
                dangerouslySetInnerHTML={{ __html: title }}
            />

            {des && <p className='text-xs text-[#6C706F] leading-relaxed mt-3'>{des}</p>}
        </div>
    );
};

export default SectionTitle;
