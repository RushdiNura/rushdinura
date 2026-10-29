import aiFundamentals from "../assets/img/credentials/ai-fundamentals-udacity.webp";
import britishCouncil from "../assets/img/credentials/peace-education-british-council.webp";
import jitAppreciation from "../assets/img/credentials/jit-peace-forum.webp";
import peaceForum from "../assets/img/credentials/peace-forum.webp";
import gdsao from "../assets/img/credentials/gdsao-club.webp";
import studentsUnion from "../assets/img/credentials/grand-food-club.webp";
import studentCouncil from "../assets/img/credentials/student-council.webp";
import quickfuel from "../assets/img/credentials/quickFuel3rd.webp";
import recommendation from "../assets/img/credentials/recommendation-letter.webp";
import esheOex100 from "../assets/img/credentials/Rushdi_e-SHE OEX100.webp";
import esheDs201 from "../assets/img/credentials/Rushdi_e-SHE DS201.webp";
import esheCe101 from "../assets/img/credentials/Rushdi_e-SHE CE101.webp";
import esheCe102 from "../assets/img/credentials/Rushdi_e-SHE CE102.webp";
import esheCe104 from "../assets/img/credentials/Rushdi_e-SHE CE104.webp";
import esheCe105 from "../assets/img/credentials/Rushdi_e-SHE CE105.webp";
import esheCe106 from "../assets/img/credentials/Rushdi_e-SHE CE106.webp";

// `scan` is one image; `scans` is a list of { label, src } for entries with several images.
// Entries with neither are listed on the CV but have no scan on the site.
export const credentials = [
  {
    title: "Artificial Intelligence Fundamentals Nanodegree",
    issuer: "Udacity",
    date: "2025",
    scan: aiFundamentals,
  },
  {
    title: "Outstanding Final Year Project, 3rd place",
    issuer:
      "Faculty of Computing and Informatics, Jimma University · QuickFuel",
    date: "June 2026",
    scan: quickfuel,
  },
  {
    title: "Peace Education Training",
    issuer: "British Council, Jimma University",
    date: "2023–24",
    scan: britishCouncil,
  },
  // { title: "Fundamentals of Digital Marketing", issuer: "Google" },
  {
    title: "Seven e-SHE professional development certificates",
    issuer: "Ministry of Education",
    scans: [
      { label: "OEX100", src: esheOex100 },
      { label: "DS201", src: esheDs201 },
      { label: "CE101", src: esheCe101 },
      { label: "CE102", src: esheCe102 },
      { label: "CE104", src: esheCe104 },
      { label: "CE105", src: esheCe105 },
      { label: "CE106", src: esheCe106 },
    ],
  },
  {
    title: "Letter of recommendation",
    issuer:
      "Alemisa Endebu (MSc), Software Engineering Program Coordinator, Jimma University",
    date: "June 2026",
    scan: recommendation,
  },
  {
    title: "Core member, JiT Students’ Union",
    issuer: "Certificate of appreciation",
    date: "2023–26",
    scan: studentsUnion,
  },
  {
    title: "Student Council representative",
    issuer: "Certificate of appreciation, JiT",
    scan: studentCouncil,
  },
  {
    title: "Peace Forum core member",
    issuer: "JiT Peace Forum",
    date: "2023–26",
    scan: peaceForum,
  },
  {
    title: "Certificate of appreciation",
    issuer: "Jimma Institute of Technology",
    scan: jitAppreciation,
  },
  {
    title: "Member, GDSAO Club",
    issuer: "Oromo culture and language club, Jimma University",
    date: "2025–26",
    scan: gdsao,
  },
];
