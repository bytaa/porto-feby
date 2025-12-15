import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/Proyek1.webp";
import Proyek2 from "/assets/proyek/Proyek2.webp";
import Proyek3 from "/assets/proyek/Proyek3.webp";
import Proyek4 from "/assets/proyek/Proyek4.webp";
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "PEMIRA VI PKU IPB University",
    desk: "This website serves as a platform to provide information and easy access to PEMIRA (Student General Election) PKU, held to elect the President and Vice President of the PKU IPB Executive Student Organization for the 2025/2026 term.",
    tools: ["HTML", "CSS"],
    link: "https://bytaa.github.io/pemira-vi-pku",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Zeta ChatBot WA",
    desk: "This chatbot responds to basic commands, sends automatic replies for specific keywords, and provides AI-powered answers to user questions.",
    tools: ["JS", "AI Scraping"],
    link: "https://github.com/bytaa/zeta-chatbot",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Personal Web Porto",
    desk: "A personal portfolio website featuring an about section, tools I use, and selected projects I’ve worked on.",
    tools: ["Vite", "ReactJS", "Tailwind CSS"],
    link: "https://porto-feby.vercel.app",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Simple Calculator",
    desk: "This digital calculator, developed using pure HTML, CSS, and JavaScript to perform basic arithmetic operations (+, -, *, /, %) with a clean UI, serves as a portfolio project demonstrating Web Development and programming logic skills for the Research and Development (R&D) Division of Ormawa Eksekutif PKU.",
    tools: ["HTML", "CSS", "JS"],
    link: "https://bytaa.github.io/calcu-risbang",
    dad: "400",
  },
];
