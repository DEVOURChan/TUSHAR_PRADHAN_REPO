import React from 'react';
import { Github, Linkedin, Mail, Download, Trophy, BookOpen, Code2, User2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Tushar Pradhan</h1>
          <p className="text-xl text-gray-300 mb-8">Full Stack Developer</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/tushar0" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:pradhantushar23@gmail.com" className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center"><User2 className="mr-2" /> About Me</h2>
          <p className="text-gray-300 max-w-3xl">
            Driven problem-solver with background in developing scalable web applications within collaborative, fast-paced
            environment. Skilled in JavaScript, Angular, and responsive design, aiming to transition into new field. Focused on
            applying technical expertise and collaborative approach to drive innovative solutions.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center"><BookOpen className="mr-2" /> Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Master of Computer Applications</h3>
              <p className="text-gray-300">Jecrc University</p>
              <p className="text-gray-400">7.28 CGPA | 2023-2025</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Bachelor of Computer Applications</h3>
              <p className="text-gray-300">Subodh P.G College</p>
              <p className="text-gray-400">79% | 2020-2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center"><Code2 className="mr-2" /> Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">VidStat</h3>
              <p className="text-gray-300 mb-4">Python, HTML, CSS, JavaScript</p>
              <p className="text-gray-400">A Python-based web application for real-time YouTube video statistics with sentiment analysis.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Gamerfy</h3>
              <p className="text-gray-300 mb-4">HTML, CSS, JavaScript</p>
              <p className="text-gray-400">Responsive and interactive game download website with user-friendly interface.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Library Management System</h3>
              <p className="text-gray-300 mb-4">Java, SQL</p>
              <p className="text-gray-400">Fully functional library management system with Java frontend and SQL backend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center"><Trophy className="mr-2" /> Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Foundation of AI & Data Analysis</h3>
              <p className="text-gray-400">Comprehensive training in AI concepts, machine learning techniques, and data processing skills.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Data Analysis using Python</h3>
              <p className="text-gray-400">Practical training in data manipulation, visualization, and statistical analysis techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Tushar Pradhan. All rights reserved.</p>
          <div className="mt-4">
            <a 
              href="https://drive.google.com/file/d/1ASVj0mqVur-Kc9NH8RB6r4j8rGY1mawC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <Download className="mr-2" size={20} /> Download Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;