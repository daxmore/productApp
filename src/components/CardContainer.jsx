import React from 'react'
import ProductsCard from './ProductsCard'

const CardContainer = () => {
    return (
        <>
            <div className="container px-4 py-2 md:px-14 md:py-6 lg:px-32 lg:py-10">
                <ProductsCard />
            </div>
        </>
    )
}

export default CardContainer
