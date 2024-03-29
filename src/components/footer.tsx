export default function Footer() {
  return (
    <div className="flex flex-col gap-4 place-items-center text-sm text-slate-400 font-normal font-sans text-center py-6 leading-6">
      <div className="">Thanks for stopping by!</div>
      <div className="place-self-center">
        <a
          href="mailto: tqwu@ucsc.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 bg-slate-400 hover:bg-slate-300 text-navy font-normal py-2 px-4 rounded-full border border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            GET IN TOUCH
          </button>
        </a>
      </div>
      <div className="">
        Check out the code for this site{" "}
        <a
          href="https://github.com/tqwu/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#79baec" }}
        >
          here
        </a>
        !
      </div>
    </div>
  );
}
