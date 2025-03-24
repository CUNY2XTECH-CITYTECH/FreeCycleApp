import { createNewUser } from "@/db";


export const POST = async(request: Request) => {

    const userInfo = await request.json();
    const newUser = await createNewUser(userInfo)
    return Response.json(newUser)
}