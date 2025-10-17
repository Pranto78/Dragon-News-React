import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
      <div className="bg-base-200 flex items-center gap-3 p-2">
        <p className="text-base-100 bg-secondary py-2 px-3">Latest</p>
        <Marquee className='flex gap-5 font-bold' pauseOnHover={true}>
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain!     
          </p>
          <p>
            Match Highlights: Brazil vs Argentina — as it happened ! Match
            Highlights: Brazil vs Argentina!    
          </p>
          <p>
            Match Highlights: England vs Italy — as it happened ! Match
            Highlights: England vs Italy!    
          </p>
        </Marquee>
      </div>
    );
};

export default LatestNews;