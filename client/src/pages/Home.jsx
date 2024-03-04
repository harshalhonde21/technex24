import CountUp from 'react-countup';



export const Home = () => {
  const data = [
    {
      num: 39,
      ext: "",
      subHeading: "High Court Complexes",
    },
    {
      num: 6.2,
      ext: "M",
      subHeading: "HC Pending Cases",
    },
    {
      num: 38.23,
      ext: "M",
      subHeading: "HC Disposed Cases",
    },
    {
      num: 58.2,
      ext: "K",
      subHeading: "HC Cases Listed Today",
    },
    {
      num: 1.07,
      ext: "M",
      subHeading: "District Court Complexes",
    },
    {
      num: 3519,
      ext: "",
      subHeading: "DC Pending Cases",
    },
    {
      num: 44.58,
      ext: "M",
      subHeading: "DC Disposed (Last Month)",
    },
    {
      num: 1.32,
      ext: "M",
      subHeading: "DC Cases Listed Today",
    },
  ];

  return (
    <>
      <div className="min-h-screen mx-12 pt-24 ">
        <div className="flex flex-col ">
          <div className="bg-ImageSC min-h-[60vh] over">
            {/* <img src="/assets/supremeCourt.png" alt="" /> */}
            <div className="flex gap-3 px-4 pt-80 translate-y-16">
              {data.map((e) => (
                <div className="w-40  bg-white rounded-md shadow-md shadow-gray-600 pt-7 pb-2 text-center flex-col flex gap-5">
                  <div className="text-3xl font-extrabold px-2 gradient-font ">
                    <CountUp start={0} end={e.num} duration={2.5} />  {e.ext}
                  </div>
                  <div className="text-xs px-8 font-semibold subhead-color">
                    {e.subHeading}
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        </div>
        <div className='mt-24'>
            <div className='text-center text-4xl font-semibold'>
                Latest Updates
            </div>
            <div className='pt-4'>

                <div className='flex justify-between gap-5 p-7'>
                    <img src="/assets/youtubeCourt.png" className='w-1/2' alt="" />
                    <img src="/assets/youtubeCourt.png" className='w-1/2' alt="" />
                </div>

            </div>
        </div>

      </div>
    </>
  );
};
