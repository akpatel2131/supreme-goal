const ContactInfo = () => {
  return (
    <section className="bg-sky-700 p-8">
      <div className="grid grid-cols-12 px-4  md:px-0 rounded-[10px] 2xl:grid-cols-11 py-8 md:py-10 lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem]">
        <div className="grid grid-cols-1 gap-y-10 col-start-1 col-end-13 md:grid-cols-2 md:col-start-2 md:col-end-12 2xl:col-end-11 text-white mb-3">
          <div className="text-white">
            <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
            <div className="h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8"></div>
            <p className="sg-translate block font-normal text-base md:text-lg 2xl:text-2xl">
              For general enquiries
            </p>

            <div className="list-none flex flex-col  gap-3 md:gap-5 2xl:gap-7 pt-5  md:pt-7 2xl:pt-8">
              <div className="flex flex-col gap-px items-start">
                <p className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
                  Address
                </p>
                <p className="sg-translate font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                  110, 16th Road, Chembur, Mumbai - 400071
                </p>
              </div>

              <div className="flex flex-col gap-px items-start">
                <p className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
                  Phone:
                </p>
                <p className="sg-translate font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                  +91 22 25208822
                </p>
              </div>

              <div className="flex flex-col gap-px items-start">
                <p className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
                  Email:
                </p>
                <p className="sg-translate font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                  info@superenergygroup.co.in
                </p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="sg-translate text-white placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white border-white border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="sg-translate text-white placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white border-white border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="sg-translate text-white placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white border-white border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="sg-translate text-white placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white border-white border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none resize-none"
                />
              </div>
              <div className="flex justify-center md:grid relative  place-content-center md:place-content-start">
                <button
                  type="submit"
                  className="flex justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed relative outline-none !bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:!bg-white focus:!bg-white text-white stroke-dark hover:stroke-white font-semibold !hover:bg-white hover:border-transparent border border-white lg:text-base text-sm  px-8 md:px-12 py-3"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
