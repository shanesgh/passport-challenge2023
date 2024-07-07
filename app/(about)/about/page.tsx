import AboutParticles from "@/components/particles/AboutParticles";
import aboutus from "@/public/aboutus.jpg";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="relative h-[calc(100vh-85px)]">
        <AboutParticles />
        <div className="text-mono tracking-widest absolute top-5 left-5 -rotate-45 text-[55px] hover:animate-pulse rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] z-40 ">
          About
          <span className="pl-3 rotate-90 inline-block  text-[70px]   ">
            Us
          </span>
        </div>
        <div className="bg-gray-300 absolute left-[20%] top-0 right-[20%] rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0)] bottom-[15%] ring-1 ring-slate-200 z-40 ">
          <div className="flex flex-col items-center p-4 relative">
            {/* <Image
            fill
            src={aboutus}
            objectFit="cover"
            className="rounded-md opacity-20"
            alt="about us"
          /> */}
            <header className="tracking-widest text-center rounded-md bg-white underline  mb-4">
              Our Journey to become a greater assistance with our clients drew
              us closer to creating technologically sound solutions
            </header>
            <div className=" flex flex-col items-center space-y-2">
              <div className="text-center">
                <span className="bg-white/90 text-black">
                  Here is a possible about us page: We are a government agency
                  that uses IT to make our services more accessible and
                  convenient for our clients. We believe that technology can
                  improve the quality and efficiency of public service delivery,
                  and we are committed to finding innovative solutions that meet
                  the needs and expectations of our diverse community.
                </span>
              </div>
              <div className="px-4 text-center">
                <span className="bg-white/90 text-black">
                  Our digitized journey began when we launched our first online
                  platform that allowed clients to make appointments online. We
                  are now making an efforts to expand our digital offerings to
                  include, renewal status, online payments, chat support,
                  feedback mechanisms and more. We have also invested in
                  upgrading our IT infrastructure, enhancing our cybersecurity,
                  and training our staff to use the latest tools and techniques.
                </span>
              </div>
              <div className="px-12 text-center">
                <span className="bg-white/90 text-black">
                  Our vision is to be a leading government agency that leverages
                  IT to provide excellent service to our clients. We are
                  constantly learning from our experiences, listening to our
                  feedback, and collaborating with our partners to improve our
                  processes and products. We are proud of what we have achieved
                  so far, and we look forward to serving you better in the
                  future.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
