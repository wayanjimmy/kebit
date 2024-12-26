import { Fragment } from "preact/jsx-runtime";

export default function Home() {
  return (
    <Fragment>
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KeBIT
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The learning collective of the collective learning
          </p>
          <a
            href="https://discord.gg/bX2G8TnDHa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
              Join our Discord Community
            </button>
          </a>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <img
                src="/kebit.png"
                alt="KeBIT Logo"
                className="h-24 w-auto"
              />
            </div>
            <div className="space-y-6 text-gray-700">
              <article className="prose lg:prose-xl">
                <p>
                  In ancient Bali, people learned from palm leaf manuscripts
                  called "lontar." The activity of reading these lontars was
                  called "ngebitang lontar" (flipping lontar), which is
                  basically the same as learning itself, similar to how we
                  scroll and read books. Now, in this digital age, learning is
                  synonymous with changing bits, from 0 to 1, like updating your
                  status from single to in a relationship, which signifies
                  progress and change.
                </p>
                <p>
                  "KeBIT" inspired by this local wisdom, aims to be a platform
                  for collective learning. Like flipping a page of lontar or
                  flipping a bit in the digital world, Kebit invites us to
                  continuously learn and grow, even after graduating from
                  school. The hope is that Kebit can help us all learn, share,
                  and upgrade ourselves together, to become more impactful.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-lg text-blue-800 bg-blue-50 rounded">
                  <p>
                    KeBIT: A digital hangout spot for learning together, because
                    learning doesn't end with graduation, it's just the
                    beginning!
                  </p>
                </blockquote>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
