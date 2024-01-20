'use client';
import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai';
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";
import zion from '../public/zion.jpg';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mark Gustaferro&apos;s personal website</title>
        <meta name="description" content="Mark Gustaferro's personal website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="pt-10 mb-9 flex justify-between text-black dark:text-white">
            <a href="#"><h1 className="text-xl font-semibold">Mark Gustaferro</h1></a>
            <ul className="flex items-center">
              <li><a className= "text-black ml-8 dark:text-white" href="/blog">Blog</a></li>
              <li><a className= "text-black ml-8 dark:text-white" href="resume.pdf" download>Resume</a></li>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl ml-8"/></li>
            </ul>
          </nav>
          <div>
            <Image className="relative mx-auto object-contain w-20 h-20 rounded-full border border-white border-solid" src={zion} alt="Picture of me"/>
          </div>
          <div className= "text-black py-3 px-5 max-w-2xl mx-auto dark:text-white">
            <h3 className="font-medium text-base">About Me</h3>
            <br></br>
            <p>
              I&apos;m currently working as the Chief of Staff at Sora Finance, a liabilities management platform
              revolutionizing the way financial advisors serve their clients.  I live in San Francisco and, in my free time, I enjoy
              singing, playing guitar, skiing, cooking, reading the New Yorker, watching films, and doing math puzzles.
            </p>
          </div>
          <div className="text-gray-600 pt-5 text-3xl flex justify-center gap-3 dark:text-white">
            <button onClick={() => window.location.href = 'mailto:mark.gustaferro@aya.yale.edu'}><AiFillMail/></button>
            <a href="https://www.linkedin.com/in/mark-gustaferro-3894aa1a5" target="blank_"><AiFillLinkedin/></a>
          </div>
        </section>
        

        <section>
          <div></div>
        </section>
      </main>
    </div>
  );
}
