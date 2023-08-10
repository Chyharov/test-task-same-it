import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__padding}>

        <h1 className={s.header__title}>Header</h1>
        
      </div>
    </header>
  )
};

export default Header;
