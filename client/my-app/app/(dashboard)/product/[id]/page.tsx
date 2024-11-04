'use client'
import { useParams } from 'next/navigation'

export default function Product() {
    const router = useParams()
    const { id } = router

    return <div>{id}</div>
}
