import type { Metadata } from "next";
import { site } from "@/lib/content";
import { galleryStats } from "@/lib/gallery-content";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryMosaic from "@/components/gallery/GalleryMosaic";
import GalleryYear from "@/components/gallery/GalleryYear";
import GalleryVisit from "@/components/gallery/GalleryVisit";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `Gallery — TechCadd ${site.city}`,
  description: `Inside TechCadd ${site.city}: ${galleryStats.photos} frames from the labs, project reviews, workshops, placement drives and convocation days across ${galleryStats.albums} albums.`,
  alternates: { canonical: "/gallery" },
};

/**
 * The gallery, ordered as a visit would go: the fan of plates up top, the
 * full mosaic to browse album by album, the shape of the year around it, and
 * then the invitation to come and see the real thing.
 */
export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryMosaic />
      <GalleryYear />
      <GalleryVisit />
      <FinalCta />
    </>
  );
}
