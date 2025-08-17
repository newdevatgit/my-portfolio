import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      
      {/* Main content area */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        
        <main className="mt-8 text-center">
          <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-gray-600">This is a simple portfolio built with React and Vite.</p>
        </main>
        <footer className="mt-8 text-gray-500">
          <p>Made with ❤️ by Arvind Singh</p>
        </footer>
      </div>
    </>
  )
}