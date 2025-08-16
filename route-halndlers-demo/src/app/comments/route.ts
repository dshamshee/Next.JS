import { NextRequest } from "next/server";
import { comments } from "./data";

export const GET = async (req: NextRequest)=>{
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter((comment)=> comment.text.includes(query)) : comments;
    return Response.json(filteredComments)
}

export const POST = async(req: Request)=>{

    const comment = await req.json() // the data is in the body of the request in json format

    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }

    // PUsh the new comment on the comments array
    comments.push(newComment)

    return new Response(JSON.stringify(newComment),{
        headers:{"content-type":"application/json"},
        status:201
    })
}