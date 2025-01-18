export default function App() {
  return (
    <>
      <div className="page">
        <section className="bg-slate-400 w-[100vw] h-[100vh]">
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[800px] h-[800px] flex justify-center items-start origin-center transform-style-3d will-change-transform z-10">
            <div className="absolute w-[5.5%] h-[52.75%] bg-green-400 rounded-[1000px] will-change-transform"></div>
          </div>

          <div className="absolute top-[calc(50%-20px)] left-1/4 w-[22.5%]">
            <h1>
              <span>time to</span>be brave
            </h1>
            <div>
              <p className="relative mt-3 translate-x-5 opacity-0">
                sadkjbsdfkjhdsfkjhdslfkj
              </p>
              <p className="relative mt-3 translate-x-5 opacity-0">
                sadkjbsdfkjhdsfkjhdslfkj
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center opacity-0">
            <h1 className="text-[10vw] tracking-tight">LEEDONGJIN</h1>
          </div>
        </section>

        <section className="flex justify-center items-center bg-white w-[100vw] h-[100vh]">
          <p className="bg-red-300">(다음 섹션)</p>
        </section>
      </div>
    </>
  );
}
