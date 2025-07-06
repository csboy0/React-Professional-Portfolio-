import React from 'react';
import { Mail, Phone, Globe, Linkedin, Github, Calendar, Award, Code, Users, Target, BookOpen, Download } from 'lucide-react';

function App() {
  // Define text labels instead of icons
  const Learner = "(Learner)";
  const Expert = "(Expert)";

  const handleDownloadResume = () => {
    // Get the actual rendered HTML from the current page
    const resumeElement = document.querySelector('.max-w-4xl');
    if (!resumeElement) {
      alert('Resume element not found');
      return;
    }

    // Clone the element to avoid modifying the original
    const clonedElement = resumeElement.cloneNode(true) as HTMLElement;
    
    // Remove the download button from the cloned element
    const downloadButton = clonedElement.querySelector('.no-print');
    if (downloadButton) {
      downloadButton.remove();
    }

    // Create a complete HTML document with the current page content
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arun Siddhnath - Professional Resume</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        
        @media print {
            body { 
                background: white !important; 
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .no-print { display: none !important; }
        }
    </style>
</head>
<body class="min-h-screen bg-gray-50 py-4 sm:py-8 px-2 sm:px-4">
    ${clonedElement.outerHTML}
</body>
</html>`;

    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Arun_Siddhnath_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Arun Siddhnath</h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-3 sm:mb-4">WordPress Developer & Server Administrator</p>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
              Experienced WordPress Developer & Server Administrator with 2+ years of expertise in custom WordPress solutions, web development, and server management. Specialized in cPanel/WHM administration, cloud server deployments, and building secure, high-performance WordPress websites using modern technologies. Proven ability to deliver scalable websites and maintain reliable server infrastructures.
            </p>
          </div>
            <div className="flex-shrink-0">
              <button
                onClick={handleDownloadResume}
                className="no-print flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-md"
              >
                <Download size={18} />
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Download</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-4 sm:p-6 border-b">
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base text-gray-700">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600" />
              <a href="mailto:arun.mybiz@gmail.com" className="hover:text-blue-600 transition-colors">
                Arun.Mybiz@Gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-600" />
              <a href="tel:+919301484705" className="hover:text-blue-600 transition-colors">
                +91 930 148 4705
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} className="text-blue-600" />
              <a href="https://www.linkedin.com/in/arunsiddhnath/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} className="text-blue-600" />
              <a href="https://github.com/csboy0" className="hover:text-blue-600 transition-colors">GitHub</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-blue-600" />
              <a href="https://arunsiddhnath.vercel.app/" className="hover:text-blue-600 transition-colors">Portfolio</a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            <div className="text-base leading-relaxed space-y-2">
                <div className="border-l-4 border-blue-600 pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Server Administrator & WordPress Developer</h3>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">Oyeramu · Internship</p>
                  </div>
                  <div className="text-left sm:text-right text-gray-600 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1 text-sm">
                                <span>📅</span>
                      <span>Mar 2024 - Apr 2024</span>
                    </div>
                    <p className="text-sm">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                    <ul className="text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                  <li>• Managed Linux servers with focus on performance optimization and security configurations</li>
                  <li>• Handled server deployments, monitoring, and routine maintenance to ensure high availability</li>
                        <li>• Troubleshot server-related issues including DNS configurations, Apache/Nginx web servers, and database server setups</li>
                        <li>• Implemented security protocols and monitoring systems to maintain server integrity and uptime</li>
                </ul>
              </div>

                <div className="border-l-4 border-blue-600 pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Project Manager</h3>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">TDPVista · Internship</p>
                  </div>
                  <div className="text-left sm:text-right text-gray-600 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1 text-sm">
                                <span>📅</span>
                      <span>Jul 2022 - Aug 2022</span>
                    </div>
                    <p className="text-sm">Bhopal, India</p>
                  </div>
                </div>
                    <ul className="text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                  <li>• Managed complete MERN stack project development from conception to deployment</li>
                        <li>• Collaborated with developers to build and create complete projects according to client specifications</li>
                        <li>• Managed project documentation and statement work sheets for tracking progress and deliverables</li>
                  <li>• Deployed code on production servers and managed deployment processes</li>
                        <li>• Conducted manual QA testing and managed quality assurance reports to ensure project standards</li>
                </ul>
              </div>

                <div className="border-l-4 border-blue-600 pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">WordPress Developer & System Admin</h3>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">Krayon</p>
                  </div>
                  <div className="text-left sm:text-right text-gray-600 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1 text-sm">
                                <span>📅</span>
                      <span>March 2022 - July 2023</span>
                    </div>
                  </div>
                </div>
                    <ul className="text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                  <li>• Created custom WordPress themes and plugins for e-commerce and business websites</li>
                  <li>• Configured and optimized LAMP/LEMP stack servers for improved website performance</li>
                  <li>• Managed DNS settings, SSL certificates, and domain configurations through cPanel</li>
                  <li>• Provided technical support and maintenance for client hosting environments</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">CSS</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">Tailwind CSS</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">React {Learner}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">JavaScript {Learner}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">Node.js {Learner}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">PHP</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">MySQL</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">MongoDB</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">WordPress</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">GitHub</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">Server & Cloud Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">cPanel/WHM {Expert}</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">Linux</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">Apache</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">Nginx</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">AWS</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">DigitalOcean</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">Vultr</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">SSH</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">FTP/SFTP</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">Tools & Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs sm:text-sm">VS Code</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs sm:text-sm">Postman</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs sm:text-sm">Chrome DevTools</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs sm:text-sm">npm</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs sm:text-sm">Terminal</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs sm:text-sm">FileZilla</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs sm:text-sm">Cloudflare</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs sm:text-sm">SSL Management</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Master of Computer Applications</h3>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">SAGE University, Indore</p>
                  </div>
                  <div className="text-left sm:text-right text-gray-600 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1 text-sm">
                      <span>📅</span>
                      <span>2024 - 2026</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700">
                  Currently pursuing Master's degree in Computer Applications with focus on advanced software development, 
                  system design, and emerging technologies.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Bachelor's Degree</h3>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">Jagran Lakecity University, Bhopal</p>
                  </div>
                  <div className="text-left sm:text-right text-gray-600 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1 text-sm">
                      <span>📅</span>
                      <span>Sep 2021 - Apr 2024</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700">
                  Completed undergraduate studies with strong foundation in computer science fundamentals 
                  and practical application development.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Senior School, Biology</h3>
                    <p className="text-blue-600 font-medium text-sm sm:text-base">Maa Saraswati Academy, Jirapur</p>
                  </div>
                  <div className="text-left sm:text-right text-gray-600 mt-1 sm:mt-0">
                    <div className="flex items-center gap-1 text-sm">
                      <span>📅</span>
                      <span>Completed in 2021</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700">
                  Completed senior secondary education with Biology specialization.
                </p>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Projects</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Multi-Client Whmcs Hosting Platform</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-2">
                  Managed hosting platform serving 50+ WordPress websites with automated backups, security monitoring, and performance optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">cPanel/WHM</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">Linux</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">MySQL</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">PHP</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">WordPress</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">SSL</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">Cloudflare</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm">Automated Backups</span>
                </div>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">E-commerce WordPress Website</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-2">
                  Custom WooCommerce stores with payment gateway integration, inventory management, and responsive design for multiple clients.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">WordPress</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">WooCommerce</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">PHP</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">MySQL</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">PayPal API</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">Stripe</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">Custom Themes</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">Responsive Design</span>
                </div>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Cloud Server Migration & Optimization</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-2">
                  Successfully migrated 20+ websites from shared hosting to cloud servers, improving load times by 60% and implementing robust security measures.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">AWS EC2</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">DigitalOcean</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">Server Migration</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">DNS Management</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">Load Balancing</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">Security Hardening</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs sm:text-sm">Performance Optimization</span>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
              <a href="https://internshala.com/student/certificate/i8ulmtqta4s" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">Web Development</h3>
                  <p className="text-xs text-gray-600">Internshala Trainings • Sep 2024</p>
                  <p className="text-xs text-blue-600 mt-1">ID: i8ulmtqta4s</p>
                </div>
              </a>
              
              <a href="https://coursera.org/verify/SXDMBZR9JXMH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">AI and Disaster Management</h3>
                  <p className="text-xs text-gray-600">Coursera • Nov 2023</p>
                  <p className="text-xs text-blue-600 mt-1">ID: SXDMBZR9JXMH</p>
                </div>
              </a>
              
              <a href="https://coursera.org/verify/DK66W7KVYAAH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">High Performance Collaboration: Leadership, Teamwork, and Negotiation</h3>
                  <p className="text-xs text-gray-600">Coursera • Nov 2023</p>
                  <p className="text-xs text-blue-600 mt-1">ID: DK66W7KVYAAH</p>
                </div>
              </a>
              
              <a href="https://coursera.org/verify/2V6JVHUS7FRE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">Human Resources Management Capstone: HR for People Managers</h3>
                  <p className="text-xs text-gray-600">Coursera • Nov 2023</p>
                  <p className="text-xs text-blue-600 mt-1">ID: 2V6JVHUS7FRE</p>
                </div>
              </a>
              
              <a href="https://coursera.org/verify/7SRSX42HEQCS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">Work Smarter, Not Harder: Time Management for Personal & Professional Productivity</h3>
                  <p className="text-xs text-gray-600">Coursera • Nov 2023</p>
                  <p className="text-xs text-blue-600 mt-1">ID: 7SRSX42HEQCS</p>
                </div>
              </a>
              
              <a href="https://coursera.org/verify/EGQDLLRY8AVV" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">Entrepreneurship</h3>
                  <p className="text-xs text-gray-600">Coursera • Mar 2023</p>
                  <p className="text-xs text-blue-600 mt-1">ID: EGQDLLRY8AVV</p>
                </div>
              </a>
              
              <a href="https://coursera.org/verify/98RS2Y9FV2JK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">Introduction to Cloud Computing</h3>
                  <p className="text-xs text-gray-600">Coursera • Mar 2023</p>
                  <p className="text-xs text-blue-600 mt-1">ID: 98RS2Y9FV2JK</p>
                </div>
              </a>
              
              <a href="https://twd.com/certificate/react-bootcamp-2022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">12 Hours HTML, CSS, Javascript, ReactJS Bootcamp</h3>
                  <p className="text-xs text-gray-600">TWD • Nov 2022</p>
                  <p className="text-xs text-blue-600 mt-1">ID: ReactJS Bootcamp</p>
                </div>
              </a>
              
              <a href="https://twd.com/certificate/html-css-js-bootcamp-2022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600">🏆</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">HTML, CSS and JS Bootcamp</h3>
                  <p className="text-xs text-gray-600">TWD • Oct 2022</p>
                  <p className="text-xs text-blue-600 mt-1">ID: HTML/CSS/JS Bootcamp</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;