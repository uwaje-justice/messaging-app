import { Bell, Image, Lock, MessageCircle, Search, Users } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Simple messaging",
    description:
      "Send and receive messages in a clean, focused conversation experience designed to stay out of your way.",
  },
  {
    icon: Image,
    title: "Photos & files",
    description:
      "Share photos and files directly in your conversations without switching between different apps.",
  },
  {
    icon: Bell,
    title: "Real-time notifications",
    description:
      "Stay up to date with notifications when you receive new messages and activity.",
  },
  {
    icon: Users,
    title: "Stay connected",
    description:
      "Find people, manage your connections, and keep your conversations with friends in one place.",
  },
  {
    icon: Lock,
    title: "Private conversations",
    description:
      "Keep your conversations protected with secure authentication and controlled access to your account.",
  },
  {
    icon: Search,
    title: "Find conversations",
    description:
      "Quickly find the people and conversations you're looking for when you need them.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section bg-background">
      <div className="wrap">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">
            Everything you need
          </span>

          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
            Built for everyday conversations
          </h2>

          <p className="mt-4 text-base leading-7 text-on-surface/70">
            Everything you need to communicate, share, and stay connected
            without unnecessary complexity.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-outline-variant bg-surface p-6 transition-colors hover:bg-surface-container"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary-container text-on-primary-container">
                <Icon className="size-5" />
              </div>

              <h3 className="mt-5 font-heading text-lg font-bold text-on-surface">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-on-surface/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
