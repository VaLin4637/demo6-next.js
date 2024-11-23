
import Link from 'next/link';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const MyComponent = dynamic(() => import('../../../components/MyComponent'));
import Head from "next/head"

function users() {
  const router = useRouter();
  const {username} = router.query;
  const [count,setCount] = useState(0)
  useEffect(() => {
    setCount(count+1);
  },[]);
  return (
  <div>
    <div>
      <Head>
        <title>User</title>
      </Head>
      <p>Hello world!</p>
    </div>
    <h1>User Pages</h1>
    <MyComponent title="Hello, Next.js!"/>
    <Link href="/posts/123/comments/456">Go to Comment Pages</Link>
    
    <br></br>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded" onClick={() => setCount(count + 1)} > Increment </button>
    <br></br>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded" onClick={() => setCount(count - 1)} > Decrement </button>
    <h1>{count}</h1>
  </div>
  );
}

export default users