import { Skeleton } from "@/components/ui/skeleton";
import { Flame, Handshake, Mail, MessageSquare, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { useChannelInfo, useContactEmail } from "../hooks/useQueries";

export function ContactPage() {
  const { data: email, isLoading: emailLoading } = useContactEmail();
  const { data: channelInfo } = useChannelInfo();
  const subscribeUrl =
    channelInfo?.subscribeUrl ??
    "https://youtube.com/@hehehe222k?si=TsxMjLpCTkuRt2a5";

  const contactEmail = email ?? "ankittoppo093@gmail.com";

  const reasons = [
    {
      icon: Handshake,
      title: "Collaborations",
      desc: "Want to collab on a Free Fire video? Let's talk!",
    },
    {
      icon: MessageSquare,
      title: "Sponsorships",
      desc: "Interested in sponsoring the channel? Reach out.",
    },
    {
      icon: Mail,
      title: "General Queries",
      desc: "Any questions or feedback? Happy to hear from you.",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-fire-orange/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-fire-orange" />
              <span className="text-fire-orange text-sm font-semibold uppercase tracking-widest">
                Get in Touch
              </span>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-foreground mb-4">
              Contact <span className="fire-gradient-text">hehehe222k</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              For collaborations, sponsorships, or any queries, feel free to
              reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: logo + quick info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col items-center md:items-start gap-6"
          >
            <div className="relative">
              <div className="w-32 h-32 rounded-full ring-4 ring-fire-orange/60 glow-orange overflow-hidden">
                <img
                  src="/assets/generated/logo-transparent.dim_200x200.png"
                  alt="hehehe222k logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-fire-orange rounded-full p-1.5">
                <Mail className="w-3 h-3 text-white" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-display font-bold text-lg fire-gradient-text">
                hehehe222k
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Free Fire Content Creator
              </p>
            </div>

            {/* Reason cards */}
            <div className="w-full space-y-3">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-3 bg-card rounded-lg p-3 border border-border"
                >
                  <div className="mt-0.5 p-1.5 rounded-md bg-fire-orange/15">
                    <reason.icon className="w-4 h-4 text-fire-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {reason.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {reason.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: contact details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-card rounded-xl border border-border p-8 space-y-8">
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Reach Out
                </h3>

                {/* Email */}
                <div className="mb-6">
                  <p className="block text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
                    Email Address
                  </p>
                  {emailLoading ? (
                    <Skeleton className="h-14 w-full rounded-lg" />
                  ) : (
                    <a
                      href={`mailto:${contactEmail}`}
                      className="group flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-fire-orange/50 hover:bg-fire-orange/5 transition-all"
                    >
                      <div className="p-2 rounded-md fire-gradient">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-mono text-foreground group-hover:text-fire-orange transition-colors">
                          {contactEmail}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          Click to send email
                        </div>
                      </div>
                    </a>
                  )}
                </div>

                {/* YouTube */}
                <div>
                  <p className="block text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
                    YouTube Channel
                  </p>
                  <a
                    href={subscribeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-fire-orange/50 hover:bg-fire-orange/5 transition-all"
                  >
                    <div className="p-2 rounded-md fire-gradient">
                      <Youtube className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-mono text-foreground group-hover:text-fire-orange transition-colors">
                        youtube.com/@hehehe222k
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Subscribe for latest videos
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  🙏 Support the channel by subscribing — it means a lot!
                </p>
                <a
                  href={subscribeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md fire-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity glow-orange-sm"
                >
                  <Youtube className="w-4 h-4" />
                  Subscribe to hehehe222k
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
