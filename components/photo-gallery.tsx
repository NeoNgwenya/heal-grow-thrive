"use client";

import Image, { type StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { useRef, useState } from "react";

type Photo = {
  image: StaticImageData;
  alt: string;
  tile?: "feature" | "wide" | "tall";
};

const tileSizes = "(max-width: 720px) 47vw, (max-width: 1296px) 25vw, 300px";
const wideTileSizes = "(max-width: 720px) 95vw, (max-width: 1296px) 50vw, 600px";

export function PhotoGallery({ photos }: { photos: readonly Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : photos[selected];

  function openPhoto(index: number) {
    setSelected(index);
    dialog.current?.showModal();
  }

  function movePhoto(offset: number) {
    setSelected((index) => index === null ? null : (index + offset + photos.length) % photos.length);
  }

  return (
    <>
      <ul className="photo-grid">
        {photos.map((photo, index) => (
          <li key={photo.image.src} data-tile={photo.tile}>
            <button
              className="photo-thumbnail"
              type="button"
              aria-label={`Enlarge photo ${index + 1}: ${photo.alt}`}
              onClick={() => openPhoto(index)}
            >
              <Image
                src={photo.image}
                alt=""
                sizes={photo.tile === "feature" || photo.tile === "wide" ? wideTileSizes : tileSizes}
              />
              <span aria-hidden="true"><Maximize2 size={15} /></span>
            </button>
          </li>
        ))}
      </ul>
      <dialog
        className="photo-viewer"
        ref={dialog}
        aria-label="Book launch photo viewer"
        onClose={() => setSelected(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            movePhoto(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <button className="photo-close" type="button" aria-label="Close photo viewer" onClick={() => dialog.current?.close()}><X size={22} aria-hidden /></button>
        {active && selected !== null && (
          <>
            <Image className="photo-full" src={active.image} alt={active.alt} sizes="(max-width: 720px) 95vw, 900px" loading="eager" />
            <div className="photo-controls">
              <button type="button" aria-label="Previous photo" onClick={() => movePhoto(-1)}><ArrowLeft size={21} aria-hidden /></button>
              <p aria-live="polite">{selected + 1} / {photos.length}<span className="sr-only">. {active.alt}</span></p>
              <button type="button" aria-label="Next photo" onClick={() => movePhoto(1)}><ArrowRight size={21} aria-hidden /></button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
