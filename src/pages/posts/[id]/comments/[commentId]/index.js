import { useRouter } from 'next/router'

function posts() {
  const router = useRouter();
  const {id, commentId} = router.query;
  return <div>
    <h1>Post ID: {id}</h1>
    <h1>Comment ID: {commentId}</h1>
    </div>
}

export default posts