import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Eye, Flame, Play, Youtube } from "lucide-react";
import { motion } from "motion/react";
import type { Video } from "../backend.d";
import { useVideos } from "../hooks/useQueries";

const REAL_SHORTS = [
  {
    id: "IZBbWT-xZ7M",
    title: "Free Fire Short #1",
  },
  {
    id: "e4fp7P2Uxx4",
    title: "Free Fire Short #2",
  },
  {
    id: "x7fmB6kxrxQ",
    title: "Free Fire Short #3",
  },
];

function ShortsCard({
  short,
  index,
}: {
  short: (typeof REAL_SHORTS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-card rounded-xl overflow-hidden border border-border hover:border-fire-orange/40 transition-all duration-300"
    >
      <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${short.id}`}
          title={short.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-3 text-center">
        <a
          href={`https://youtube.com/shorts/${short.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-fire-orange hover:underline flex items-center justify-center gap-1"
        >
          <Youtube className="w-3 h-3" />
          YouTube पर देखें
        </a>
      </div>
    </motion.div>
  );
}

function BackendVideoCard({
  video,
  index,
}: {
  video: Video;
  index: number;
}) {
  const viewCount =
    Number(video.viewCount) >= 1000
      ? `${(Number(video.viewCount) / 1000).toFixed(1)}K`
      : String(video.viewCount);

  const uploadDate = new Date(
    Number(video.uploadDate) / 1_000_000,
  ).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const gradients = [
    "from-orange-600/80 to-red-800/80",
    "from-red-700/80 to-rose-900/80",
    "from-amber-600/80 to-orange-900/80",
    "from-orange-500/80 to-red-700/80",
    "from-red-600/80 to-orange-800/80",
    "from-rose-700/80 to-red-900/80",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-fire-orange/40 transition-all duration-300 hover:glow-orange-sm"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        {video.thumbnailUrl ? (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]}`}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div className="w-14 h-14 rounded-full bg-black/60 border-2 border-fire-orange/70 flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-sm text-foreground leading-tight mb-3 line-clamp-2 group-hover:text-fire-orange transition-colors">
          {video.title}
        </h3>
        {video.description && (
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {video.description}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {viewCount} views
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {uploadDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function VideoCardSkeleton() {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border">
      <Skeleton className="aspect-video w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex justify-between pt-1">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    </div>
  );
}

export function VideosPage() {
  const { data: backendVideos, isLoading } = useVideos();
  const hasBackendVideos = backendVideos && backendVideos.length > 0;

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-fire-orange/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-fire-orange" />
              <span className="text-fire-orange text-sm font-semibold uppercase tracking-widest">
                Content
              </span>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-foreground mb-4">
              My <span className="fire-gradient-text">Videos</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Subscribe to stay updated on new content!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subscribe reminder */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-between gap-4 bg-fire-orange/10 border border-fire-orange/30 rounded-xl px-6 py-4 flex-wrap">
          <p className="text-sm text-foreground font-medium flex items-center gap-2">
            <Youtube className="w-4 h-4 text-fire-orange" />
            Subscribe to never miss new Free Fire uploads!
          </p>
          <a
            href="https://youtube.com/@hehehe222k?si=TsxMjLpCTkuRt2a5"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-md fire-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Subscribe Now
          </a>
        </div>
      </div>

      {/* Real YouTube Shorts */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_SHORTS.map((short, i) => (
            <ShortsCard key={short.id} short={short} index={i} />
          ))}
        </div>

        {/* Backend videos if any */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Array.from({ length: 3 }, (_, i) => i).map((i) => (
              <VideoCardSkeleton key={`skeleton-${i}`} />
            ))}
          </div>
        ) : hasBackendVideos ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {backendVideos.map((video, i) => (
              <BackendVideoCard key={video.title} video={video} index={i} />
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
