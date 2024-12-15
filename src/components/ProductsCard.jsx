import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const ProductsCard = () => {

    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const dataSize = 5;

    const getProducts = async () => {
        const data = await axios.get('https://fakestoreapi.com/products?limit=20')
        setProduct(data.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const startIndex = (page - 1) * dataSize
    const lastIndex = startIndex + dataSize
    const itemPerPage = product.slice(startIndex, lastIndex)

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1)
    }

    const handleNext = () => {
        if (page < Math.ceil(product.length / dataSize)) setPage(page + 1)
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
                {itemPerPage.map((elem, idx) => (
                    <Card key={idx} {...elem} />
                ))}
            </div>

            <div className="container w-full flex justify-between my-5">
                <button
                    type="button"
                    className="btn btn-primary rounded-md btn-sm"
                    disabled={page === 1}
                    onClick={handlePrevious}
                >
                    &larr; Previous
                </button>
                <button
                    type="button"
                    className="btn btn-primary rounded-md btn-sm"
                    disabled={page >= Math.ceil(product.length / dataSize)}
                    onClick={handleNext}
                >
                    Next &rarr;
                </button>
            </div >
        </>
    )
}

export default ProductsCard
