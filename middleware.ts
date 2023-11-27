import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as jose from 'jose'

const prisma = new PrismaClient()

export async function middleware(req: NextRequest, res: NextResponse) {
    const bearerToken = req.headers.get('authorization') as string

    if (!bearerToken) {
        return new NextResponse(JSON.stringify({
            errorMessage: "Unauthorized request (no bearer provided)"
        }), { status: 401 })
    }

    const token = bearerToken.split(' ')[1]

    if (!token) {
        return new NextResponse(JSON.stringify({
            errorMessage: "Unauthorized request (no token)"
        }), { status: 401 })
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    try {
        await jose.jwtVerify(token, secret)
    } catch (error) {
        return new NextResponse(JSON.stringify({
            errorMessage: "Unauthorized request (compare token failed)"
        }), { status: 401 })
    }
}

export const config = {
    matcher: ["/api/auth/me"]
}