import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/asset/image/Logo.png"
import Espresso from "../../../public/asset/image/Espresso.png"
import IcedClassicChocalate from "../../../public/asset/image/IcedClassicChocolate.png"
import PourOver from "../../../public/asset/image/PourOver.png"
import SignatureChocolate from "../../../public/asset/image/SignatureChocolate.png"
export function products({items}) {
    return (
        <>
            <Head>
                <title>
                    Product
                </title>
            </Head>
            <div style={{background: "linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(250,225,230,1)) 50%, rgba(2245,245,245,1) 100%"}}
                className = "min-h-sceen justify-item-center p-20"
            >

            <div className="background justify-items-center p-5">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="transition-transform duration-300 transform hover:scale-105">
                <div className="mix-blend-multiply">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={250}
                        height={250}
                        className="w-[180px] h-[220px] object-cover"/>
                    <p className="text-center pt-5 font-semibold text-lg">{item.title}</p>
                    <p className="text-center pb-3 text-gray-600">{item.price}$ / {item.price * 32}฿</p>
                </div>
            </Link>


        ))}
    </div>
</div>
</div>
        </>
    );
}

export async function getServerSideProps(context) {
    const resp = await fetch("https://fakestoreapi.com/products");
    const items = await resp.json();
    return {
        props: { items },
    };
}
export default products
