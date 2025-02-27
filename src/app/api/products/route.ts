import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query || query.length < 3) return NextResponse.json([]);


    try {

        const data = await prisma.product.findMany({
            where: {
                name: {
                    search: query
                },
            },
            take: 10,
        });

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
    }
}
