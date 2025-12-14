'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Results() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuery, setEditedQuery] = useState('');
  const [isAborted, setIsAborted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Get the query from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('query');
    
    if (queryParam) {
      setQuery(queryParam);
      setEditedQuery(queryParam);
      generateResponse(queryParam);
    } else {
      // If no query, redirect back to home
      router.push('/');
    }
  }, [router]);

  const generateResponse = async (userQuery: string) => {
  try {
    setIsLoading(true);

    const res = await fetch("/.netlify/functions/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: userQuery }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed");
    }

    setResponse(data.answer);
  } catch (error) {
    setResponse("AI failed to respond.");
  } finally {
    setIsLoading(false);
  }
};



  const handleAbort = () => {
    setIsAborted(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsLoading(false);
    setResponse('Response generation was aborted by user.');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEnterClick = () => {
    if (editedQuery.trim()) {
      setQuery(editedQuery.trim());
      setIsEditing(false);
      generateResponse(editedQuery.trim());
      // Update URL
      const newUrl = `/results?query=${encodeURIComponent(editedQuery.trim())}`;
      window.history.pushState({}, '', newUrl);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleEnterClick();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-lg border-b border-[#333333]/50">
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            ← Back to Home
          </Link>
          <h1 className="text-xl font-semibold">AI Results</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Main Content - Split Screen */}
      <div className="pt-20 h-screen flex relative">
        {/* Running Border Animation */}
        <div className="absolute left-1/2 top-20 bottom-0 w-1 z-10">
          <div className="h-full w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-blue-500 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-blue-500 to-transparent animate-pulse"></div>
            <div className="absolute top-1/4 w-full h-2 bg-blue-400 animate-bounce"></div>
            <div className="absolute top-1/2 w-full h-2 bg-blue-400 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-3/4 w-full h-2 bg-blue-400 animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Left Panel - User Query */}
        <div className="w-1/2 border-r border-gray-800 p-8 flex flex-col group">
          <h2 className="text-2xl font-bold mb-6 text-gray-300 transition-all duration-500 group-hover:text-gray-100 group-hover:scale-105">Your Question</h2>
          <div className="flex-1 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-lg p-6 border border-gray-600 shadow-2xl transition-all duration-500 group-hover:from-gray-700 group-hover:via-gray-800 group-hover:to-gray-700 group-hover:scale-102 group-hover:shadow-3xl">
            {/* Metallic overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-gray-700/20 pointer-events-none rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            
            {isEditing ? (
              <div className="space-y-3 relative z-10">
                <div className="text-lg text-gray-100 whitespace-pre-wrap">
                  {query || 'No question provided'}
                </div>
                
                <textarea
                  value={editedQuery}
                  onChange={(e) => setEditedQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full h-32 bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-gray-100 resize-none focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20"
                  placeholder="Edit your question..."
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleEnterClick}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Enter
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2 relative z-10">
                <div 
                  className="text-lg text-gray-100 whitespace-pre-wrap transition-all duration-300 group-hover:text-white cursor-pointer hover:bg-gray-700/30 rounded-lg p-2 -m-2"
                  onClick={handleEditClick}
                >
                  {query || 'No question provided'}
                </div>
                
                <div className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Click to edit
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - AI Response */}
        <div className="w-1/2 p-8 flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-gray-300">AI Response</h2>
          <div className="flex-1 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-lg p-6 border border-gray-600 shadow-2xl relative overflow-hidden">
            {/* Metallic overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-gray-700/20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            
            {isLoading ? (
              <div className="flex items-center justify-center h-full relative z-10">
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400 mx-auto"></div>
                  <p className="text-gray-400">AI is thinking...</p>
                  <button
                    onClick={handleAbort}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" />
                    </svg>
                    Stop
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-lg text-gray-100 whitespace-pre-wrap relative z-10">
                {response || 'No response generated'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
