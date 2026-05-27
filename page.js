export default function Home() {
  const featuredPosts = [
    {
      title: "The Real Side of Property Management",
      category: "Property Management",
      excerpt:
        "From resident complaints to emergency maintenance calls, here’s what really happens behind the scenes in multifamily housing.",
    },
    {
      title: "Starting a House Flipping Business With Family",
      category: "Real Estate Investing",
      excerpt:
        "Lessons learned while building a family-driven real estate business focused on generational wealth and community impact.",
    },
    {
      title: "Apartment Tours That Actually Lease Units",
      category: "Leasing & Marketing",
      excerpt:
        "Simple strategies leasing professionals can use to increase conversions and connect with prospects naturally.",
    },
  ];

  const services = [
    "Property Management Consulting",
    "Real Estate Investing & Flipping",
    "Property Marketing & Photography",
    "Industry Education & Blog Content",
  ];

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              IWLTW.com
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              It Was Like That When
            </h1>

            <p className="text-lg text-neutral-300 md:text-xl">
              A real, unfiltered look into property management, multifamily
              living, entrepreneurship, and the chaos that comes with it all.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
                Read The Blog
              </button>

              <button className="rounded-2xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
                Work With Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
              About The Brand
            </p>

            <h2 className="text-4xl font-black leading-tight">
              Multifamily. Real Estate. Real Stories.
            </h2>

            <p className="text-lg leading-8 text-neutral-700">
              IWLTW stands for “It Was Like That When” — a platform built for
              property managers, entrepreneurs, investors, and everyday people
              navigating business, real estate, and apartment life.
            </p>

            <p className="text-lg leading-8 text-neutral-700">
              This blog combines education, humor, industry insight,
              behind-the-scenes stories, and practical advice from someone who
              actually works in multifamily housing every day.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-2xl">
            <h3 className="mb-6 text-2xl font-bold">
              What You’ll Find Here
            </h3>

            <div className="grid gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="font-semibold">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Featured Posts
              </p>

              <h2 className="text-4xl font-black">
                Latest From The Blog
              </h2>
            </div>

            <button className="rounded-2xl border border-black px-5 py-3 font-semibold transition hover:bg-black hover:text-white">
              View All Posts
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-52 bg-neutral-300" />

                <div className="space-y-4 p-6">
                  <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
                    {post.category}
                  </span>

                  <h3 className="text-2xl font-bold leading-tight group-hover:text-yellow-600">
                    {post.title}
                  </h3>

                  <p className="leading-7 text-neutral-600">
                    {post.excerpt}
                  </p>

                  <button className="pt-2 font-semibold text-black underline-offset-4 hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Stay Connected
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Join The Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Get blog updates, property management insights, business ideas,
            multifamily humor, and behind-the-scenes content delivered straight
            to your inbox.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-2xl border border-neutral-700 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <button className="rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-100 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-center md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <h3 className="text-2xl font-black">IWLTW.com</h3>

            <p className="mt-2 text-neutral-600">
              Multifamily • Real Estate • Entrepreneurship
            </p>
          </div>

          <div className="flex justify-center gap-6 font-semibold text-neutral-700">
            <a href="#" className="hover:text-black">
              Instagram
            </a>

            <a href="#" className="hover:text-black">
              TikTok
            </a>

            <a href="#" className="hover:text-black">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}