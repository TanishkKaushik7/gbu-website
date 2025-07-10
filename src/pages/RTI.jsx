
import { Download, FileText, Users, Clock, Phone, Mail } from 'lucide-react';
const RTI = () => {
  const handleDownload = (formType) => {
    // Create a simple PDF-like content for demonstration
    const content = `Right to Information - ${formType}\n\nGautam Buddha University\nGreater Noida, Uttar Pradesh - 201312\n\nThis is a sample ${formType} document.\nPlease contact the university for the actual form.`;
    const blob = new Blob([content], {
      type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formType.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Header with simple gradient */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center animate-scale-in">
            <h1 className="text-4xl font-bold mb-2">
              Right To Information
            </h1>
            <p className="text-xl opacity-90">Gautam Buddha University</p>
            <div className="mt-4 w-24 h-1 bg-blue-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Introduction Section with neutral colors */}
        <section className="mb-12 animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
              <FileText className="mr-3 text-blue-600" size={32} />
              About RTI
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-black leading-relaxed">
                  The Right to Information Act, 2005 (RTI Act) is an Act of the Parliament of India which sets out the rules and procedures regarding citizens' right to information. It replaced the erstwhile Freedom of Information Act, 2002.
                </p>
                <p className="text-black leading-relaxed">
                  Under the provisions of RTI Act, any citizen of India may request information from a "public authority" which is required to reply expeditiously or within thirty days.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-black">Key Features</h3>
                <ul className="space-y-2 text-black">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Transparent Governance</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Citizen Empowerment</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Authorities Section with neutral colors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            RTI Authorities
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Appellate Authority */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Appellate Authority</h3>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-black">Dr. Krishna Kant Dwivedi</p>
                <p className="text-black">Deputy Registrar (I/C)</p>
                <p className="text-black">Gautam Buddha University</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="flex items-center text-black mb-2">
                    <Phone size={16} className="mr-2 text-blue-500" />
                    +91-120-2344212
                  </p>
                  <p className="flex items-center text-black">
                    <Mail size={16} className="mr-2 text-blue-500" />
                    dr@gbu.ac.in
                  </p>
                </div>
              </div>
            </div>

            {/* Public Information Officer */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Public Information Officer (PIO)</h3>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-black">Dr. Vivek Kumar Mishra</p>
                <p className="text-black">Director Works</p>
                <p className="text-black">Gautam Buddha University</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="flex items-center text-black mb-2">
                    <Phone size={16} className="mr-2 text-green-500" />
                    +91-120-2344260
                  </p>
                  <p className="flex items-center text-black">
                    <Mail size={16} className="mr-2 text-green-500" />
                    director.works@gbu.ac.in
                  </p>
                </div>
              </div>
            </div>

            {/* Assistant Public Information Officer */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">Assistant PIO (APIO)</h3>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-black">Sh. Umakant Ahirwar</p>
                <p className="text-black">Section Superintendent</p>
                <p className="text-black">Gautam Buddha University</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="flex items-center text-black mb-2">
                    <Phone size={16} className="mr-2 text-orange-500" />
                    +91-120-2344218
                  </p>
                  <p className="flex items-center text-black">
                    <Mail size={16} className="mr-2 text-orange-500" />
                    umakant@gbu.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-8 text-center flex items-center justify-center">
              <Clock className="mr-3 text-blue-600" size={32} />
              How to Apply for Information
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold mb-3 text-blue-700">Application Format</h3>
                <p className="text-black text-sm">
                  Applications should be made in writing or through electronic means in English or Hindi to the Public Information Officer.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold mb-3 text-green-700">Required Information</h3>
                <ul className="text-black text-sm space-y-1">
                  <li className="flex items-center"><span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>Details of information sought</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>Period to which information relates</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>Contact details of applicant</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>Fee deposit particulars</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold mb-3 text-orange-700">Fee Structure</h3>
                <p className="text-black text-sm">
                  Application fee: ₹10 per application<br />
                  Additional fee: ₹2 per page for photocopying (A4/A3 size)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-12">
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Important Notes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Information shall be provided within 30 days of receipt of application
                </li>
                <li className="flex items-start text-black">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  Information concerning life and liberty shall be provided within 48 hours
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start text-black">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  If information is held by another authority, application shall be transferred within 5 days
                </li>
                <li className="flex items-start text-black">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  No fee shall be charged from Below Poverty Line (BPL) applicants
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Downloadable Forms */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">
              Downloadable Forms
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="text-white" size={24} />
                </div>
                <h3 className="font-bold mb-4 text-blue-700">RTI Application Form</h3>
                <button onClick={() => handleDownload("RTI Application Form")} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center mx-auto">
                  <Download size={18} className="mr-2" />
                  Download
                </button>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="text-white" size={24} />
                </div>
                <h3 className="font-bold mb-4 text-green-700">First Appeal Form</h3>
                <button onClick={() => handleDownload("First Appeal Form")} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center mx-auto">
                  <Download size={18} className="mr-2" />
                  Download
                </button>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg text-center border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="text-white" size={24} />
                </div>
                <h3 className="font-bold mb-4 text-orange-700">RTI Guidelines</h3>
                <button onClick={() => handleDownload("RTI Guidelines")} className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center mx-auto">
                  <Download size={18} className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Contact Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-black">University Address</h3>
                <address className="not-italic text-black leading-relaxed">
                  Gautam Buddha University<br />
                  Greater Noida, Gautam Buddha Nagar<br />
                  Uttar Pradesh - 201312<br />
                  India
                </address>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-black">General Contact</h3>
                <div className="space-y-3 text-black">
                  <p className="flex items-center">
                    <Phone size={16} className="mr-3 text-blue-500" />
                    <strong>Phone:</strong>&nbsp;0120-2344200
                  </p>
                  <p className="flex items-center">
                    <Mail size={16} className="mr-3 text-green-500" />
                    <strong>Email:</strong>&nbsp;info@gbu.ac.in
                  </p>
                  <p className="flex items-center">
                    <FileText size={16} className="mr-3 text-orange-500" />
                    <strong>Website:</strong>&nbsp;www.gbu.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="w-16 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg">&copy; 2024 Gautam Buddha University. All rights reserved.</p>
          <p className="mt-2 text-gray-300">Right to Information Act, 2005 - Promoting Transparency and Accountability</p>
        </div>
      </footer>
    </div>;
};
export default RTI;
