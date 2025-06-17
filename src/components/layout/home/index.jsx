'use client';
import { Button } from '@/components/ui/button';

export default function Starter({ showNiches, setShowNiches }) {
    const handleGenerateContentClick = () => {
        setShowNiches(true); // Trigger the state change in parent to show niches
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full text-center">
                <h1 className="text-4xl font-semibold text-gray-800 mb-6">LinkedIn Content Generation Tool</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Create engaging and professional LinkedIn posts in just a few clicks. Enhance your personal or brand presence effortlessly!
                </p>
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-lg font-semibold"
                    onClick={handleGenerateContentClick}
                >
                    Generate Content
                </Button>
            </div>
        </div>
    );
}
