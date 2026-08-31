#!/usr/bin/env python3
"""Cover-crop lake-lighting.jpg to 1200x630 OG image with AI CONCEPT label."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/stills/lake-lighting.jpg"
OUT = ROOT / "public/og/ocotillo-lakes-ai-concept.png"
W, H = 1200, 630

SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"
SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"


def cover_crop(img: Image.Image, width: int, height: int) -> Image.Image:
    src_w, src_h = img.size
    target_ratio = width / height
    src_ratio = src_w / src_h
    if src_ratio > target_ratio:
        new_w = int(src_h * target_ratio)
        left = (src_w - new_w) // 2
        img = img.crop((left, 0, left + new_w, src_h))
    else:
        new_h = int(src_w / target_ratio)
        top = (src_h - new_h) // 2
        img = img.crop((0, top, src_w, top + new_h))
    return img.resize((width, height), Image.Resampling.LANCZOS)


def main() -> None:
    img = Image.open(SRC).convert("RGB")
    img = cover_crop(img, W, H)

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    for y in range(H):
        t = y / H
        alpha = int(50 + 190 * (t**1.35))
        draw_ov.line([(0, y), (W, y)], fill=(8, 9, 10, alpha))

    composed = Image.alpha_composite(img.convert("RGBA"), overlay)
    draw = ImageDraw.Draw(composed)

    caps = ImageFont.truetype(SANS_BOLD, 20)
    serif = ImageFont.truetype(SERIF, 78)
    small = ImageFont.truetype(SANS, 24)
    tiny = ImageFont.truetype(SANS, 18)

    pill = "AI CONCEPT"
    bbox = draw.textbbox((0, 0), pill, font=caps)
    pw, ph = bbox[2] - bbox[0], bbox[3] - bbox[1]
    px, py = 64, 318
    pad_x, pad_y = 18, 10
    draw.rounded_rectangle(
        [px, py, px + pw + pad_x * 2, py + ph + pad_y * 2],
        radius=20,
        outline=(196, 92, 44, 255),
        width=2,
        fill=(8, 9, 10, 170),
    )
    draw.text((px + pad_x, py + pad_y - 1), pill, font=caps, fill=(243, 238, 228, 255))
    draw.text((64, 390), "Ocotillo Yards", font=serif, fill=(243, 238, 228, 255))
    draw.text((64, 490), "Ocotillo Lakes · Chandler", font=small, fill=(183, 168, 148, 255))
    draw.text((64, 530), "Visualization, not a completed job", font=tiny, fill=(183, 168, 148, 230))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    composed.convert("RGB").save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT} {composed.size}")


if __name__ == "__main__":
    main()
