'use client';
import { Button } from '../../ui/button';

export default function GenerateNicheWithGPT({ selectedNiche }) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Content for {selectedNiche.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6">Generated content will appear here.</p>

            <Button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full">
                Generate More
            </Button>
        </div>
    );
}
