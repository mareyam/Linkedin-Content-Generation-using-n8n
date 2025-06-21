import { Button } from "../../ui/button";

const Introduction = ({ setIsIntro }) => {
    return (
        <div className="">
            <div className="bg-white p-10 rounded-xl shadow-xl max-w-3xl text-center space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    🚀 AI-Powered LinkedIn Content Generator
                </h1>
                <p className="text-gray-700 text-lg">
                    Create impactful, professional LinkedIn posts in seconds — without the writer’s block.
                </p>
                <ul className="text-left text-gray-600 list-disc list-inside space-y-2">
                    <li>Select your niche and sub-niche</li>
                    <li>Define your content tone, length, and target industry</li>
                    <li>Specify hashtags, tagging preferences, and even add a custom prompt</li>
                    <li>Let AI generate a polished, platform-ready post</li>
                </ul>
                <p className="text-gray-700 font-medium">
                    Save time. Grow your presence. Impress your network.
                </p>
                <Button onClick={() => setIsIntro(false)} className='w-full py-12 text-lg'>
                    Enter
                </Button>
            </div>
        </div>
    );
};

export default Introduction;
