import React, { useState } from 'react';
import LiveTranslator from './components/LiveTranslator';
import FileUpload from './components/FileUpload';
import Nav from './components/Nav';
import { API_KEY } from './constants';

const ApiKeyErrorDisplay = () => (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-black/50 border border-red-500/50 rounded-2xl p-8 max-w-lg text-center shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-bold text-white mb-2">Configuration Error</h2>
            <p className="text-gray-300">
                The Gemini API key is not configured for this application. Please ensure the <code>API_KEY</code> environment variable is set correctly. The application cannot function without it.
            </p>
        </div>
    </div>
);

type Page = 'live' | 'file';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('live');

    if (!API_KEY) {
        return <ApiKeyErrorDisplay />;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans bg-gradient-to-br from-gray-900 to-indigo-900">
            <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Speak Note</h1>
                    <p className="text-lg md:text-xl text-gray-400 mt-2">Speak, Transcribe, Translate, and Listen.</p>
                </header>

                <div className="w-full max-w-4xl p-6 bg-black/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
                    <Nav currentPage={currentPage} onPageChange={setCurrentPage} />
                    <div className="mt-6">
                        {currentPage === 'live' ? <LiveTranslator /> : <FileUpload />}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
