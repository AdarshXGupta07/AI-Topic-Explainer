'use client';

import Link from 'next/link';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-lg border-b border-[#333333]/50">
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            ← Back to Home
          </Link>
          <h1 className="text-xl font-semibold">How It Works</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How AI Topic Explainer Works
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the technology behind our intelligent topic explanation system and learn how it transforms your questions into comprehensive answers.
            </p>
          </div>

          {/* Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Input Your Question</h3>
              <p className="text-gray-300">
                Type any question or topic you want to understand. Our animated input field provides an intuitive and engaging experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">AI Processing</h3>
              <p className="text-gray-300">
                Your question is sent to our advanced AI model (GPT-4) which analyzes the context and generates a comprehensive explanation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Split-Screen Display</h3>
              <p className="text-gray-300">
                View your original question on the left and the AI-generated explanation on the right in our modern split-screen interface.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Edit & Refine</h3>
              <p className="text-gray-300">
                Click to edit your question and get new responses instantly. Use the stop button to control the AI generation process.
              </p>
            </div>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Technology Stack</h2>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">Frontend</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Next.js 16 with App Router</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Framer Motion for animations</li>
                    <li>• React hooks for state management</li>
                  </ul>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-green-300">Backend</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Next.js API Routes</li>
                    <li>• OpenAI GPT-4 integration</li>
                    <li>• RESTful API design</li>
                    <li>• Error handling and validation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Key Features</h2>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-blue-300">Interactive Elements</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Animated input with vanishing text</li>
                    <li>• Placeholder cycling effects</li>
                    <li>• Real-time loading states</li>
                    <li>• Smooth transitions and hover effects</li>
                  </ul>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-orange-300">User Experience</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Editable questions interface</li>
                    <li>• Stop button for AI control</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Dark metallic theme</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* API Integration */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-green-400">AI Integration</h2>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
              <p className="text-gray-300 mb-6">
                Our application uses OpenAI's GPT-4 model to provide intelligent and comprehensive explanations. Here's how the integration works:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-300">Request</h3>
                  <p className="text-gray-400 text-sm">
                    Your question is sent to OpenAI's API with optimized prompts for the best possible response.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">Processing</h3>
                  <p className="text-gray-400 text-sm">
                    GPT-4 analyzes your question and generates a comprehensive response.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-300">Response</h3>
                  <p className="text-gray-400 text-sm">
                    The AI response is displayed in an elegant, easy-to-read format.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Privacy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Security & Privacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Data Protection</h3>
                <p className="text-gray-300 mb-4">
                  We prioritize your privacy and security:
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Questions are processed securely</li>
                  <li>• No personal data is stored</li>
                  <li>• API keys are kept confidential</li>
                  <li>• HTTPS encryption for all requests</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Best Practices</h3>
                <p className="text-gray-300 mb-4">
                  Our implementation follows industry standards:
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Input validation and sanitization</li>
                  <li>• Error handling and rate limiting</li>
                  <li>• Secure API key management</li>
                  <li>• Regular security updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start using AI Topic Explainer today and get instant, comprehensive answers to any question you have.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
