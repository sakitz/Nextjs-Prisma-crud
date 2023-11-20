import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'
import { data } from "autoprefixer";

export async function GET(request, {params}) {  
    
    const task = await prisma.task.findUnique({
        where: {
            id:Number(params.ID) 
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request, {params}) {
    const data = await request.json()
    const taskUpdate = await prisma.task.update({
        where: {
            id: Number(params.ID) 
          },
          data: data
    })
    return NextResponse.json(taskUpdate)
}   

export async function DELETE(request, {params}) {
    

        try {
            const taskRemove = await prisma.task.delete({
                where: {
                    id: Number(params.ID) 
                  }
                })
            return NextResponse.json(taskRemove)
        } catch (error) {
            return NextResponse.json(error.message)
        }       
    }
