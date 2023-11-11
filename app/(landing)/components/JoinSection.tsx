import React from "react";
import Round from './round';
import { Github, X, Twitter, Instagram, Linkedin, Youtube, } from "lucide-react";

const JoinSection = () => {
  return (
    
    <div className="w-full h-[564px] flex justify-center items-center bg-grid-bg bg-center bg-cover">
    <Round className='absolute right-[9rem] w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />
    <Round className='absolute -left-[4rem] w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />
        
    <div className="w-[600px] h-80 relative text-center flex flex-col justify-center items-center">
      <div className="h-20 flex gap-2">
        <div className="text-white font-medium text-5xl ">
          Join the
        </div>
        <div className="text-5xl font-bold font-Manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
          Community
        </div>
      </div>

  <div className="w-[636px] text-neutral-400 text-lg font-medium font-Manrope">
    Join the conversation in our community groups. Share ideas, thoughts,
    feedback and help us grow this unique network. You’ll find us on the
    usual channels below.
  </div>

  <div className="w-[600px] h-16 flex justify-center items-center gap-12 pt-12">
    <Github className="w-16 h-16 relative" />
    <Linkedin className="w-16 h-16 relative" />
    <X className="w-16 h-16 relative" />
    <Youtube className="w-16 h-16 relative"/>
    </div>
  </div>
</div>

  );
};

export default JoinSection;
