// TypeScript interfaces removed for JS compatibility
 import tcclogo from "../../../assets/tcclogo.png";
 import musiclogo from "../../../assets/musiclogo.png";
export const clubsData = [
  {
    id: 'tech-innovators',
    name: 'Tech Innovators Club',
    tagline: "Building Tomorrow's Technology Today",
    category: 'Technical',
    logo: tcclogo,
    banner: 'https://www.gbu.ac.in/Content/img/club/techno.jpg',
    memberCount: 156,
    description: 'A vibrant community of tech enthusiasts dedicated to exploring cutting-edge technologies, fostering innovation, and building solutions that matter. We bridge the gap between academic learning and real-world application.',
    objectives: [
      'Foster innovation and creativity in technology',
      'Provide hands-on experience with latest tech stacks',
      'Create networking opportunities with industry professionals',
      'Develop leadership and project management skills'
    ],
    history: 'Founded in 2019, Tech Innovators Club has grown from a small group of coding enthusiasts to one of the most active technical communities on campus. Our journey began with weekly coding sessions and has evolved into organizing hackathons, tech talks, and industry collaborations.',
    achievements: [
      'Winner of Inter-University Hackathon 2023',
      'Organized 15+ workshops with industry experts',
      '3 startup ideas incubated through club initiatives',
      'Placed 50+ members in tech internships'
    ],
    policies: {
      codeOfConduct: [
        'Respect all members regardless of skill level',
        'Contribute positively to club activities',
        'Maintain confidentiality of sensitive project information',
        'Follow ethical coding and development practices'
      ],
      eligibility: [
        'Open to all students regardless of branch',
        'Basic programming knowledge preferred',
        'Enthusiasm to learn and collaborate',
        'Commitment to attend regular meetings'
      ],
      responsibilities: [
        'President: Overall club leadership and strategic planning',
        'Vice-President: Event coordination and member engagement',
        'Secretary: Documentation and communication management',
        'Treasurer: Budget management and financial planning'
      ],
      meetingFrequency: 'Weekly meetings every Friday at 5:00 PM in Tech Lab'
    },
    team: {
      facultyCoordinator: {
        id: 'fc1',
        name: 'Dr. Priya Sharma',
        role: 'Faculty Coordinator',
        photo: '/placeholder.svg',
        department: 'Computer Science & Engineering'
      },
      president: {
        id: 'p1',
        name: 'Rahul Kumar',
        role: 'President',
        photo: '/placeholder.svg',
        department: 'CSE, 4th Year'
      },
      vicePresident: {
        id: 'vp1',
        name: 'Ananya Singh',
        role: 'Vice President',
        photo: '/placeholder.svg',
        department: 'IT, 3rd Year'
      },
      secretary: {
        id: 's1',
        name: 'Arjun Patel',
        role: 'Secretary',
        photo: '/placeholder.svg',
        department: 'CSE, 3rd Year'
      },
      treasurer: {
        id: 't1',
        name: 'Sneha Gupta',
        role: 'Treasurer',
        photo: '/placeholder.svg',
        department: 'IT, 2nd Year'
      },
      members: [
        {
          id: 'm1',
          name: 'Vikash Yadav',
          role: 'Technical Lead',
          photo: '/placeholder.svg',
          department: 'CSE, 4th Year'
        },
        {
          id: 'm2',
          name: 'Priyanka Joshi',
          role: 'Event Coordinator',
          photo: '/placeholder.svg',
          department: 'IT, 3rd Year'
        }
      ]
    },
    events: [
      {
        id: 'e1',
        title: 'AI/ML Workshop Series',
        date: '2024-01-15',
        description: 'Comprehensive workshop covering machine learning fundamentals and practical applications',
        image: '/placeholder.svg',
        type: 'workshop',
        registrationLink: '#'
      },
      {
        id: 'e2',
        title: 'CodeFest 2024',
        date: '2024-02-20',
        description: 'Annual coding competition with prizes worth ₹50,000',
        image: '/placeholder.svg',
        type: 'competition',
        registrationLink: '#'
      }
    ],
    socialMedia: {
      instagram: 'https://instagram.com/techinnovators_gbu',
      linkedin: 'https://linkedin.com/company/techinnovators-gbu',
      youtube: 'https://youtube.com/techinnovatorsgbu'
    },
    reports: [
      {
        id: 'r1',
        title: 'Annual Report 2023-24',
        year: '2023-24',
        downloadUrl: '#',
        summary: 'Comprehensive overview of club activities, achievements, and financial summary for the academic year 2023-24'
      },
      {
        id: 'r2',
        title: 'Annual Report 2022-23',
        year: '2022-23',
        downloadUrl: '#',
        summary: 'Complete documentation of club initiatives and member achievements for 2022-23'
      }
    ],
    joinFormUrl: 'https://forms.google.com/techinnovators'
  },
  {
    id: 'cultural-society',
    name: 'Cultural Society',
    tagline: 'Celebrating Art, Music, and Heritage',
    category: 'Cultural',
    logo: musiclogo,
    banner: 'https://www.gbu.ac.in/Content/img/indexpageimg.jpg',
    memberCount: 203,
    description: 'A vibrant platform for artistic expression, cultural preservation, and creative collaboration. We celebrate diversity through music, dance, drama, literature, and visual arts.',
    objectives: [
      'Promote cultural awareness and appreciation',
      'Provide platform for artistic expression',
      'Organize cultural events and festivals',
      'Preserve and showcase traditional arts'
    ],
    history: 'Established in 2018, Cultural Society has been the heartbeat of artistic activities on campus. From humble poetry readings to grand cultural festivals, we have created countless memories and nurtured artistic talents.',
    achievements: [
      'Organized the largest cultural fest in university history',
      'Won Best Cultural Club award for 3 consecutive years',
      'Collaborated with renowned artists and performers',
      'Raised ₹2,00,000 for charity through cultural programs'
    ],
    policies: {
      codeOfConduct: [
        'Respect all forms of artistic expression',
        'Maintain punctuality for rehearsals and events',
        'Support fellow artists and performers',
        'Uphold the cultural values of the institution'
      ],
      eligibility: [
        'Open to students from all academic programs',
        'Passion for arts and culture required',
        'No prior experience necessary',
        'Willingness to participate in events'
      ],
      responsibilities: [
        'President: Overall leadership and event planning',
        'Vice-President: Artist coordination and performance management',
        'Secretary: Documentation and member communication',
        'Treasurer: Budget allocation and expense management'
      ],
      meetingFrequency: 'Bi-weekly meetings every alternate Tuesday at 4:00 PM in Arts Hall'
    },
    team: {
      facultyCoordinator: {
        id: 'fc2',
        name: 'Prof. Kavita Mehta',
        role: 'Faculty Coordinator',
        photo: '/placeholder.svg',
        department: 'Fine Arts & Literature'
      },
      president: {
        id: 'p2',
        name: 'Aditya Raj',
        role: 'President',
        photo: '/placeholder.svg',
        department: 'English, 4th Year'
      },
      vicePresident: {
        id: 'vp2',
        name: 'Meera Kapoor',
        role: 'Vice President',
        photo: '/placeholder.svg',
        department: 'Music, 3rd Year'
      },
      secretary: {
        id: 's2',
        name: 'Rohan Verma',
        role: 'Secretary',
        photo: '/placeholder.svg',
        department: 'Drama, 2nd Year'
      },
      treasurer: {
        id: 't2',
        name: 'Ishita Sharma',
        role: 'Treasurer',
        photo: '/placeholder.svg',
        department: 'Fine Arts, 3rd Year'
      },
      members: [
        {
          id: 'm3',
          name: 'Karan Singh',
          role: 'Music Director',
          photo: '/placeholder.svg',
          department: 'Music, 4th Year'
        },
        {
          id: 'm4',
          name: 'Nisha Patel',
          role: 'Dance Coordinator',
          photo: '/placeholder.svg',
          department: 'Dance, 2nd Year'
        }
      ]
    },
    events: [
      {
        id: 'e3',
        title: 'Spring Cultural Festival',
        date: '2024-03-15',
        description: 'Annual cultural extravaganza featuring music, dance, drama, and art exhibitions',
        image: '/placeholder.svg',
        type: 'cultural',
        registrationLink: '#'
      },
      {
        id: 'e4',
        title: 'Poetry Evening',
        date: '2024-01-30',
        description: 'An intimate evening of poetry recitation and spoken word performances',
        image: '/placeholder.svg',
        type: 'cultural'
      }
    ],
    socialMedia: {
      instagram: 'https://instagram.com/cultural_society_gbu',
      youtube: 'https://youtube.com/culturalsocietygbu'
    },
    reports: [
      {
        id: 'r3',
        title: 'Cultural Activities Report 2023-24',
        year: '2023-24',
        downloadUrl: '#',
        summary: 'Detailed account of all cultural programs, artist collaborations, and community engagement activities'
      }
    ],
    joinFormUrl: 'https://forms.google.com/culturalsociety'
  }
];
