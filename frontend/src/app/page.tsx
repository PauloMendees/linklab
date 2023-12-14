import { BigPointLines } from '@/assets/icons/BigPointLines';
import './page.scss';
import { MadeWithScience } from '@/assets/brand/MadeWithScience';
import { MobileIntro } from '@/components/home/ MobileIntro';

export default function Home() {
  return (
    <main className="home-container">
      <BigPointLines className="big-point-lines" />
      <MadeWithScience className="made-with-sciente-desktop" />
      <MobileIntro />
    </main>
  );
}
