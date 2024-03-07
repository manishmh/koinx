'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CryptoCurrencies = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/') 
    })
}

export default CryptoCurrencies