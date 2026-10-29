import jobnestImage from '../assets/projects/jobnest-preview.png';
import hrReportImage from '../assets/projects/hr-report-preview.png';
import jimmittiImage from '../assets/projects/jimmitti-preview.png';
import ecommerceImage from '../assets/projects/ecommerce-techzone.webp';
import quickfuelImage from '../assets/projects/quickfuel-preview.webp';
import securebankImage from '../assets/projects/securebank-preview.webp';
import nexuschatImage from '../assets/projects/nexuschat-preview.webp';
import aerlumeImage from '../assets/projects/Aerlume-Travel-considered (2).png';
import terraImage from '../assets/projects/real-estate-preview.png';
import hospitalImage from '../assets/projects/hospital-preview.png';
import surveyImage from '../assets/projects/Survey-Builder.png';
import lmsImage from '../assets/projects/lms-preview.png';
import gymImage from '../assets/projects/gym-preview.png';
import servicePortalImage from '../assets/projects/Service-Portal (1).png';

const projectImages = {
  jobnest: jobnestImage,
  'hr-report': hrReportImage,
  jimmitti: jimmittiImage,
  'ecommerce-platform': ecommerceImage,
  'Aerlume-Travel-considered (2)': aerlumeImage,
  'real-estate-terra (1)': terraImage,
  'Meridian-Health-Hospital-Management-Platform': hospitalImage,
  'Survey-Builder': surveyImage,
  'LMS-Platform-Learn-Without-Limits(1)': lmsImage,
  gym: gymImage,
  quickfuel: quickfuelImage,
  securebank: securebankImage,
  nexuschat: nexuschatImage,
  'Service-Portal (1)': servicePortalImage,
};

const certificateImages = import.meta.glob('/src/assets/certificates/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

function filenameOf(path) {
  return path.split('/').pop().replace(/\.[^/.]+$/, '');
}

export function getProjectImage(filename) {
  return filename ? projectImages[filename] || null : null;
}

const certificateTitles = {
  'AI Fundamentals Udacity': 'AI Fundamentals · Udacity',
  'British Counsil': 'Peace Education Training · British Council',
  'Grand Food Club': 'Grand Food Club',
  'JIT Peace Forum': 'JIT Peace Forum',
  'Student Council Representative': 'Student Council Representative',
  'gdsao Club': 'GDSAO Club',
  'peace-forum': 'Peace Forum',
  'Grade 10 Straight A': 'Grade 10 · Straight A',
  'Prosperity party': 'Certificate of Participation',
  letter: 'Letter of Recommendation',
};

export function getCertificateImages() {
  return Object.entries(certificateImages)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => {
      const filename = filenameOf(path);
      return {
        src,
        title: certificateTitles[filename] || filename.replace(/[-_]/g, ' '),
      };
    });
}
