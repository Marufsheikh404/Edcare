"use client";

const SkillDev = () => {
    const stats = [
        { value: '3,192+', label: 'SUCCESSFULLY TRAINED' },
        { value: '15,485+', label: 'CLASSES COMPLETED' },
        { value: '97.55%', label: 'SATISFACTION RATE' },
        { value: '97.55%', label: 'SATISFACTION RATE' },
    ];
    return (
        <section aria-label="Key statistics" className="w-full bg-[#07A698] py-7">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {stats.map((s, idx) => (
                        <div key={idx} className={`flex flex-col items-center text-white justify-center py-12 px-5 text-center ${idx !== 0 ? 'md:border-l md:border-white/20' : ''}`}>
                            <div className="text-4xl md:text-4xl font-extrabold leading-none">
                                <span aria-hidden="true">{s.value}</span>
                                <span className="sr-only">{s.value} — stat</span>
                            </div>
                            <div className="mt-3 text-sm md:text-base  font-semibold">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillDev;