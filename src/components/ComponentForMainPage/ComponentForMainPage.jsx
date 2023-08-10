import { Link } from 'react-router-dom';
import s from './ComponentForMainPage.module.scss';


const ComponentForMainPage = () => {

  return (
    <section className={s.sectionComponentForMainPage}>
      <div className={'container ' + s.componentForMainPage__container}>
        <h1 className={s.ComponentForMainPageTitle}>ComponentForMainPage</h1>
        <Link className={s.header__linkBack} to="/SecondPage">to SecondPage</Link>
      </div>
    </section>
  )
};

export default ComponentForMainPage;
