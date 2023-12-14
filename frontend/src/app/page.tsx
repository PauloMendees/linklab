import { BigPointLines } from '@/assets/icons/BigPointLines';
import './page.scss';
import { MadeWithScience } from '@/assets/brand/MadeWithScience';
import { MobileIntro } from '@/components/home/MobileIntro';
import { CategoryCard } from '@/components/home/CategoryCard';
import { Glass } from '@/assets/icons/Glass';
import { Bottles } from '@/assets/icons/Bottles';
import { Frasks } from '@/assets/icons/Frasks';

export default function Home() {
  return (
    <main className="home-container">
      <BigPointLines className="big-point-lines" />
      <MadeWithScience className="made-with-sciente-desktop" />
      <MobileIntro />
      <div className="category-cards-container">
        <CategoryCard
          category="PRODUTO"
          icon={<Glass color="currentColor" width="32" height="32" />}
          label="Vidrarias e Equipamentos"
        />
        <CategoryCard accent category="QUÍMICOS" icon={<Bottles />} label="Materiais Químicos" />
        <CategoryCard
          blackLines
          category="Laboratórios"
          icon={<Frasks width="32" height="32" />}
          label="Ferramentas e utensílios"
        />
      </div>
    </main>
  );
}
