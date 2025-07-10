
const HodMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            From the Desk of HOD, CSE
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 shadow-xl">
                <img
                  src="https://www.gbu.ac.in/USICT/media/img/Arun%20Solanki.jpeg"
                  alt="Dr. Arun Solanki - Head of Department"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground">Dr. Arun Solanki</h3>
              <p className="text-blue-600 font-medium">Head of Department</p>
            </div>

            <div className="md:col-span-2 space-y-4 text-muted-foreground bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <p className="text-lg leading-relaxed">
                Greetings!
              </p>
             
              <p className="text-lg leading-relaxed">
                Welcome to the Department of Computer Science and Engineering! The field of Computer Science and Engineering (CSE) has consistently been at the forefront of innovation, transforming the landscape of nearly every discipline by providing computing as a foundational tool for inquiry and discovery. From artificial intelligence applications, intelligent game design, and smart robots to cloud computing, big data analytics, cybersecurity, and social networks, our department offers students the opportunity to explore and excel in exciting, intellectually stimulating, and fast-growing career fields.
              </p>

              <p className="leading-relaxed">
                We take immense pride in our Teaching-Learning process, which is the cornerstone of our commitment to providing a high-quality technical education. Our department employs innovative teaching aids and methodologies to continuously enhance student learning and outcomes. This commitment is reflected in our consistently excellent academic results over the years.
              </p>

              <p className="leading-relaxed">
                To foster continuous growth and development, we regularly organize Student Development Programs, Short-Term Training Programs, Conferences, Seminars, Webinars, Workshops, and Expert Lecture Series aimed at enhancing both the technical and professional skills of our students. Furthermore, our Faculty Development Programs ensure that our educators remain at the cutting edge of their fields, promoting high standards in technical education.
              </p>

              <p className="leading-relaxed">
                At the Department of Computer Science and Engineering, we strive to create an environment that encourages learning, exploration, and innovation. We look forward to collaborating with students, faculty, industry partners, and stakeholders to create a successful and fulfilling experience for all.
              </p>

              
              <p className="leading-relaxed">
                If you have any questions or require further assistance, please feel free to reach out. We are here to support you on your journey.
              </p>

               <p className="leading-relaxed">
                If you have any questions or require further assistance, please feel free to reach out. We are here to support you on your journey.
               </p>

               <p className="leading-relaxed">
                Dr. Arun Solanki
                Head, Department of Computer Science and Engineering
               </p>

               <p className="leading-relaxed">
                Email: arunk@gbu.ac.in
                Phone: 0120-2346080 (Ext.6080)
               </p>

              <div className="pt-4">
                <p className="font-semibold text-foreground">Dr. Arun Solanki</p>
                <p className="text-sm">Head of Department - CSE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;
