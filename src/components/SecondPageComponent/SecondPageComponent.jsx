import { Link } from 'react-router-dom';
import s from './SecondPageComponent.module.scss';


const SecondPageComponent = () => {

  return (
    <section className={s.sectionSecondPageComponent}>
      <div className={'container ' + s.secondPageComponent__container}>
        <h1 className={s.SecondPageComponentTitle}>SecondPageComponent</h1>
        <Link className={s.header__linkBack} to="/">to MainPage</Link>
      </div>
    </section>
  )
};

export default SecondPageComponent;
