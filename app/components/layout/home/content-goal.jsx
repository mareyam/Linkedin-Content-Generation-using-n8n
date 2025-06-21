'use client';
import { useState, useEffect } from 'react';
import { Button } from '../../ui/button';

export default function ContentGoalForm({ setGoalData, goalData }) {
    // Initialize state with goalData (passed as prop)
    const [goal, setGoal] = useState(goalData.goal);
    const [audience, setAudience] = useState(goalData.audience);
    const [focus, setFocus] = useState(goalData.focus);

    // Update the state when goalData changes (in case it's updated in the parent)
    useEffect(() => {
        setGoal(goalData.goal);
        setAudience(goalData.audience);
        setFocus(goalData.focus);
    }, [goalData]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the updated goal data back to the parent component
        setGoalData({ goal, audience, focus });
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Define Your Content Goal</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Goal for Content */}
                <div>
                    <label className="block text-gray-800 mb-2">Goal for Content</label>
                    <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select a goal</option>
                        <option value="share_insights">Share Insights</option>
                        <option value="promote_service">Promote a Service</option>
                        <option value="spark_discussion">Spark a Discussion</option>
                    </select>
                </div>

                {/* Target Audience */}
                <div>
                    <label className="block text-gray-800 mb-2">Target Audience</label>
                    <select
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select your audience</option>
                        <option value="marketers">Marketers</option>
                        <option value="product_managers">Product Managers</option>
                        <option value="entrepreneurs">Entrepreneurs</option>
                    </select>
                </div>

                {/* Focus Area */}
                <div>
                    <label className="block text-gray-800 mb-2">Focus Area (Trend/Topic)</label>
                    <input
                        type="text"
                        value={focus}
                        onChange={(e) => setFocus(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter a trend or topic in content marketing"
                    />
                </div>

                {/* Submit Button */}
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full mt-4"
                    type="submit"
                >
                    Save Content Goal
                </Button>
            </form>
        </div>
    );
}
