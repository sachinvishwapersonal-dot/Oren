"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { productReels, type ProductReel } from "@/data/products";
import { PlayIcon } from "@/components/ui/icons";
import { Container, SectionHeading } from "@/components/ui/primitives";

function ReelCard({ reel }: { reel: ProductReel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <article className="group relative aspect-[9/16] overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-ink)] shadow-sm">
      <video
        ref={videoRef}
        src={reel.videoUrl}
        poster={reel.posterUrl}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1E20]/85 via-transparent to-[#0F1E20]/30" />

      <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? `Pause ${reel.title}` : `Play ${reel.title}`}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[var(--color-ink)] shadow-sm transition-transform hover:scale-105"
        >
          {playing ? (
            <span className="font-mono text-[10px] font-bold">❚❚</span>
          ) : (
            <PlayIcon size={13} />
          )}
        </button>
      </div>

      <div className="absolute inset-x-4 bottom-4 text-white">
        <h3 className="text-base font-semibold leading-snug tracking-[-0.02em]">
          {reel.title}
        </h3>
        <Link
          href={`/products/${reel.productHandle}`}
          className="mt-3 inline-flex items-center gap-1.5 rounded-[3px] bg-[var(--color-signal)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[var(--color-ink)]"
        >
          View product
        </Link>
      </div>
    </article>
  );
}

export function ReelsSection({
  title = "In the daily routine.",
  copy = "Training reels and single-serve preparation.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-[var(--color-paper)] py-20 md:py-28">
      <Container>
        <SectionHeading title={title} copy={copy} />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {productReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </Container>
    </section>
  );
}
