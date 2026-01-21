import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { useRef, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const name = "Bijay Kumar Bhanja";

const projects = [
  {
    title:"Electrical & Maintenance Manager ",
    company:"Meld Haus | Nagole, Hyderabad, Telangana",
    period:"29th April 2025 - Present",
    details: [
      "Oversee the entire facility's electrical infrastructure, ensuring 100% operational availability of power systems, lighting, and critical machinery." ,
      "Lead the maintenance department in executing preventive and predictive maintenance schedules, significantly reducing equipment downtime and repair costs." ,
      "Manage a team of technicians and supervisors, enforcing strict safety protocols and compliance with industrial electrical standards.",
      "Coordinate with vendors and internal teams to troubleshoot complex electrical faults in HT/LT systems and ensure seamless power backup operations."
    ]
  },
  {
    title: "Senior Maintenance Engineer",
    company: "Brewster Kitchen and Garden, Gowlidoddy",
    period: "Mar 2023 – Mar 2025",
    details: [
      "Performed preventive maintenance, reducing breakdowns by 30%.",
      "Conducted safety inspections and equipment audits.",
      "Diagnosed electrical issues and implemented long-term solutions."
    ]
  },
  {
    title: "Site Supervisor",
    company: "R.K Enterprises (SAIL – Silicon Steel Mill)",
    period: "Mar 2022 – Apr 2022",
    details: [
      "Supervised site electrical works ensuring timely project delivery.",
      "Enforced site safety standards in compliance with industrial norms."
    ]
  },
  {
    title: "Junior Engineer – Electrical",
    company: "Rungta Mines Ltd (Kamanda Steel Plant)",
    period: "Jul 2007 – Apr 2020",
    details: [
      "Handled installation and maintenance of HT/LT systems.",
      "Worked with transformers, MCC panels, and DG sets."
    ]
  },
  {
    title: "Electrical Site Supervisor & Safety Officer",
    company: "SIEMENS – Indal CPP Expansion",
    period: "Jun 2004 – Jan 2006",
    details: [
      "Ensured compliance with electrical and safety regulations.",
      "Conducted safety training sessions for ground teams."
    ]
  },
  {
    title: "Supervisor – Electrical Projects",
    company: "Unique Engineers – Indal Hirakud CPP",
    period: "May 2000 – Mar 2004",
    details: [
      "Oversaw electrical installation and commissioning.",
      "Maintained quality assurance and safety documentation."
    ]
  },
  {
    title: "Electrical Engineer – Project Execution",
    company: "BHEL – Multiple Sites",
    period: "Mar 1992 – Apr 2000",
    details: [
      "Involved in major project execution for RSP (SAIL), WBSEB, and Indal.",
      "Coordinated with civil and mechanical teams for project integration."
    ]
  }
];

const skills = [
  "Electrical Wiring",
  "Motor Control",
  "Induction Motor Troubleshooting",
  "Switchgear Maintenance",
  "Transformer Installation",
  "Star-Delta Starters",
  "Motor Winding",
  "Preventive Maintenance",
  "Predictive Maintenance",
  "Project Execution",
  "Site Supervision",
  "Safety Compliance",
  "Team Leadership",
  "Technical Documentation",
];

const skillLevels = skills.reduce((acc, skill, idx) => {
  acc[skill] = 70 + (idx % 4) * 5;
  return acc;
}, {});

const SkillSphere = ({ skill, position }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.003;
    ref.current.rotation.x += 0.003;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.9, 32, 32]} />
      <meshStandardMaterial color="#0ea5e9" emissive="#2563eb" emissiveIntensity={0.6} />
      <Html center>
        <div className="w-24 h-24">
          <CircularProgressbar
            value={skillLevels[skill] || 70}
            text={skill.split(" ")[0]}
            styles={buildStyles({
              textSize: "18px",
              pathColor: "#facc15",
              textColor: "#fff",
              trailColor: "#1f2937",
            })}
          />
        </div>
      </Html>
    </mesh>
  );
};

const Hero = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-500 text-white py-24 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-yellow-300 font-extrabold drop-shadow-2xl">
            👋 Hi, I’m {name}
          </h1>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            An <span className="text-yellow-300 font-semibold">Electrical Engineer</span> with over <strong>29 years</strong> of experience.<br />
            Specialized in industrial maintenance, motor control, transformer maintenance, safety compliance & team leadership.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 text-left shadow-xl hover:shadow-yellow-400/20 transition">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-1">{proj.title}</h3>
                <p className="text-sm text-lime-400 italic">{proj.company}</p>
                <p className="text-sm text-white-200 mb-3">{proj.period}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                  {proj.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24 px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">⚙️ My Core Electrical Skills</h2>
        <div className="h-[600px] w-full">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars radius={150} depth={80} count={10000} factor={6} fade speed={1.5} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            <Suspense fallback={null}>
              <group>
                {skills.map((skill, index) => {
                  const angle = (index / skills.length) * Math.PI * 2;
                  const x = Math.cos(angle) * 5;
                  const y = Math.sin(angle) * 3;
                  return <SkillSphere key={index} skill={skill} position={[x, y, 0]} />;
                })}
              </group>
            </Suspense>
          </Canvas>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => {
              const utterance = new SpeechSynthesisUtterance(
                "Explore my professional skills in electrical wiring, motor control, transformer installation, and industrial maintenance."
              );
              speechSynthesis.speak(utterance);
            }}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
          >
            🔌 Activate jarvis
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hero;
