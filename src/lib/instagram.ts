import { extractInstagramShortcode } from "./utils";

export interface MediaItem {
  id: string;
  type: "video" | "image";
  downloadUrl: string;
  thumbnailUrl: string;
  title: string;
  author: string;
  width?: number;
  height?: number;
}

export interface ExtractionResult {
  success: boolean;
  shortcode: string;
  items: MediaItem[];
  error?: string;
}

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36";

export async function extractInstagramMedia(
  url: string
): Promise<ExtractionResult> {
  const shortcode = extractInstagramShortcode(url);
  if (!shortcode) {
    return {
      success: false,
      shortcode: "",
      items: [],
      error: "Invalid Instagram link. Please provide a valid Post, Reel, or IGTV URL.",
    };
  }

  // Method 1: Try public JSON endpoint
  try {
    const jsonUrl = `https://www.instagram.com/p/${shortcode}/?__a=1&__d=dis`;
    const response = await fetch(jsonUrl, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "application/json, text/plain, */*",
        "Sec-Fetch-Site": "same-origin",
      },
      next: { revalidate: 60 },
    });

    if (response.ok) {
      const data = await response.json();
      const media =
        data?.graphql?.shortcode_media ||
        data?.items?.[0] ||
        data?.graphql?.media;

      if (media) {
        const isVideo = Boolean(media.is_video || media.video_versions?.length);
        const downloadUrl = isVideo
          ? media.video_url || media.video_versions?.[0]?.url
          : media.display_url || media.image_versions2?.candidates?.[0]?.url;

        const thumbnail =
          media.display_url ||
          media.image_versions2?.candidates?.[0]?.url ||
          downloadUrl;

        const title =
          media.edge_media_to_caption?.edges?.[0]?.node?.text ||
          media.caption?.text ||
          `Instagram Media (${shortcode})`;

        const author =
          media.owner?.username ||
          media.user?.username ||
          "Instagram User";

        if (downloadUrl) {
          return {
            success: true,
            shortcode,
            items: [
              {
                id: shortcode,
                type: isVideo ? "video" : "image",
                downloadUrl,
                thumbnailUrl: thumbnail || downloadUrl,
                title: title.slice(0, 150),
                author,
                width: media.dimensions?.width,
                height: media.dimensions?.height,
              },
            ],
          };
        }
      }
    }
  } catch (err) {
    console.warn("Method 1 failed, trying Method 2 (HTML parsing)...", err);
  }

  // Method 2: HTML Open Graph & JSON-LD fallback
  try {
    const htmlUrl = `https://www.instagram.com/p/${shortcode}/`;
    const htmlRes = await fetch(htmlUrl, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });

    if (!htmlRes.ok) {
      throw new Error(`Failed to fetch Instagram page status ${htmlRes.status}`);
    }

    const html = await htmlRes.text();

    // Check Open Graph video
    const ogVideoMatch = html.match(
      /<meta property="og:video" content="([^"]+)"/i
    );
    const ogImageMatch = html.match(
      /<meta property="og:image" content="([^"]+)"/i
    );
    const ogTitleMatch = html.match(
      /<meta property="og:title" content="([^"]+)"/i
    );

    const videoUrl = ogVideoMatch ? ogVideoMatch[1].replace(/&amp;/g, "&") : null;
    const imageUrl = ogImageMatch ? ogImageMatch[1].replace(/&amp;/g, "&") : null;
    const title = ogTitleMatch
      ? ogTitleMatch[1].replace(/&amp;/g, "&")
      : `Instagram Post (${shortcode})`;

    if (videoUrl || imageUrl) {
      return {
        success: true,
        shortcode,
        items: [
          {
            id: shortcode,
            type: videoUrl ? "video" : "image",
            downloadUrl: videoUrl || (imageUrl as string),
            thumbnailUrl: imageUrl || (videoUrl as string),
            title: title.slice(0, 150),
            author: "Instagram User",
          },
        ],
      };
    }
  } catch (err) {
    console.error("Method 2 failed:", err);
  }

  return {
    success: false,
    shortcode,
    items: [],
    error:
      "Unable to fetch this Instagram media. The post might be private, deleted, or restricted.",
  };
}
