import { Link } from 'react-router-dom';
import s from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <button type='button'><Link to="/">Перевірити ТТН</Link></button>
            <button type='button'><Link to="/DepartmentsList">Список відділень</Link></button>
        </nav>
  )
};

export default NavBar;
