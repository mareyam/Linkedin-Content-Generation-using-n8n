const N8nGeneratedContent = ({ n8nResponse, setN8nResponse }) => {
    return (
        <div>
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-xl max-w-4xl w-full p-8 text-gray-800 relative">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                    🤖 Generated Content
                </h2>
                <div className="prose text-gray-900 max-w-none">
                    <pre className="whitespace-pre-wrap break-words leading-relaxed text-base font-sans">
                        {n8nResponse}
                    </pre>
                </div>
                <button
                    onClick={() => navigator.clipboard.writeText(n8nResponse)}
                    className="absolute top-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                >
                    📋 Copy
                </button>
                <button
                    onClick={() => setN8nResponse('')}
                    className="mt-8 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm"
                >
                    🔁 Back to Generator
                </button>
            </div>
        </div>
    )
}
export default N8nGeneratedContent