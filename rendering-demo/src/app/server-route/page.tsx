import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils"
import { clientSideFunction } from '@/utils/client-utils';



export default function ServerRoutePage(){
    const result = serverSideFunction();
    // const clientResult = clientSideFunction() // this will throw an error because it is a client side function
    return (
        <>
        <h1>
            {" "}
            Server Route Page {result}
             {/* {clientResult} // this will throw an error because it is a client side function */}
            </h1>
        <ImageSlider />
        </>
    )
}