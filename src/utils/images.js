import jobnest from '../assets/img/projects/jobnest.webp';
import hrReport from '../assets/img/projects/hr-report.webp';
import banking from '../assets/img/projects/banking.webp';
import nexuschat from '../assets/img/projects/nexuschat.webp';
import quickfuel from '../assets/img/projects/quickfuel.webp';
import jimmitti from '../assets/img/projects/jimmitti.webp';
import ecommerce from '../assets/img/projects/ecommerce.webp';
import aerlume from '../assets/img/projects/aerlume.webp';
import terra from '../assets/img/projects/terra.webp';
import meridian from '../assets/img/projects/meridian.webp';
import survey from '../assets/img/projects/survey.webp';
import lms from '../assets/img/projects/lms.webp';
import gym from '../assets/img/projects/gym.webp';
import servicePortal from '../assets/img/projects/service-portal.webp';

// Screenshots are 1350–1366 px wide; the height varies slightly, so callers
// reserve space with CSS aspect-ratio rather than relying on intrinsic size.
const projectImages = {
  jobnest,
  'hr-report': hrReport,
  jimmitti,
  quickfuel,
  banking,
  nexuschat,
  ecommerce,
  aerlume,
  terra,
  meridian,
  survey,
  lms,
  gym,
  'service-portal': servicePortal,
};

export function getProjectImage(key) {
  return projectImages[key] || null;
}
