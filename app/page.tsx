/////////////// Component import ////////////////

import Product_list from "./components/Product_list";
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

export default async function Home() {

  return (
    <main>
      <h1>Hem</h1>
      <Product_list/>
    </main>
  );
}
