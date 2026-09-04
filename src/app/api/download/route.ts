import { NextRequest, NextResponse } from "next/server";
import { extractInstagramMedia } from "@/lib/instagram";
import { isValidInstagramUrl } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { success: false, error: "Please provide a valid Instagram URL." },
        { status: 400 }
      );
    }

    if (!isValidInstagramUrl(url)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid link format. FastDL supports Instagram Posts, Reels, and IGTV links (e.g., https://www.instagram.com/reel/...)",
        },
        { status: 400 }
      );
    }

    const result = await extractInstagramMedia(url);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            result.error ||
            "Could not fetch media. Please check if the account is public.",
        },
        { status: 422 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("API Error in /api/download:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing the request.",
      },
      { status: 500 }
    );
  }
}
