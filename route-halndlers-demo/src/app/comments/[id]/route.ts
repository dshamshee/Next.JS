import { comments } from "../data";

export const GET = async(_req: Request, {params}: {params: Promise<{id: string}>})=>{

    const {id} = await params
    const comment = comments.find((comment)=> comment.id === parseInt(id))

    return Response.json(comment)
}

export const PATCH = async(req: Request, {params}: {params: Promise<{id: string}>})=>{
    const {id} = await params
    const body = await req.json()
    const {text} = body

    const index = comments.findIndex((comment)=> comment.id === parseInt(id))
    comments[index].text = text

    return Response.json(comments[index])
}


export const DELETE = async(_req: Request, {params}: {params: Promise<{id: string}>})=>{

    const {id} = await params
    const index = comments.findIndex((comment)=> comment.id === parseInt(id))
    const deletedComment = comments.splice(index, 1)

    return Response.json({Message: "Comment deleted successfully", deletedComment})
}