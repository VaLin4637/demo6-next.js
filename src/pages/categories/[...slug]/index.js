import { useRouter } from 'next/router'

function categories() {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>
            <h1>Categories Page</h1>
            <p>Slug: {slug}</p>
            <p>Slug: {JSON.stringify(slug)}</p>
        </div>
    )
}

export default categories