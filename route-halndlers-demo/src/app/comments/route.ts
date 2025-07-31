import { comments } from "./data";

export const GET = async ()=>{
    return Response.json(comments)
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