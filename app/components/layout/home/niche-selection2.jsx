'use client';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

export default function NicheSelection2({ selectedNiche, setSelectedNiche, setSubNiches }) {
    const niches = [
        { name: 'Marketing', subNiches: ['Content Marketing', 'Social Media', 'SEO'] },
        { name: 'Technology', subNiches: ['Web Development', 'AI & ML', 'Cybersecurity'] },
        { name: 'Finance', subNiches: ['Investment', 'Fintech', 'Personal Finance'] },
        { name: 'Health & Wellness', subNiches: ['Mental Health', 'Fitness', 'Nutrition'] },
        { name: 'Education', subNiches: ['EdTech', 'Online Courses', 'Study Hacks'] },
        { name: 'Lifestyle', subNiches: ['Travel', 'Minimalism', 'Productivity'] },
        { name: 'E-Commerce', subNiches: ['Dropshipping', 'Amazon FBA', 'Product Marketing'] },
        { name: 'Design', subNiches: ['Graphic Design', 'UI/UX', 'Motion Graphics'] },
    ];

    const handleNicheClick = (niche) => {
        setSelectedNiche(niche);
        // setSubNiches(niche.subNiches);
    };



    return (
        <div className="">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Niche</h2>
            <div className="grid grid-cols-4 gap-2">
                {niches.map((niche) => {
                    const isSelected = selectedNiche?.name === niche.name;
                    return (
                        <Button
                            key={niche.name}
                            variant="outline"
                            className={`text-sm font-medium border border-black transition ${isSelected
                                ? 'bg-black text-white'
                                : 'text-black hover:bg-black hover:text-white'
                                }`}
                            onClick={() => handleNicheClick(niche)}
                        >
                            {niche.name}
                        </Button>
                    );
                })}
                <Input onChange={(e) => setSelectedNiche(e.target.value)} placeholder='write niche' className={'bg-black text-white font-white'} />
            </div>
        </div>
    );
}
