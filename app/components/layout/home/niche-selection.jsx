'use client';
import { useState } from 'react';
import { Button } from '../../ui/button';

export default function NicheSelection() {
    const [selectedNiche, setSelectedNiche] = useState(null);
    const [subNiches, setSubNiches] = useState([]);
    const [userNiche, setUserNiche] = useState('');
    const [showNextButton, setShowNextButton] = useState(false);

    const niches = [
        { name: 'Marketing', subNiches: ['Content Marketing', 'Social Media', 'SEO'] },
        { name: 'Technology', subNiches: ['Web Development', 'AI & ML', 'Cybersecurity'] },
        { name: 'Finance', subNiches: ['Investment', 'Fintech', 'Personal Finance'] },
        { name: 'Health & Wellness', subNiches: ['Mental Health', 'Fitness', 'Nutrition'] },
    ];

    const handleNicheClick = (niche) => {
        setSelectedNiche(niche);
        setSubNiches(niche.subNiches);
    };

    const handleUserNicheChange = (e) => {
        setUserNiche(e.target.value);
        setShowNextButton(e.target.value.length > 0); // Show Next button if the user typed something
    };

    const handleNextClick = () => {
        // You can handle custom sub-niches here or just show a message
        setSelectedNiche({ name: userNiche, subNiches: ['Custom Sub-Niche 1', 'Custom Sub-Niche 2'] });
        setSubNiches(['Custom Sub-Niche 1', 'Custom Sub-Niche 2']);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full text-center">
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose a Niche</h2>
                    <div className="space-y-2">
                        {/* Smaller buttons for niches */}
                        {niches.map((niche) => (
                            <Button
                                key={niche.name}
                                className="bg-black text-white py-1 px-3 rounded-md w-full text-sm"
                                onClick={() => handleNicheClick(niche)}
                            >
                                {niche.name}
                            </Button>
                        ))}

                        {/* Input for custom niche */}
                        <div className="mt-4">
                            <input
                                type="text"
                                value={userNiche}
                                onChange={handleUserNicheChange}
                                placeholder="Type your niche"
                                className="border border-gray-300 py-2 px-4 rounded-md w-full text-gray-700"
                            />
                            {showNextButton && (
                                <Button
                                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mt-4 text-lg font-semibold"
                                    onClick={handleNextClick}
                                >
                                    Next
                                </Button>
                            )}
                        </div>
                    </div>

                    {selectedNiche && (
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Sub-niches for {selectedNiche.name}
                            </h3>
                            <ul className="space-y-2">
                                {subNiches.map((subNiche) => (
                                    <li key={subNiche} className="text-lg text-gray-600">{subNiche}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// 'use client';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';

// export default function NicheSelection() {
//     const [selectedNiche, setSelectedNiche] = useState(null);
//     const [subNiches, setSubNiches] = useState([]);

//     const niches = [
//         { name: 'Marketing', subNiches: ['Content Marketing', 'Social Media', 'SEO'] },
//         { name: 'Technology', subNiches: ['Web Development', 'AI & ML', 'Cybersecurity'] },
//         { name: 'Finance', subNiches: ['Investment', 'Fintech', 'Personal Finance'] },
//         { name: 'Health & Wellness', subNiches: ['Mental Health', 'Fitness', 'Nutrition'] },
//     ];

//     const handleNicheClick = (niche) => {
//         setSelectedNiche(niche);
//         setSubNiches(niche.subNiches);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
//             <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full text-center">
//                 <div className="mt-8">
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose a Niche</h2>
//                     <div className="space-y-4">
//                         {niches.map((niche) => (
//                             <Button
//                                 key={niche.name}
//                                 className="bg-black text-white py-2 px-4 rounded-md w-full"
//                                 onClick={() => handleNicheClick(niche)}
//                             >
//                                 {niche.name}
//                             </Button>
//                         ))}
//                     </div>

//                     {selectedNiche && (
//                         <div className="mt-8">
//                             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                                 Sub-niches for {selectedNiche.name}
//                             </h3>
//                             <ul className="space-y-2">
//                                 {subNiches.map((subNiche) => (
//                                     <li key={subNiche} className="text-lg text-gray-600">{subNiche}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
