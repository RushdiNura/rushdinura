import aiFundamentals from '../assets/img/credentials/ai-fundamentals-udacity.webp';
import britishCouncil from '../assets/img/credentials/peace-education-british-council.webp';
import jitAppreciation from '../assets/img/credentials/jit-peace-forum.webp';
import peaceForum from '../assets/img/credentials/peace-forum.webp';
import gdsao from '../assets/img/credentials/gdsao-club.webp';
import studentsUnion from '../assets/img/credentials/grand-food-club.webp';
import studentCouncil from '../assets/img/credentials/student-council.webp';

// Entries without `scan` are listed on the CV but no scan is included in this project.
export const credentials = [
  { title: 'Artificial Intelligence Fundamentals Nanodegree', issuer: 'Udacity', date: '2025', scan: aiFundamentals },
  { title: 'Peace Education Training', issuer: 'British Council, Jimma University', date: '2023–24', scan: britishCouncil },
  { title: 'Fundamentals of Digital Marketing', issuer: 'Google' },
  { title: 'Seven e-SHE professional development certificates', issuer: 'Ministry of Education' },
  { title: 'Letter of recommendation', issuer: 'Software Engineering Program Coordinator, Jimma University' },
  { title: 'Core member, JiT Students’ Union', issuer: 'Certificate of appreciation', date: '2023–26', scan: studentsUnion },
  { title: 'Student Council representative', issuer: 'Certificate of appreciation, JiT', scan: studentCouncil },
  { title: 'Peace Forum core member', issuer: 'JiT Peace Forum', date: '2023–26', scan: peaceForum },
  { title: 'Certificate of appreciation', issuer: 'Jimma Institute of Technology', scan: jitAppreciation },
  { title: 'Member, GDSAO Club', issuer: 'Oromo culture and language club, Jimma University', date: '2025–26', scan: gdsao },
];
