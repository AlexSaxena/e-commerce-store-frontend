/////////////// Component import ////////////////

import Product_list from './components/Product_list';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import Billboard from './components/billboard';
import getBillboard from './actions/get-billboard';

import Billboardcheck from './components/billboardcheck';

export default async function Home() {
  
  return (
    <main>
      <div>
        <Billboardcheck />
        <Product_list />
      </div>
    </main>
  );
}
