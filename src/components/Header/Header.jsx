import NavBar from 'components/NavBar/NavBar';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__padding}>
        <h1 className={s.header__title}>Logo</h1>
        <NavBar />
      </div>
    </header>
  )
};

export default Header;
