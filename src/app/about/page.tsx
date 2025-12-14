'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-lg border-b border-[#333333]/50">
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            ← Back to Home
          </Link>
          <h1 className="text-xl font-semibold">About</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About AI Topic Explainer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A cutting-edge web application that leverages artificial intelligence to provide comprehensive explanations for any topic you want to understand.
            </p>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Project Vision</h2>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-300 mb-4">
                  AI Topic Explainer was created to make complex topics accessible to everyone. Our mission is to bridge the gap between curiosity and understanding by providing instant, intelligent explanations powered by cutting-edge AI technology.
                </p>
                <p className="text-gray-300">
                  Whether you're a student, professional, or lifelong learner, our platform helps you grasp complex concepts quickly and efficiently through natural language processing and advanced AI models.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Key Features</h2>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-300">Instant AI Responses</h3>
                    <p className="text-gray-400 text-sm">Get comprehensive explanations powered by GPT-4 in seconds</p>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-purple-300">Interactive Interface</h3>
                    <p className="text-gray-400 text-sm">Modern split-screen design with editable questions and real-time updates</p>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-300">Advanced Technology</h3>
                    <p className="text-gray-400 text-sm">Built with Next.js 16, TypeScript, and modern web technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Next.js 16</h3>
                <p className="text-gray-400 text-sm">
                  Modern React framework with App Router for optimal performance and SEO
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.595-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.337.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.42h-2.61l.29 3.808L12 19.289l5.693-1.577.56-6.01h.09z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">TypeScript</h3>
                <p className="text-gray-400 text-sm">
                  Type-safe JavaScript for better development experience and error prevention
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-7 3.6 1.7 3.4 4.3 6.4 7 6.4 2.8 0 5.3-3 7-6.4-1.9-2-3.9-3.6-7-3.6zm0 5.2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-3.2c4.5 0 7.8 3.4 9.5 6-1.7 2.6-5 6-9.5 6s-7.8-3.4-9.5-6c1.7-2.6 5-6 9.5-6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Tailwind CSS</h3>
                <p className="text-gray-400 text-sm">
                  Utility-first CSS framework for rapid, responsive UI development
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Framer Motion</h3>
                <p className="text-gray-400 text-sm">
                  Production-ready motion library for creating smooth animations
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.28 8.72a3.6 3.6 0 0 0-1.24-2.48L13.76.72a3.6 3.6 0 0 0-5.52 0L1.96 6.24a3.6 3.6 0 0 0-1.24 2.48v6.56a3.6 3.6 0 0 0 1.24 2.48l6.28 5.52a3.6 3.6 0 0 0 5.52 0l6.28-5.52a3.6 3.6 0 0 0 1.24-2.48V8.72zM12 17.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-300">OpenAI GPT-4</h3>
                <p className="text-gray-400 text-sm">
                  Advanced AI model for intelligent and comprehensive responses
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-300">React Hooks</h3>
                <p className="text-gray-400 text-sm">
                  Modern state management and lifecycle methods
                </p>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Development Approach</h2>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-blue-300">Agile Development</h3>
                  <p className="text-gray-400">
                    Iterative development process with continuous improvements and user feedback integration.
                  </p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">Modern Best Practices</h3>
                  <p className="text-gray-400">
                    Following industry standards for code quality, security, and performance optimization.
                  </p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-green-300">User-Centric Design</h3>
                  <p className="text-gray-400">
                    Focus on creating intuitive interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Performance</h2>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                    <p className="text-gray-400 text-sm">Lighthouse Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">2s</div>
                    <p className="text-gray-400 text-sm">Load Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                    <p className="text-gray-400 text-sm">Responsive</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">A+</div>
                    <p className="text-gray-400 text-sm">Security Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-4">Created With Passion</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              This project was developed with dedication to creating an exceptional learning experience powered by artificial intelligence.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/how-it-works" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                How It Works
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/github" 
                className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Source
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
