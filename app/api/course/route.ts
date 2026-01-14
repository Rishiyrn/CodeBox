import { db } from "@/config/db";
import { CourseTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await db.select().from(CourseTable);
        return NextResponse.json(result);
    } catch (error) {
        console.error('Failed to fetch courses:', error);
        return NextResponse.json(
            { error: 'Failed to fetch courses' },
            { status: 500 }
        );
    }
}
}