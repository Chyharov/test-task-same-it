import { Link } from 'react-router-dom';
import s from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <button className={s.button__nav} type='button' aria-label='go to home page'><Link to="/">Перевірити ТТН</Link></button>
            <button className={s.button__nav} type='button' aria-label='go to nova poshta page'><Link to="/DepartmentsList">Список відділень</Link></button>
        </nav>
  )
};

export default NavBar;
