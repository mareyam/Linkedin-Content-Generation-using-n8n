'use client';
import { useState, useEffect } from 'react';

export default function ContentGenerationSettings({
    setTone,
    setPostLength,
    setIndustry,
    setImageIncluded,
    setHashtags,
    setTagging,
}) {
    const [toneValue, setToneValue] = useState('professional'); // Default: Professional
    const [postLengthValue, setPostLengthValue] = useState('medium'); // Default: Medium
    const [industryValue, setIndustryValue] = useState('tech'); // Default: Tech

    // Use useEffect to call setTone, setPostLength, setIndustry when the values change
    useEffect(() => {
        setTone(toneValue);
        setPostLength(postLengthValue);
        setIndustry(industryValue);
    }, [toneValue, postLengthValue, industryValue, setTone, setPostLength, setIndustry]);

    return (
        <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Content Generation Settings</h2>

            {/* Tone Selection */}
            <div>
                <label className="text-gray-800">Tone</label>
                <select
                    value={toneValue}
                    onChange={(e) => setToneValue(e.target.value)} // Update toneValue state
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="motivational">Motivational</option>
                </select>
            </div>

            {/* Post Length */}
            <div>
                <label className="text-gray-800">Post Length</label>
                <select
                    value={postLengthValue}
                    onChange={(e) => setPostLengthValue(e.target.value)} // Update postLengthValue state
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="short">Short</option>
                    <option value="medium">Medium</option>
                    <option value="long">Long</option>
                </select>
            </div>

            {/* Industry Selection */}
            <div>
                <label className="text-gray-800">Industry</label>
                <select
                    value={industryValue}
                    onChange={(e) => setIndustryValue(e.target.value)} // Update industryValue state
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="tech">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="health">Health</option>
                    <option value="marketing">Marketing</option>
                </select>
            </div>

            {/* Include Image */}
            <div>
                <label className="text-gray-800">Include Image</label>
                <input
                    type="checkbox"
                    onChange={() => setImageIncluded((prev) => !prev)}
                    className="ml-2"
                />
            </div>

            {/* Hashtags */}
            <div>
                <label className="text-gray-800">Hashtags</label>
                <input
                    type="text"
                    onChange={(e) => setHashtags(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="#LinkedIn #Marketing"
                />
            </div>

            {/* Tagging */}
            <div>
                <label className="text-gray-800">Tagging</label>
                <input
                    type="text"
                    onChange={(e) => setTagging(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="@username"
                />
            </div>
        </div>
    );
}
