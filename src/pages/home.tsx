import { useStyler } from "../styles/styler";

const Home = () => {
  useStyler();
  return (
    <article>
      <section className="h-100vh max-md:h-100% md:h-100vh flex center fd-column max-md:fd-column md:fd-row jc:[flex-start] max-md:jc-[flex-start] gap-2rem p-2rem pt-5rem max-md:pt-5rem md:pt-0">
        <div className="w-full flex ai-center col jc:[flex-start] max-md:jc-[flex-start] md:jc-center">
          <header className="w-full ta-center max-md:ta-center md:ta-left">
            <h1 className="text-4xl tw-balance w-mx-600px">
              TenoxUI Components library, it's <span className="tc-$primary-500 underline">Fast!</span>
            </h1>
            <p className="mt-8px w-mx-500px">
              Explore customizable components. Less configuration, fast, easy to customize, and rich components built
              with shadcn/ui with tenoxui as styles.
            </p>
          </header>
          <div className="w-full flex gap-1rem mt-2rem md:jc-[flex-start] max-md:jc-center">
            <a href="/get-started" className="btn btn-secondary">
              Explore Components
            </a>
            <a href="https://github.com/nousantx/so-called-ui" className="btn btn-ghost gap-6px">
              <i className="txi ti-github_square text-base"></i>
              GitHub
            </a>
          </div>
        </div>
        <div className="w-full flex wrap gap-2rem md:mt-0 max-md:mt-3rem">
          <div className="w-full flex center wrap gap-1rem">
            <p className="badge badge-primary">
              <span className="ms-sharp tc-$primary-500">bolt</span>
              Fast
            </p>
            <p className="badge badge-primary">
              <span className="ms-sharp tc-$primary-500">draw</span>
              Customizable
            </p>
            <p className="badge badge-primary">
              <span className="ms-sharp tc-$primary-500">devices</span>
              Responsive
            </p>
            <p className="badge badge-primary">
              <span className="ms-sharp tc-$primary-500">style</span>
              No CSS
            </p>
          </div>

          <div className="w-full bg-$neutral-50 tc-$neutral-950 p-1rem rounded-md relative">
            <p className="absolute text-sm font-medium rt--45deg t-0 l--1rem tc-$neutral-950 bg-$primary-500 px-12px br-4px">
              Yooo!
            </p>
            <header className="ta-center">
              <h2 className="text-lg font-medium">Try shadcn/ui</h2>
              <p className="tc-$neutral-600 text-sm">Design by shadcn/ui, style with tenoxui.</p>
            </header>
            <div className="flex ai-center gap-8px mt-1rem">
              <div className="w-full flex ai-center gap-5px">
                <input
                  id="link"
                  defaultValue="https://ui.shadcn.com"
                  readOnly
                  className="flex h-40px w-full rounded-md bs-solid bw-1px bc-$neutral-200 focus:bc-$neutral-100 bg-background px-12px py-8px text-sm focus:outline-none focus:shadow-[0\_0\_0\_2px\_var(--primary-500)] tr-time-0.3s"
                />
              </div>
              <a href="https://ui.shadcn.com" className="btn btn-secondary-dark icons">
                <span className="ms-round text-base">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="w-full flex center gap-1rem none">
            <div className="w-full flex col bg-$neutral-800 p-8px gap-8px rounded-md"></div>
            <div className="w-full bg-$primary-500 p-1rem rounded-md"></div>
          </div>
        </div>
      </section>
      <section className="flex center col p-2rem">
        <div className="flex wrap center gap-1.5rem gap-2rem mt-1rem">
          <p className="text-sm flex center gap-4px filter-[grayscale(100%)] hover:filter-none tr-time-0.3s tc-$primary-500">
            <span className="ms-round text-lg">ssid_chart</span>
            Cliff UI
          </p>
          <p className="text-sm flex center gap-4px filter-[grayscale(100%)] hover:filter-none tr-time-0.3s tc-$primary-500">
            <span className="ms-round text-lg">square</span>
            Tupat.dev
          </p>
          <p className="text-sm flex center gap-4px filter-[grayscale(100%)] hover:filter-none tr-time-0.3s tc-$primary-500">
            <span className="ms-round text-lg">bolt</span>
            Ener.gg
          </p>
          <p className="text-sm flex center gap-4px filter-[grayscale(100%)] hover:filter-none tr-time-0.3s tc-$primary-500">
            <span className="ms-round text-lg">download_for_offline</span>
            eXDown
          </p>
          <p className="text-sm flex center gap-4px filter-[grayscale(100%)] hover:filter-none tr-time-0.3s tc-$primary-500">
            <span className="ms-round text-lg">mail</span>
            V-call.me
          </p>
          <p className="text-sm flex center gap-4px filter-[grayscale(100%)] hover:filter-none tr-time-0.3s tc-$primary-500">
            <span className="ms-round text-lg">upcoming</span>
            Twik Event
          </p>
          <p className="text-sm flex center gap-4px filter-[grayscale(100%)] hover:filter-none tr-time-0.3s tc-$primary-500">
            <span className="ms-round text-lg">package_2</span>
            DIMS.id
          </p>
        </div>
        <p className="text-xs flex center w-full gap-4px tc-$neutral-600 mt-2rem">
          <span className="ms-round text-xs">info</span>
          Just examples/not real companies.
        </p>
      </section>
      <section className="p-2rem none">
        <header>
          <h2 className="text-3xl">Features</h2>
          <p className="text-base mt-8px">Fast, responsive, and no geberated css file :D</p>
        </header>
      </section>
    </article>
  );
};

export default Home;
