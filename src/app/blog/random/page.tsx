import Image from "next/image";

import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";

export default function Random() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-indigo-100 font-mono font-light">
        <div className="py-8 text-sm">
          <div className="text-center pb-6">
            A page of random facts, theories, and ideas I find interesting!
          </div>

          {/* Pigeonhole Principle Begin */}
          <div className="py-6 bg-indigo-200 px-36">
            <div className="text-xl grid grid-cols-2">
              <span className="col-span-1">PIGEONHOLE PRINCIPLE</span>
              <Image
                className="col-span-1 place-self-center"
                src={"/pigeon.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>The theorem goes something like this:</div>
            <div>
              If more than <i>n</i> objects are placed into <i>n</i> boxes, then
              at least one box must contain more than one object.
            </div>
            <br />
            <div>
              When I first learned this theorem in class, I thought it was
              simply too obvious and seems like common sense, but it turns out
              to have a lot of interesting applications!
            </div>
            <br />
            <div>
              A popular example is counting hair (<i>wait no keep reading!</i>)
            </div>
            <div>
              Let&apos;s say that no one on this planet has more than 1 million hairs
              on their head. The population of SF Bay Area is well over a
              million. By the pigeonhole principle, there must be at least (if
              not many more than) two people who have the exact same number of
              hairs on their head (since at least two people have to be in the
              same &quot;pigeonhole&quot;).
              <br />
              Interesting right! You have a hair-count twin! Or maybe you really
              do find this to be simple common sense. In which case if you were
              born in the early 1600s, you would have shaped a theory that goes
              on to influence fields like computer science and quantum
              mechanics!
            </div>
          </div>
          {/* Pigeonhole Principle End */}

          {/* Ostrich Algorithm Begin */}
          <div className="py-12 px-36">
            <div className="text-xl">OSTRICH ALGORITHM</div>
            <br />
            <div>
              Simple and straightforward: this strategy is to simply ignore a
              problem that happens rarely.
            </div>
            <br />
            <div>
              Although typically an algorithm utilized in the field of Computer
              Science, it could prove useful in one&apos;s daily life!
              <br />
              I, for one, as an over-planner, would like a good reason to not
              prepare for every apocalypse possible.
            </div>
            <br />
            <div>
              Fun fact: UNIX and Windows employ this approach to deal with
              deadlocks!
            </div>
            <br />
            <div>
              The name is in reference to the <i>false</i> legend of ostriches
              sticking their heads in the sand when they sense danger. The
              ostrich effect however, is a very true and very real cognitive
              bias which hits a little too close to home.
            </div>
          </div>
          {/* Ostrich Algorithm End */}

          <div>Roko&apos;s Basilisk</div>
          <div>Size of infinites</div>
          <div>Ship of Theseus</div>
          <div>
            This is the random facts page with random things I find interesting.
          </div>
        </div>
      </main>
      <FooterBlog />
    </>
  );
}
