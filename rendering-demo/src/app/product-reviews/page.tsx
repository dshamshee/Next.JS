import {Product} from '@/components/Product'
import {Reviews} from '@/components/Reviews'
import { Suspense } from 'react'



export default function ProductReviews(){

    return(
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Loading Products....</p>}>
            <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Reviews...!</p>}>
            <Reviews />
            </Suspense>
        </div>
    )
}
