import { NextResponse } from "next/server";


export function GET(){

    return NextResponse.json({
        "message":"registro encontrado",
        "status":200
    })
}
export function POST(){

    return NextResponse.json({
        "message":"registro creado",
        "status":200
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
