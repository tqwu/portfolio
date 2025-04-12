import Image from "next/image";

import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";

export default function Random() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-indigo-100 font-mono font-light">
        <div className="py-8 text-sm">
          <div className="text-center pb-6 px-2">
            A page of random facts, theories, and ideas I find interesting!
          </div>

          {/* Pigeonhole Principle Begin */}
          <div className="py-6 bg-indigo-200 px-6 md:px-36">
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
              When I first learned this theorem back in undergrad, I thought it
              was simply common sense, but it turns out to have a lot of
              interesting applications!
            </div>
            <br />
            <div>A popular example is counting hair.</div>
            <div>
              Let&apos;s say that no one on this planet has more than 1 million
              hairs on their head. The population of the Bay Area is well over a
              million. By the pigeonhole principle, there must be at least two
              people who have the exact same number of hairs on their head
              (since at least two people have to be in the same
              &quot;pigeonhole&quot;). You most likely have a hair-count twin!
              <br />
              <br />
              This seemingly simple theorem goes on to influence fields like
              computer science and quantum mechanics!
            </div>
          </div>
          {/* Pigeonhole Principle End */}

          {/* Ostrich Algorithm Begin */}
          <div className="py-12 px-6 md:px-36">
            <div className="grid grid-cols-3">
              <div className="text-xl col-span-1">OSTRICH ALGORITHM</div>
              <div className="pl-4 col-span-1 flex">
                <Image
                  className="place-self-start"
                  src={"/ostrich.png"}
                  alt=""
                  width={40}
                  height={40}
                />
                <span>???</span>
              </div>
            </div>
            <br />
            <div>
              Simple and straightforward: this strategy is to simply ignore a
              problem that happens rarely.
            </div>
            <br />
            <div>
              Although typically an algorithm used in the field of Computer
              Science, it seems to be a strategy apply it towards their daily
              lives.
            </div>
            <br />
            <div>
              Fun fact: UNIX and Windows employ this approach to deal with
              deadlocks!
            </div>
            <br />
            <div>
              The name is in reference to the <i>false</i> legend of ostriches
              sticking their heads in the sand when they sense danger.
              <br />
              There is however, a very real <i>ostrich effect</i>, which is a
              cognitive bias where one avoids useful information because it
              could be potentially unpleasant.
            </div>
          </div>
          {/* Ostrich Algorithm End */}

          {/* Size of Infinities Begin */}
          <div className="py-6 bg-indigo-200 px-6 md:px-36">
            <div className="text-xl">SIZE OF INFINITIES</div>
          </div>
          {/* Size of Infinities End */}

          {/* Roko Basilisk Begin */}
          <div className="py-6 px-6 md:px-36">
            <div className="text-xl">ROKO&apos;S BASILISK</div>
          </div>
          {/* Roko Basilisk End */}

          {/* Ship of Theseus Begin */}
          <div className="py-6 bg-indigo-200 px-6 md:px-36">
            <div className="text-xl">SHIP OF THESEUS</div>
          </div>
          {/* Ship of Theseus End */}

          {/* Cowrie shells Begin */}
          <div className="py-6 px-6 md:px-36">
            <div className="text-xl">COWRIE SHELLS</div>
          </div>
          {/* Cowrie shells End */}

          {/* Code of Hammurabi Begin */}
          <div className="py-6 bg-indigo-200 px-6 md:px-36">
            <div className="text-xl">CODE OF HAMMURABI</div>
          </div>
          {/* Code of Hammurabi End */}

          {/* Tulip Mania Begin */}
          <div className="py-6 px-6 md:px-36">
            <div className="text-xl">TULIP MANIA</div>
          </div>
          {/* Tulip Mania End */}
        </div>
      </main>
      <FooterBlog />
    </>
  );
}
