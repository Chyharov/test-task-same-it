import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';



const SecondPage = () => {
  return (
    <>
        <Header />
    <main>
        <h1>Second Page</h1>
        <Link to="/">to MainPage</Link>
    </main>
    </>
  );
};



export default SecondPage;