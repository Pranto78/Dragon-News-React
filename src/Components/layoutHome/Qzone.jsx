import React from 'react';
import oneLogo from '../../assets/class.png'
import twoLogo from '../../assets/swimming.png'
import threeLogo from '../../assets/playground.png'

const Qzone = () => {
    return (
      <div className="bg-base-200 p-3">
        <h2 className="font-bold text-xl mb-4">Qzone</h2>

        <div className="space-y-8">
          <img src={oneLogo} alt=""  className='mx-auto' />
          <img src={twoLogo} alt="" className='mx-auto' />
          <img src={threeLogo} alt="" className='mx-auto' />
        </div>
      </div>
    );
};

export default Qzone;