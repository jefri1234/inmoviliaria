import { NextResponse } from "next/server";

import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const dataTodo= await prisma.usuario.findMany()
    
    return NextResponse.json({
        "message":"registro encontrado",
        "status":200,
        "data":dataTodo
    })
}
export async function POST(request){
    const {nombre,apellido,correo,telefono,direccion,dni}=await request.json()
    const datoCreado =await prisma.usuario.create({
        data:{
            nombre,
            apellido,
            correo,
            telefono,
            direccion,
            dni
        }
    })

    return NextResponse.json({
        "message":"registro creado",
        "status":200,
        "data":datoCreado
    })
}

export function PUT(){

    return NextResponse.json({
        "message":"registro actualizado",
        "status":200
    })
}

export function DELETE(){

    return NextResponse.json({
        "message":"registro eliminado",
        "status":200
    })
}
