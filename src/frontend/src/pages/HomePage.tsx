import { Flame, Play, Star, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { useChannelInfo } from "../hooks/useQueries";

const stats = [
  { label: "Subscribers", value: "1K+" },
  { label: "Videos", value: "50+" },
  { label: "Views", value: "10K+" },
];

export function HomePage() {
  const { data: channelInfo } = useChannelInfo();
  const subscribeUrl =
    channelInfo?.subscribeUrl ??
    "https://youtube.com/@hehehe222k?si=TsxMjLpCTkuRt2a5";

  return (
    <main className="flex-1">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-[380px] md:h-[460px]">
          <img
            src="/assets/generated/banner.dim_1200x400.jpg"
            alt="hehehe222k Free Fire Channel Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-fire-orange animate-flicker" />
                <span className="text-fire-orange text-sm font-semibold uppercase tracking-widest">
                  Free Fire Gaming
                </span>
                <Flame className="w-5 h-5 text-fire-orange animate-flicker" />
              </div>

              <h1 className="font-display font-black text-5xl md:text-7xl fire-gradient-text text-glow-orange mb-3 tracking-tight">
                hehehe222k
              </h1>

              <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-6 font-body">
                Free Fire Gameplay | Fun Matches | Cool Moments
              </p>

              <motion.a
                href={subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-md fire-gradient text-white font-display font-bold text-lg tracking-wide animate-pulse-fire"
              >
                <Youtube className="w-6 h-6" />
                Subscribe Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display font-black text-3xl fire-gradient-text">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-fire-orange fill-fire-orange" />
              <span className="text-fire-orange text-sm font-semibold uppercase tracking-widest">
                Welcome
              </span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-5 leading-tight">
              Your home for
              <span className="fire-gradient-text"> Free Fire </span>
              action
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hey! I'm hehehe222k. I create Free Fire gameplay videos with
              normal and simple editing. Here you'll find fun matches, cool
              moments, and entertaining clips.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you like Free Fire, please support the channel and make sure to
              subscribe — it helps a lot! 🎮🔥
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md fire-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity glow-orange-sm"
              >
                <Youtube className="w-4 h-4" />
                Subscribe
              </a>
              <a
                href="/videos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-fire-orange/40 text-fire-orange font-semibold text-sm hover:bg-fire-orange/10 transition-colors"
              >
                <Play className="w-4 h-4" />
                Watch Videos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden ring-2 ring-fire-orange/30 glow-orange-sm">
              <img
                src="/assets/generated/banner.dim_1200x400.jpg"
                alt="Free Fire gameplay"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                <a
                  href={subscribeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 rounded-full fire-gradient shadow-fire hover:scale-110 transition-transform"
                >
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-fire-red/20 via-fire-orange/10 to-fire-red/20" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Flame className="w-10 h-10 text-fire-orange mx-auto mb-4 animate-flicker" />
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Don't miss a single{" "}
              <span className="fire-gradient-text">drop!</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Subscribe to the channel and never miss the latest Free Fire
              gameplay, tips, and highlights.
            </p>
            <motion.a
              href={subscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-md fire-gradient text-white font-display font-bold text-lg"
            >
              <Youtube className="w-6 h-6" />
              Subscribe for Free
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
