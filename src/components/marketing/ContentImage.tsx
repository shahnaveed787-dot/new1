import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** cover crops; contain keeps full illustration visible (better for SVG) */
  fit?: "cover" | "contain";
  className?: string;
  quality?: number;
};

/** Responsive next/image helper — SVG stays unoptimized; rasters use q=75 (Next default allowlist). */
export function ContentImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 520px",
  priority = false,
  fit,
  className = "",
  quality = 75,
}: ContentImageProps) {
  const isSvg = /\.svg$/i.test(src);
  const objectFit = fit ?? (isSvg ? "contain" : "cover");

  return (
    <Image
      src={src}
      alt={alt}
      title={alt}
      fill
      priority={priority}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      unoptimized={isSvg}
      quality={isSvg ? undefined : quality}
      className={`${objectFit === "contain" ? "object-contain p-2 sm:p-3" : "object-cover"} ${className}`}
      sizes={sizes}
    />
  );
}
