import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'


export async function GET(request,{params}){

    const registroEncontrado= await prisma.usuario.findUnique({
        where:{
          
            idUsuario:Number(params.id),
        },
    });
    return NextResponse.json({
        
        data:registroEncontrado
    })
}

export async function PUT(request,{params}){
    
const data= await request.json()
const UsuarioUpdate= await prisma.usuario.update({
where:{
    idUsuario:Number(params.id)
},
data:data
});
return NextResponse.json({
"message":"task update",
"task update":UsuarioUpdate
})
}

export async function DELETE(request,{params}){
    try{
     const data= await prisma.usuario.delete({
         where:{
             idUsuario:Number(params.id)
         }
     })
     console.log(data)
     return NextResponse.json("tarea eliminada"+params.id)
    }
    catch(error){
     return NextResponse.json(error.message)
    }
 }