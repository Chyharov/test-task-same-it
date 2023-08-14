import { Link } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import s from './Header.module.scss';
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__padding}>
        <Link className={s.logo} to="/">
          <img className={s.logo__img} loading="lazy" src={logo} alt="header__logo" />
        </Link>
        <NavBar />
      </div>
    </header>
  )
};

export default Header;
