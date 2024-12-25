import { Fragment } from "preact/jsx-runtime";

export default function Home() {
  return (
    <Fragment>
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kebit
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
                alt="Kebit Logo"
                className="h-24 w-auto"
              />
            </div>
            <div className="space-y-6 text-gray-700">
              <p>
                In the ancient Balinese time, literate people learn from the
                palm leaves manuscript which called lontar. The activities to
                read these manuscript is called "ngebitang lontar", ngebitang is
                a verb and its root word is kebit; in Balinese kebit means to
                turn over or to flip something.
              </p>
              <p>
                "Ngebitang lontar", it is an activity that synonymous or
                associated with the learning activity. Where to learn something,
                people usually read a book, walk through it (the book) by
                flipping it. Indeed, like the modern days when we are learning,
                we flip the book pages. In the digital term, learning means
                progressing and progress bring changes. In the digital world,
                where everything are in the form of zero and one (or bit), the
                changes comes in a form of bit flipping, you change the zero
                into become one, we called it flipping the bit, so to learn, we
                flip the bit.
              </p>
              <p>
                We hope, by having kebit; as a safe place; as an indigenous
                movement; as a collective of initiatives; we can help people in
                togetherness to learn and share together, to turn a page and
                move forward, to learn and flip even a single bit from its zero
                to one, and be useful.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-lg text-blue-800 bg-blue-50 rounded">
                <p>
                  kebit: the learning collective of the collective learning
                  because learning is never ended when you graduate the school,
                  it just begun
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
