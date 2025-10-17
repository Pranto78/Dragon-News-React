import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
      <div>
        <h2 className="font-bold mb-5">Login</h2>

        <div className="space-y-3">
          <button className="btn w-full btn-outline btn-info">
            <FaGoogle size={24}></FaGoogle>
            Login with Google
          </button>
          <button className="btn w-full btn-outline btn-secondary"><FaGithub size={24}></FaGithub>
            Login with Github
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;