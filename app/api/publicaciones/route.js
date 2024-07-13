import { NextResponse } from "next/server";

import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const dataTodo= await prisma.publicacion.findMany()

    return NextResponse.json({
        "message":"registro encontrado",
        "status":200,
        "data":dataTodo
    })
}