import { db } from "@/config/db";
import { CourseChaptersTable, CourseTable } from "@/config/schema";
import { asc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseid");

  if (courseId) {
    const result = await db
      .select()
      .from(CourseTable)
      //@ts-ignore
      .where(eq(CourseTable.CourseId, courseId));
      //@ts-ignore
      const chapterResult = await db.select().from(CourseChaptersTable).where(eq(CourseChaptersTable.courseId,courseId))

    return NextResponse.json({
        ...result[0],
        chapters: chapterResult
    });
  } else {
    //Fetch All Courses
    const result = await db
      .select()
      .from(CourseTable)
      .orderBy(asc(CourseTable.id));

    return NextResponse.json(result);
  }
}
