import AOS from 'aos';
import 'aos/dist/aos.css';

export const initializeAOS = () => {
  AOS.init({ duration: 2000, once: true });
};
