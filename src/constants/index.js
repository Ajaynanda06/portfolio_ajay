import project1 from "../assets/projects/project-1.jpg";
import p2 from "../assets/projects/p2.png";
import p4 from "../assets/projects/p4.png";
import bms  from "../assets/projects/bms.jpg";

export const HERO_CONTENT = "I'm an Electrical and Electronics Engineering graduate with hands-on experience in Embedded Systems, Electric Vehicle Technology, Battery Management Systems, and more. With a commitment to continuous learning, I've pursued advanced training in embedded systems and contributed to various innovative projects, paper presentations, and team endeavors. My aim is to drive impactful solutions that bridge theory with real-world applications.";

export const ABOUT_TEXT = "I am an Electrical and Electronics Engineering graduate with practical experience in Embedded Systems, Electric Vehicle Technology, and Battery Management Systems. My journey in engineering has been driven by a commitment to continuous learning and innovation. I have actively contributed to various projects and presentations, bridging theoretical concepts with real-world applications. Proficient in C/C++ programming, real-time systems, and integration of embedded hardware and software. Experienced in battery management systems, powertrain design, and system optimization. Skilled in MATLAB, Python, and simulation tools for modeling and testing engineering solutions. Strong ability to work in teams to achieve project goals and drive innovative solutions. My aim is to leverage my skills and knowledge to create impactful technological solutions that advance the field of electrical engineering and contribute to sustainable practices in electric mobility.";

export const EXPERIENCES = [
  {
    year: "DEC 2023 - DEC 2024",
    role: "INTERN",
    company: "BIST Technologies Private Limited",
    description: `Gained hands-on experience in Electric Vehicle (EV) design, focusing on Battery Management Systems (BMS), powertrain optimization, and embedded system integration. Collaborated on BMS development to enhance battery efficiency and safety, contributed to testing powertrain components, and resolved technical challenges to ensure EV reliability and performance. This experience deepened my expertise in EV technology and embedded systems.











`,
    technologies: ["EV DESIGN", "Battery Management Systems (BMS) Software:", "Testing and Diagnostics",],
  },
 
{ year: "JUNE 2020 - DEC 2020",
  role: "Diploma trainee",
  company: "GOWTHAMI SOLVENT OILS LIMITED",
  description: `I worked as a trainee and learned how an industry works ,gained practical experience of elecrical maintanance and protection `,
  technologies: ["electrical maintanance", "power management", "control panel",],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],

];

export const PROJECTS = [
  {
    title: " Battery Management System (BMS) for Electric Vehicles ",
    image: bms,
    description:
      "Completed a long-term internship in EV design, where I focused on developing BMS solutions, optimizing powertrain components, and integrating embedded systems for enhanced performance.",
    technologies: ["ev design", "BMS software","","Testing and Diagnostics",],
  },
  {
    title: "REDUCTION OF IMBALANCE COST IN WIND-PV-EV-FUEL CELL INTEGRATED SYSTEM BY OPTIMAL POWER SYSTEM SCHEDULING",
    image:p2,
    description:
      "The increasing reliance on renewable energy sources, particularly wind and photovoltaic (PV) systems, poses challenges of variability and uncertainty for power system operators. This study proposes a dual-focused strategy to enhance the profitability and stability of the power system by integrating electric vehicles (EVs) into the grid infrastructure. This integration aids in balancing supply and demand while creating new revenue streams through demand response programs and vehicle-to-grid (V2G) services. Additionally, fuel cells are introduced as a complementary technology to improve system flexibility, providing reliable power to mitigate grid imbalances from intermittent renewables. The proposed integrated system dynamically schedules renewable energy generation, EV charging/discharging, and fuel cell operation to minimize imbalance costs and maximize economic returns.",
    technologies: ["machine learning", "optimal power", "matlab", "ev","renewable energy"],
  },
  {
    title: "DESIGN AND IMPLEMENTATION OF 60 VDC PMSM DRIVE",
    image:p4,
    description:
      "The project focused on the design and implementation of a 60 VDC Permanent Magnet Synchronous Motor (PMSM) drive system aimed at enhancing efficiency and performance in electric propulsion applications. It involved selecting an appropriate PMSM, developing a field-oriented control (FOC) strategy for precise torque and speed management, and integrating a power converter circuit for efficient DC voltage conversion. Rigorous testing was conducted to validate system performance under various load conditions, contributing to advancements in electric vehicle technology and high-performance motor control.",
    technologies: ["React", "TailwindCSS","Framer Motion"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "vijayawada,Andhra Pradesh,India",
  phoneNo: "+91 9666572895",
  email: "polavarapuajay1@gmail.com",
};
