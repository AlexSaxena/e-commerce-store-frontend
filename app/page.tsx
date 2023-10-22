/////////////// Component import ////////////////

import Product_list from './components/Product_list';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import Billboard from './components/billboard';
import getBillboard from './actions/get-billboard';

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard("e8e3cf67-a3f5-4010-85f8-bad5ab931eb7");
  return (
    <main>
      <div>
      <Billboard data={billboard}/>
      <Product_list />
      </div>
    </main>
  );
}
