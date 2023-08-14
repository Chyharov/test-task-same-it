import { Link } from 'react-router-dom';
import s from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <Link to="/">Перевірити ТТН</Link>
            <Link to="/DepartmentsList">Список відділень</Link>
        </nav>
  )
};

export default NavBar;
