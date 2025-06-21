'use client';
import './globals.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import N8nGeneratedContent from '@/components/layout/home/n8n-generated-content';
import NicheSelection2 from '@/components/layout/home/niche-selection2';
import SubNiche from '@/components/layout/home/sub-niche';

const Home = () => {
  const [selectedNiche, setSelectedNiche] = useState({
    name: 'Marketing',
    subNiches: ['Content Marketing', 'Social Media', 'SEO'],
  });
  const [subNiches, setSubNiches] = useState(selectedNiche.subNiches);
  const [selectedSubNiche, setSelectedSubNiche] = useState([]);
  const [tone, setTone] = useState('professional');
  const [postLength, setPostLength] = useState('short');
  const [industry, setIndustry] = useState('tech');
  const [imageIncluded, setImageIncluded] = useState(false);
  const [hashtags, setHashtags] = useState('abc');
  const [tagging, setTagging] = useState('def');
  const [prompt, setPrompt] = useState('custom prompt');
  const [n8nResponse, setN8nResponse] = useState('');
  const [goalData, setGoalData] = useState({
    goal: '',
    audience: '',
    focus: '',
  });

  const webhookUrl =
    'https://otherwise.app.n8n.cloud/webhook/12fd167b-7740-4f77-aafe-cf499bc31504';

  const handleSubmit = async () => {
    const dataToSend = {
      type: 'submit form',
      selectedNiche: selectedNiche.name,
      selectedSubNiche,
      tone,
      postLength,
      industry,
      imageIncluded,
      hashtags,
      tagging,
      prompt,
      goalData,
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
      setN8nResponse(data[0]?.message?.content);
      console.log('Response from n8n:', data);
    } catch (error) {
      console.error('Error sending request to webhook:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6 overflow-hidden">
      {n8nResponse ? (
        <N8nGeneratedContent
          n8nResponse={n8nResponse}
          setN8nResponse={setN8nResponse}
        />
      ) : (
        <div className="bg-white p-10 rounded-lg shadow-xl w-full overflow-y-none  ">
          <div className="flex flex-row space-x-6 ">
            <div className="w-1/2 space-y-12">
              <NicheSelection2
                selectedNiche={selectedNiche}
                setSelectedNiche={setSelectedNiche}
                setSubNiches={setSubNiches}
              />
              <SubNiche
                subNiches={subNiches}
                setSelectedSubNiche={setSelectedSubNiche}
                selectedSubNiche={selectedSubNiche}
                selectedNiche={selectedNiche}
                setSubNiches={setSubNiches}
              />
              <ContentGoalForm setGoalData={setGoalData} goalData={goalData} />
            </div>

            <div className="w-1/2 space-y-12">
              <ContentGenerationSettings
                setTone={setTone}
                setPostLength={setPostLength}
                setIndustry={setIndustry}
                setImageIncluded={setImageIncluded}
                setHashtags={setHashtags}
                setTagging={setTagging}
              />
              <CustomPrompt prompt={prompt} setPrompt={setPrompt} />
            </div>
          </div>

          <Button
            className="bg-neutral-900 hover:bg-neutral-800 text-white p-8 rounded-md w-full mt-4"
            onClick={handleSubmit}
          >
            🚀 Generate Content
          </Button>
        </div>
      )}
    </div>
  );
};

const ContentGoalForm = ({ setGoalData, goalData }) => (
  <div className="space-y-2">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Goal</h2>

    <input
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="What's the goal of this content?"
      value={goalData.goal}
      onChange={(e) =>
        setGoalData((prev) => ({ ...prev, goal: e.target.value }))
      }
    />
    <input
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Who is the target audience?"
      value={goalData.audience}
      onChange={(e) =>
        setGoalData((prev) => ({ ...prev, audience: e.target.value }))
      }
    />
    <input
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="What should the content focus on?"
      value={goalData.focus}
      onChange={(e) =>
        setGoalData((prev) => ({ ...prev, focus: e.target.value }))
      }
    />
  </div>
);

const ContentGenerationSettings = ({
  setTone,
  setPostLength,
  setIndustry,
  setImageIncluded,
  setHashtags,
  setTagging,
}) => (
  <div className="space-y-2">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Settings</h2>
    <input
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="e.g., Professional, Friendly, Bold"
      onChange={(e) => setTone(e.target.value)}
    />
    <input
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="e.g., Short, Medium, Long"
      onChange={(e) => setPostLength(e.target.value)}
    />
    <input
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="e.g., Marketing, Tech, Health"
      onChange={(e) => setIndustry(e.target.value)}
    />
    <input
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Add relevant hashtags, separated by commas"
      onChange={(e) => setHashtags(e.target.value)}
    />
    <input
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Tag people or companies (optional)"
      onChange={(e) => setTagging(e.target.value)}
    />

    {/* <label className="flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        onChange={(e) => setImageIncluded(e.target.checked)}
      />
      Include Image
    </label> */}
  </div>
);

const CustomPrompt = ({ prompt, setPrompt }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Custom Prompt</h2>

    <textarea
      rows={3}
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Add any specific instructions or tone preferences here"
    ></textarea>
  </div>
);

export default Home;

// 'use client';
// import './globals.css';
// import { useState } from 'react';
// import ContentGenerationSettings from '@/components/layout/home/content-generation-settings';
// import NicheSelection2 from '@/components/layout/home/niche-selection2';
// import GenerateNicheWithGPT from '@/components/layout/home/genereate-niche-with-gpt';
// import CustomPrompt from '@/components/layout/home/custom-prompt';
// import { Button } from '@/components/ui/button';
// import ContentGoalForm from '@/components/layout/home/content-goal';
// import ReactMarkdown from 'react-markdown';

// export default function Home() {
//   const [selectedNiche, setSelectedNiche] = useState({
//     name: 'Marketing',
//     subNiches: ['Content Marketing', 'Social Media', 'SEO'],
//   });
//   const [subNiches, setSubNiches] = useState(selectedNiche.subNiches); // Default subNiches based on selectedNiche
//   const [showContentGeneration, setShowContentGeneration] = useState(false);
//   const [selectedSubNiche, setSelectedSubNiche] = useState('Content Marketing'); // Default to first sub-niche

//   const [tone, setTone] = useState('professional'); // Default tone: professional
//   const [postLength, setPostLength] = useState('short'); // Default post length: short
//   const [industry, setIndustry] = useState('tech'); // Default industry: tech
//   const [imageIncluded, setImageIncluded] = useState(false); // Default: no image
//   const [hashtags, setHashtags] = useState('abc'); // Default: empty
//   const [tagging, setTagging] = useState('def'); // Default: empty
//   const [prompt, setPrompt] = useState('custom prompt'); // Default: empty
//   const [n8nResponse, setN8nResponse] = useState(''); // Default: empty

//   const [goalData, setGoalData] = useState({
//     goal: 'share_insights', // Default goal: share insights
//     audience: 'marketers', // Default audience: marketers
//     focus: 'content marketing', // Default focus: content marketing
//   });
//   const [webhookData, setWebhookData] = useState(null);
//   const webhookUrl =
//     'https://otherwise.app.n8n.cloud/webhook/12fd167b-7740-4f77-aafe-cf499bc31504';

//   const handleSubmit = async () => {
//     const dataToSend = {
//       selectedNiche: 'Technology',
//       selectedSubNiche: 'AI',
//       tone: 'Professional',
//       postLength: 'Short',
//       industry: 'Software',
//       imageIncluded: true,
//       hashtags: ['#AI', '#Innovation'],
//       tagging: ['@openai'],
//       prompt: 'Write a LinkedIn post about the impact of AI on the job market.',
//       goalData: 'Drive engagement and start conversation',
//     };

//     try {
//       const response = await fetch(webhookUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       const data = await response.json();
//       setN8nResponse(data[0]?.message?.content);
//       // Make sure "Respond to Webhook" is returning JSON
//       console.log('Response from n8n:', data);
//     } catch (error) {
//       console.error('Error sending request to webhook:', error);
//     }
//   };
//   // const handleSubmit = async () => {
//   //   const dataToSend = {
//   //     selectedNiche,
//   //     selectedSubNiche,
//   //     tone,
//   //     postLength,
//   //     industry,
//   //     imageIncluded,
//   //     hashtags,
//   //     tagging,
//   //     prompt,
//   //     goalData,
//   //   };

//   //   try {
//   //     // Send POST request to the webhook API endpoint in Next.js
//   //     const response = await fetch(webhookUrl, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(dataToSend),
//   //     });

//   //     const data = await response.json();
//   //     console.log('data is');
//   //     console.log(data);
//   //     return data.content;

//   //   } catch (error) {
//   //     console.error('Request failed', error);
//   //   }
//   // };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6 overflow-hidden">
//       {n8nResponse ? (
//         <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-xl max-w-4xl w-full p-8 text-gray-800 relative">
//           {/* Header */}
//           <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
//             🤖 Generated Content
//           </h2>

//           {/* Render Markdown */}
//           <div className="prose prose-p:my-2 prose-headings:mt-4 prose-headings:mb-2 prose-strong:font-semibold text-gray-900 max-w-none">
//             <pre className="whitespace-pre-wrap break-words leading-relaxed text-base font-sans">
//               {n8nResponse}
//             </pre>
//           </div>

//           {/* Copy Button */}
//           <button
//             onClick={() => navigator.clipboard.writeText(n8nResponse)}
//             className="absolute top-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
//           >
//             📋 Copy
//           </button>

//           {/* Back Button */}
//           <button
//             onClick={() => setN8nResponse('')}
//             className="mt-8 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm"
//           >
//             🔁 Back to Generator
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="bg-white p-10 rounded-lg shadow-xl max-w-4xl w-full flex flex-col space-y-6">
//             {/* Niche Selection Component */}
//             <NicheSelection2
//               selectedNiche={selectedNiche}
//               setSelectedNiche={setSelectedNiche}
//               setSubNiches={setSubNiches}
//             />

//             {/* Sub-niches Display */}
//             {selectedNiche && subNiches.length > 0 && (
//               <div className="mt-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                   Sub-niches for {selectedNiche.name}
//                 </h3>
//                 <ul className="space-y-2">
//                   {subNiches.map((subNiche) => (
//                     <li
//                       key={subNiche}
//                       onClick={() => setSelectedSubNiche(subNiche)}
//                       className={`text-lg text-gray-600 hover:border-2 cursor-pointer ${
//                         selectedSubNiche === subNiche
//                           ? 'border-2 border-blue-500'
//                           : ''
//                       }`}
//                     >
//                       {subNiche}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <ContentGoalForm setGoalData={setGoalData} goalData={goalData} />

//             {/* Content Generation Settings */}
//             {selectedNiche && (
//               <ContentGenerationSettings
//                 setTone={setTone}
//                 setPostLength={setPostLength}
//                 setIndustry={setIndustry}
//                 setImageIncluded={setImageIncluded}
//                 setHashtags={setHashtags}
//                 setTagging={setTagging}
//               />
//             )}

//             {/* Generate Content with GPT */}
//             {/* {showContentGeneration && (
//           <GenerateNicheWithGPT selectedNiche={selectedNiche} />
//         )} */}

//             {/* Custom Prompt */}
//             {selectedNiche && (
//               <CustomPrompt prompt={prompt} setPrompt={setPrompt} />
//             )}

//             {/* Generate Content Button */}
//             {selectedNiche && (
//               <Button
//                 className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full mt-4"
//                 onClick={handleSubmit}
//               >
//                 Generate Content
//               </Button>
//             )}

//             {/* Show Selected Options Summary */}
//           </div>
//           <div>
//             {webhookData && (
//               <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                   Webhook Response Data
//                 </h3>
//                 <p>
//                   <strong>Content:</strong> {webhookData[0]?.message?.content}
//                 </p>
//                 <p>
//                   <strong>Role:</strong> {webhookData[0]?.message?.role}
//                 </p>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
