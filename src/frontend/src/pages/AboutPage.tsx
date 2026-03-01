import { Skeleton } from "@/components/ui/skeleton";
import { Flame, Users, Video, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { useChannelInfo } from "../hooks/useQueries";

export function AboutPage() {
  const { data: channelInfo, isLoading } = useChannelInfo();

  const bio =
    channelInfo?.bio ??
    "🎮 Welcome to my channel!\nI create Free Fire gameplay videos with normal and simple editing. Here you'll find fun matches, cool moments, and entertaining clips.\nIf you like Free Fire, please support the channel and make sure to subscribe!";

  const subscribeUrl =
    channelInfo?.subscribeUrl ??
    "https://youtube.com/@hehehe222k?si=TsxMjLpCTkuRt2a5";

  const bioParagraphs = bio.split("\n").filter(Boolean);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-fire-orange/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-fire-orange" />
              <span className="text-fire-orange text-sm font-semibold uppercase tracking-widest">
                About
              </span>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-foreground mb-2">
              About <span className="fire-gradient-text">hehehe222k</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Logo + stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="w-40 h-40 rounded-full ring-4 ring-fire-orange/60 glow-orange overflow-hidden">
                <img
                  src="/assets/generated/logo-transparent.dim_200x200.png"
                  alt="hehehe222k channel logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-fire-orange rounded-full p-2">
                <Flame className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="text-center">
              {isLoading ? (
                <Skeleton className="h-7 w-32 mx-auto mb-2" />
              ) : (
                <h2 className="font-display font-bold text-xl fire-gradient-text">
                  hehehe222k
                </h2>
              )}
              <p className="text-muted-foreground text-sm mt-1">
                Free Fire Creator
              </p>
            </div>

            {/* Stats */}
            <div className="w-full grid grid-cols-2 gap-3">
              <div className="bg-card rounded-lg p-4 border border-border text-center">
                <Users className="w-5 h-5 text-fire-orange mx-auto mb-2" />
                <div className="font-display font-bold text-xl text-foreground">
                  1K+
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Subscribers
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border text-center">
                <Video className="w-5 h-5 text-fire-orange mx-auto mb-2" />
                <div className="font-display font-bold text-xl text-foreground">
                  50+
                </div>
                <div className="text-xs text-muted-foreground mt-1">Videos</div>
              </div>
            </div>

            <a
              href={subscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md fire-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity glow-orange-sm"
            >
              <Youtube className="w-4 h-4" />
              Subscribe on YouTube
            </a>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-card rounded-xl border border-border p-8 space-y-5">
              <h3 className="font-display font-bold text-xl text-foreground">
                Channel Story
              </h3>

              {isLoading ? (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                  <Skeleton className="h-4 w-full mt-4" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ) : (
                <div className="space-y-4">
                  {bioParagraphs.map((para) => (
                    <p
                      key={para}
                      className="text-muted-foreground leading-relaxed text-base"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                  What You'll Find Here
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "🎯 Fun Matches",
                    "🔥 Cool Moments",
                    "🎮 Gameplay Clips",
                    "✂️ Simple Editing",
                    "😄 Entertainment",
                    "📱 Mobile Gaming",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
