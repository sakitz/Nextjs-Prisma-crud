import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET() {

    //preguntar los datos de la DB task con findmany
    const task = await prisma.task.findMany()
    return NextResponse.json(task)
}

export async function POST(request) {
    const {title, description} = await request.json()
    const newTask = await prisma.task.create({
        data: {
            title,
            description
        }
     })
    return NextResponse.json(newTask)
}