 import React from "react";
import { motion } from "framer-motion";
 const staffData = [
  {
    department: "Electronics and Communication Engineering",
    short: "ECE",
    members: [
      {
        name: "Mr. Ravindra Kumar",
        designation: "Technical Superintendent",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/ravindra.jpg",
      },
      {
        name: "Mr. Anmol Nagar",
        designation: "Technical Superintendent",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/anmol.jpg",
      },
      {
        name: "Mr. Himanshu Saini",
        designation: "Technical Superintendent",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/himanshu.jpg",
      },
      {
        name: "Mr. Amit Kumar",
        designation: "Lab Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/amit.jpg",
      },
      {
        name: "Mr. Chanderpal",
        designation: "Lab Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/chanderpal.jpg",
      },
      {
        name: "Mrs. Rajni Saini",
        designation: "Lab Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/rajni.jpg",
      },
      {
        name: "Mr. Amar Singh",
        designation: "Lab Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/amar.jpg",
      },
    ],
  },
  {
    department: "Computer Science and Engineering",
    short: "CSE",
    members: [
      {
        name: "Mr. Sanjeev Kumar",
        designation: "Technical Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/sanjeev.jpg",
      },
      {
        name: "Mrs. Sunita",
        designation: "Technical Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/sunita.jpg",
      },
      {
        name: "Mr. Nitin",
        designation: "Lab Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/nitin.jpg",
      },
      {
        name: "Mrs. Kirti Chaudhary",
        designation: "Lab Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/kirti.jpg",
      },
      {
        name: "Mr. Rahul Kumar",
        designation: "Lab Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/rahul.jpg",
      },
      {
        name: "Mr. Arjit Kumar",
        designation: "Lab Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/arjit.jpg",
      },
    ],
  },
  {
    department: "Administration",
    short: "Admin",
    members: [
      {
        name: "Mr. Shameem Raza",
        designation: "Executive Assistant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/shameem.jpg",
      },
      {
        name: "Mr. Shailendra Kumar",
        designation: "Attendant",
        phone: "Coming Soon",
        email: "Coming Soon",
        image: "/staff/shailendra.jpg",
      },
    ],
  },
];
export default function StaffMembers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
            Staff Members | USICT
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Departments */}
        <div className="space-y-16">
          {staffData.map((dept, deptIndex) => (
            <div
              key={deptIndex}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100 overflow-hidden backdrop-blur-sm"
              style={{
                animation: `fadeInUp 0.8s ease-out ${deptIndex * 0.2}s both`,
              }}
            >
              {/* Department Header */}
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 p-6 rounded-xl mb-6 relative overflow-hidden">
                <h2 className="text-2xl text-center font-bold text-white relative z-10">
                  {dept.department}
                </h2>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {/* Member Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {dept.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-blue-300 hover:border-blue-500 transition-all duration-300 hover:shadow-md shadow-xl transform hover:-translate-y-2 flex flex-col"
                    style={{
                      animation: `slideInLeft 0.6s ease-out ${
                        deptIndex * 0.2 + memberIndex * 0.1
                      }s both`,
                    }}
                  >
                    {/* Photo */}
                    <div className="p-4 flex flex-col items-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
                      />
                      <h3 className="font-bold text-gray-800 text-lg text-center">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm text-center mb-2">
                        {member.designation}
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="border-t border-gray-200 p-4 space-y-2 mt-auto">
                      <div className="flex items-center text-sm text-gray-700">
                        <svg
                          className="w-4 h-4 text-blue-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="font-mono text-xs">
                          {member.phone}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <svg
                          className="w-4 h-4 text-blue-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-mono text-xs text-blue-700 hover:text-blue-900 cursor-pointer">
                          {member.email}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
