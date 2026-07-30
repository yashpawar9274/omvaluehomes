import type { VideoItem } from "@/lib/videos";

export function VideoPoster({ video }: { video: VideoItem }) {
  return (
    <div className={`video-image ${video.orientation === "vertical" ? "vertical" : ""}`}>
      {video.posterUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={video.posterUrl} alt={video.posterAlt || video.title} />
      ) : (
        <div className="video-fallback" aria-hidden="true">
          <span className="video-fallback-label">{video.label}</span>
          <strong>BudgetHomes</strong>
          <small>Actual Flat Tour</small>
        </div>
      )}
      <span className="video-play">▶</span>
    </div>
  );
}

export function VideoCard({ video, context = "Palghar West" }: { video: VideoItem; context?: string }) {
  return (
    <a className="video-card" href={video.videoUrl} target="_blank" rel="noreferrer">
      <VideoPoster video={video} />
      <div>
        <small>{video.label} · {context}</small>
        <h3>{video.title}</h3>
      </div>
    </a>
  );
}
