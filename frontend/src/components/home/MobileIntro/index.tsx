import { BigPointLines } from '@/assets/icons/BigPointLines';
import './styles.scss';

export const MobileIntro = () => {
  return (
    <section className="mobile-intro-container">
      <h2 className="mobile-intro-title">
        Qualidade e expertise em produtos <b>químicos e acessórios</b>
      </h2>
      <p className="mobile-intro-subtitle">
        Estamos preparados para te entender e atender da melhor forma para suprir todas as suas
        demandas em químicos e similares.
      </p>
      <aside className="point-lines-mobile-container">
        <BigPointLines className="point-lines-mobile" />
      </aside>
    </section>
  );
};
