import React from 'react';
import Image from 'next/image';

const Test = () => {
    return (
        <div className='items-center bg-gray-200 justify-center flex h-screen'>


           {/* <Image
            src="/images/1.png"
            alt="Himanshu Gangwar"
            width={200}
            height={200}
            className="rounded-full object-cover shadow-lg border-4 border-primary/20"
            data-ai-hint="profile picture"
          /> */}
          {/* <div className="z-0 h-80 w-80 bg-orange-100 relative p-2">
<Image
            src="/images/1.png"
            alt="Himanshu Gangwar"
            fill
            className="z-20 object-cover h-64 w-64 rounded-full "
            data-ai-hint="profile picture" 
          />
          <div className="z-10 top-1/4 w-64 h-64 rounded-full absolute inset-0 m-auto bg-red-300"></div>
          </div>
        </div> */}
        <div className="z-0 h-80 w-80 relative p-2  rounded-full">
<Image
            src="/images/1.png"
            alt="Himanshu Gangwar"
            fill
            className="z-20 rounded-full object-center object-scale-down -ml-0.5 "
            data-ai-hint="profile picture" 
          />
          <div className="z-10 h-full w-full rounded-full p-3 pb-10 mt-12 overflow-hidden ">
            <div className="h-full w-full bg-secondary rounded-full shadow-primary/40 shadow-xl"></div>
          </div>
          </div>
        </div>
    );
};

export default Test;