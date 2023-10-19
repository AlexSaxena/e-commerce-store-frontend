/////////////// Component import ////////////////

import Product_list from './components/Product_list';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';

export default async function Home() {
  return (
    <main>
      <Product_list />
    </main>
  );
}
