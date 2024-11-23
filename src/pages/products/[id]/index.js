import Head from 'next/head';
import products from '../index';
import Image from 'next/image';
import Link from 'next/link';
import {IoMdArrowRoundBack} from "react-icons/io";

export default function ProductDetail({ product }) { // เปลี่ยนจาก products เป็น product
    return (
        <>
            <Head>
                <title>Product Detail Page</title>
            </Head>
            <div
                style={{
                    background: "linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(250,225,230,1)) 50%, rgba(2245,245,245,1) 100%",
                }}
                className="min-h-screen justify-item-center p-20"
            >
				<Link href="/products" className='flex justify-self-start'>
					<IoMdArrowRoundBack className="text-2xl cursor-pointer text-neutral-600"></IoMdArrowRoundBack>
				</Link>
                <div className="w-full md:w-1/2 mx-auto">
                    <p className="text-3xl font-bold text-neutral-600">{product.title}</p>
                    <Image
                        src={product.image}
                        alt={product.title}
                        className="w-[220px] justify-center my-5"
                        width={400}
                        height={400}
                    />
                    <p>
                        <b>Category: </b>
                        {product.category}
                    </p>
                    <p>
                        <b>Description: </b>
                        {product.description}
                    </p>
                    <p>
                        <b>Price: </b>${product.price}
                    </p>
                    <p>
                        <b>Rating: </b>
                        {product.rating.rate} / {product.rating.count} reviews
                    </p>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const product = await resp.json(); // เปลี่ยนชื่อเป็น product
    return {
        props: { product }, // ส่งผ่าน product
    };
}
