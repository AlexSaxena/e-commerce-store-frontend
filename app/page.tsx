import prisma from "./utils/connectdb";
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <main>
      <h1>Hem</h1>
      <h2 className="font-bold">Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </main>
  );
}
