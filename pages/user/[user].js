import { useRouter } from 'next/router'

export default function User(){
    
    const router = useRouter()
    console.log(router)

    return(
        <>
        <h1>User details</h1>
        <p>User ID: {router.query.user}</p>
        </>
    )
}