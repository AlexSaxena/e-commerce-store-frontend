import Link from "next/link";
import Image from "next/image"
import prisma from "../utils/connectdb";

export default async function Product_list() {

    const products = await prisma.product.findMany();

  return (
    <div>
        <div className="flex flex-wrap justify-around text-center">
            {products.map((product) => (
                <div key={product.id} className="flex basis-1/4 flex-col items-center justify-center hover:border-purple-800 border-solid border-2 rounded">     
                    <Link href="/" className="">
                        <Image 
                            src={product.image}
                            width={300}
                            height={300}
                            alt={product.description}
                            className="mt-4"    
                        />
                        <h2 className="text-black dark:text-slate-500 text-2xl">{product.name}</h2>
                        <p className=" mx-4 text-black dark:text-slate-500">{product.description}</p>
                        <p className="text-black dark:text-slate-500 mt-2 text-3xl">{product.price.toNumber()} kr</p>
                        </Link>
                        <button className="w-28 mb-4 mt-2 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">Köp</button>
                    </div>                
            ))}
        </div>
    </div>
  )

}
