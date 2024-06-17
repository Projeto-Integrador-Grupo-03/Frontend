function News(){
    return(
        <div>
            <article className="w-full bg-sky-700 py-12 text-white flex justify-center">
              <div className="container flex flex-wrap items-center  justify-between">
                <div className="mb-6 flex flex-col grap-6">
                  <h4 className="text-3xl font-semibold sm:text-4x1">
                    Inscreva-se na nossa Newsletter 🌴
                  </h4>
                  <p className="max-w-[60ch] text-sm text-[#E7F0ED] sm:text-base">
                    Receba dicas de sustentabilidade e ofertas especiais. Faça
                    parte da mudança!
                  </p>
                </div>
                <div className="relative order-1 flex w-full max-w-[580px] flex-wrap rounded-xl bg-white text-foreground lg:order-none lg:flex-1">
                  <input
                    className="font-roboto w-full rounded-xl border border-solid border-border p-6 text-sm font-medium outline-none placeholder:font-medium placeholder:text-[#4B5563] sm:text-base"
                    type="text"
                    placeholder="Digite seu e-mail"
                  />
                  <button className="group absolute right-1 top-1 flex flex-wrap rounded-xl bg-sky-900 px-6 py-5 text-sm font-medium uppercase text-white outline-none hover:bg-sky-950 sm:text-base">
                    Inscrever
                  </button>
                </div>
              </div>
            </article>
          </div>
    );
}

export default News;