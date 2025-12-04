'use server'

import { Roles } from "@/types/globals";
import { auth, clerkClient } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";



export async function setRole(formData: FormData){
    const {sessionClaims} = await auth();

    if(sessionClaims?.metadata?.role !== "admin"){
        throw new Error("Not Authorized")
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;
    const role = formData.get("role") as Roles;


    try {
        await client.users.updateUser(id, {
            publicMetadata: {role}
        })
    } catch (error) {
        console.error("Error in setting the role", error);
        throw new Error("Failed to set role")
    }

}



export async function removeRole(formData: FormData){
    const {sessionClaims} = await auth();

    if(sessionClaims?.metadata?.role !== 'admin'){
        throw new Error("Not Authorized")
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;

    try {
        await client.users.updateUser(id, {
            publicMetadata: {role: null}
        })
        revalidatePath('/admin')
    } catch (error) {
        console.error("Error in removing the role", error);
        throw new Error("Failed to remove role");
    }
}

