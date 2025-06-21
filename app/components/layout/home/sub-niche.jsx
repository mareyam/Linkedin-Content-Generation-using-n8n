'use client';
import { Button } from '../../ui/button';
import { useEffect } from 'react';

const SubNiche = ({
    subNiches,
    setSelectedSubNiche,
    selectedSubNiche = [],
    selectedNiche,
    setSubNiches
}) => {
    if (!selectedNiche || subNiches.length === 0) return null;

    const webhookUrl =
        'https://otherwise.app.n8n.cloud/webhook/12fd167b-7740-4f77-aafe-cf499bc31504';

    useEffect(() => {
        const getSubNiches = async () => {
            const dataToSend = {
                type: 'sub niche selection',
                selectedNiche: selectedNiche
            };

            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                });

                const data = await response.json();
                const parsedContent = JSON.parse(data[0].message.content);
                setSubNiches(parsedContent);
            } catch (error) {
                console.error('Error sending request to webhook:', error);
            }
        };
        getSubNiches();
    }, [selectedNiche]);

    const toggleSubNiche = (subNiche) => {
        if (selectedSubNiche.includes(subNiche)) {
            setSelectedSubNiche(selectedSubNiche.filter(item => item !== subNiche));
        } else {
            setSelectedSubNiche([...selectedSubNiche, subNiche]);
        }
    };

    return (
        <div className="">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sub-niches for {selectedNiche.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {subNiches.map((subNiche) => {
                    const isSelected = selectedSubNiche.includes(subNiche);
                    return (
                        <Button
                            key={subNiche}
                            variant="outline"
                            className={`text-sm font-medium border border-black transition ${isSelected
                                ? 'bg-black text-white'
                                : 'text-black hover:bg-black hover:text-white'
                                }`}
                            onClick={() => toggleSubNiche(subNiche)}
                        >
                            {subNiche}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

export default SubNiche;
