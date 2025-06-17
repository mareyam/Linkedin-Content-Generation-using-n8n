'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function NicheSelection() {
    const [selectedNiche, setSelectedNiche] = useState(null);
    const [subNiches, setSubNiches] = useState([]);

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

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full text-center">
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose a Niche</h2>
                    <div className="space-y-4">
                        {niches.map((niche) => (
                            <Button
                                key={niche.name}
                                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full"
                                onClick={() => handleNicheClick(niche)}
                            >
                                {niche.name}
                            </Button>
                        ))}
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
