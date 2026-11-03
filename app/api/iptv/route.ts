import { xtreamRequest } from "@/lib/xtream";
import { NextRequest, NextResponse } from "next/server";

export const categoriesData: Category[] = [];

export async function GET(request: NextRequest) {
  try {
    const type = request.nextUrl.searchParams.get("type");
    console.log(type);

    if (type === "categories") {
      const data = await xtreamRequest({ action: "get_live_categories" });
      categoriesData.length = 0; // Clear the array
      categoriesData.push(...data); // Store the categories data in the global variable
      console.log("categoriesData", categoriesData);
      return NextResponse.json(data);
    }

    if (type === "channels") {
      const categoryId = request.nextUrl.searchParams.get("categoryId");

      if (!categoryId) {
        return NextResponse.json({
          error: "categoryId is required",
          status: 400,
        });
      }

      const data = await xtreamRequest({
        action: "get_live_streams",
        categoryId: categoryId,
      });
      return NextResponse.json(data);
    }

    return NextResponse.json({
      error: "Invalid request type",
      status: 400,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Unable to load IPTV data",
      status: 502,
    });
  }
}
