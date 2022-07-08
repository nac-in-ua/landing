import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="font-roboto font-thin flex h-screen flex-col text-slate-600">
      <Head>
        <title>nac development</title>
        <meta name="description" content="we do all job, just sit and relax!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-auto flex flex-col items-center text-center">
        <h1 className="mt-16 text-4xl">NAC Development</h1>
        <h2 className="mt-8 mb-24">
          we do our the job. just sit back and relax.
        </h2>

        <div className="flex flex-col">
          <div className="flex relative">
            <Image
              className="animate-spin-slow"
              src="/img/gear1.svg"
              alt="nac gear 1"
              width={136}
              height={136}
            />
          </div>
          <div className="flex relative left-[80px] bottom-[33px]">
            <Image
              className="animate-reverse-spin-slow w-10"
              src="/img/gear2.svg"
              alt="nac gear 1"
              width={96}
              height={96}
            />
          </div>
        </div>
      </main>
      <footer className="mb-2 flex flex-col justify-center text-center">
        <a href="mailto: nac.in.ua@gmail.com">nac.in.ua</a>
      </footer>
    </div>
  );
};

export default Home;
