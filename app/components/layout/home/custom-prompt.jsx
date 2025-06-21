'use client';
import { useState } from 'react';
import { Button } from '../../ui/button';

export default function CustomPrompt({ onSubmit, prompt, setPrompt }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim()) {
            onSubmit(prompt); // Trigger the onSubmit function passed as prop
            setIsSubmitted(true);
        }
    };

    return (
        <div className="">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create Custom Prompt</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your custom prompt here..."
                        className="w-full p-4 border border-gray-300 rounded-md text-gray-700"
                        rows="6"
                    ></textarea>
                </div>




            </form>
        </div>
    );
}
