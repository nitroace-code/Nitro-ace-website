export function Team() {
  const leadership = [
    {
      name: "V Vishnu Vardhan  ",
      role: "Team Principal",
      major: "Mechanical Engineering",
      year: "Senior",
    },
    {
      name: "Rishi Chandra Kanneboina ",
      role: "Mechanical Tech Director",
      major: "Mechanical Engineering",
      year: "Senior",
    },
    {
      name: "Neckanti Kiran",
      role: "Business Manager",
      major: "Mechanical Engineering",
      year: "Senior",
    },
    {
      name: "D Surujan",
      role: "Senior Powertrain Engineer",
      major: "Mechanical Engineering",
      year: "Junior",
    },
    {
      name: "M Prashanth Raj",
      role: "Chassis Engineer",
      major: "Mechanical Engineering",
      year: "Junior",
    },
    {
      name: "B Rajkumar",
      role: "Chassis Engineer",
      major: "Mechanical Engineering",
      year: "Junior",
    },
    {
      name: "V Vishnu Vardhan",
      role: "Breaking Engineer",
      major: "Mechanical Engineering",
      year: "Junior",
    },
    {
      name: "Amul Rathod",
      role: "Battery Management Engineer",
      major: "Mechanical Engineering",
      year: "Junior",
    },
    {
      name: "P Rahul",
      role: "Senior Administrative Operator",
      major: "Artificial Intelligence and Machine Learning",
      year: "Junior",
    },
    {
      name: "Prem Kumar",
      role: "Senior Structual Engineer",
      major: "Civil Engineering",
      year: "Junior",
    },
    {
      name: "J Nohith Kumar",
      role: "Senior Structual Engineer",
      major: "Mechanical Engineering",
      year: "Senior",
    },
    {
      name: "A Nihaal Chowdary",
      role: "Junior Powertrain Operator",
      major: "Mechanical Engineering",
      year: "Sophomore",
    },
    {
      name: "Praful P Deshpande",
      role: "Junior Marketing Executive",
      major: "Mechanical Engineering",
      year: "Sophomore",
    },
    {
      name: "Vinay Datta",
      role: "Junior Breaking Engineer",
      major: "Mechanical Engineering",
      year: "Sophomore",
    },
    {
      name: "Jagruthi Reddy",
      role: "Junior Electrical Engineer",
      major: "Electrical and Electronics Engineering",
      year: "Sophomore",
    },
    {
      name: "Chris James Philip",
      role: "Junior powertrain Engineer",
      major: "Mechanical Engineering",
      year: "Freshman",
    },
    {
      name: "Harshith Kamtam",
      role: "Junior Chassis Engineer",
      major: "Mechanical Engineering",
      year: "Freshman",
    },
    {
      name: "Reeti Mukherjee",
      role: "Faculty Coordinator",
        },
    {
      name: "Y V Raghu Vamsi",
      role: "Exective Board Member",
        },
  ];

  const departments = [
    {
      name: "Powertrain",
      lead: "D Srujan",
      members: 4,
      description: " Transmission, and drivetrain systems",
    },
    {
      name: "Chassis & Suspension",
      lead: "B Rajkumar",
      members: 5,
      description: "Frame design, suspension geometry, and handling",
    },
    {
      name: "Aerodynamics",
      lead: "Manikanta",
      members: 4,
      description: "Wings, diffusers, and computational fluid dynamics",
    },
    {
      name: "Electronics",
      lead: "Manikanta",
      members: 3,
      description: "Data acquisition, telemetry, and control systems",
    },
    {
      name: "Manufacturing",
      lead: "Rishi Chandra",
      members: 10,
      description: "Fabrication, machining, and composite work",
    },
    {
      name: "Business & Marketing",
      lead: "N Kiran",
      members: 4,
      description: "Sponsorships, outreach, and team promotion",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white mb-6">Meet the Team</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A diverse group of passionate students working together to build the fastest racing cars on campus.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h2 className="text-3xl text-white mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-red-500 transition-colors"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-xl text-white text-center mb-1">{member.name}</h3>
                <p className="text-red-500 text-center mb-2">{member.role}</p>
                <p className="text-zinc-400 text-sm text-center">{member.major}</p>
                <p className="text-zinc-500 text-sm text-center">{member.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h2 className="text-3xl text-white mb-8 text-center">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-red-500 transition-colors"
              >
                <h3 className="text-2xl text-white mb-2">{dept.name}</h3>
                <p className="text-red-500 mb-2">Lead: {dept.lead}</p>
                <p className="text-zinc-400 mb-4">{dept.description}</p>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  {dept.members} members
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-12 text-center">
          <h2 className="text-3xl text-white mb-4">Interested in Joining?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            We welcome students from all majors and backgrounds. No prior experience necessary - just bring your passion and willingness to learn!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-zinc-100 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
