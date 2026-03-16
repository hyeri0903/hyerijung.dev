'use client';

import Mbti2trip from "./projects/Mbti2trip";
import MobilePartyCard from "./projects/MobilePartyCard";
import MobileWeddingInvitations from "./projects/MobileWeddingInvitations";
import { aosProps } from '../utils/aosConfig';
import BloomDiary from "./projects/BloomDiary";

export default function Projects() {
  return (
    <section className="px-4 py-16 bg-gray-200 dark:bg-black transition-colors duration-200">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>
        {/* 프로젝트 박스 */}
      
        <div className="flex flex-col gap-y-4 md:gap-y-4">
          <div {...aosProps}><BloomDiary /></div>
          <div {...aosProps}><MobilePartyCard /></div>
          <div {...aosProps}><MobileWeddingInvitations /></div>
          {/* <div {...aosProps}><Mbti2trip /></div> */}
         
        </div>
        
      </div>
    </section>
  );
}
