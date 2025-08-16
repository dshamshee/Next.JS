import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest)=>{

    const response = NextResponse.next()
        const themePreference = req.cookies.get('theme')
        if(!themePreference){
            response.cookies.set('theme', 'dark')
        }

        response.headers.set('custome-header', 'custom-value')
        return response


    // return NextResponse.redirect(new URL('/', req.url))
    // if(req.nextUrl.pathname=== '/profile'){
    //     // return NextResponse.redirect(new URL('/hello', req.url))
    //     // return NextResponse.rewrite(new URL('/hello', req.url))
    // }
}

// export const config = {
//     matcher: "/profile"
// }