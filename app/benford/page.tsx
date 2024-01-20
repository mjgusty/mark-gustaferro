'use client';
import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai';
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";

export default function Page() {
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
            <a href="../"><h1 className="text-xl font-semibold">Mark Gustaferro</h1></a>
              <ul className="flex items-center">
                <li><a className= "text-black ml-8 dark:text-white" href="./blog">Blog</a></li>
                <li><a className= "text-black ml-8 dark:text-white" href="resume.pdf" download>Resume</a></li>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl ml-8"/></li>
              </ul>
            </nav>
            <div className="text-black py-5 max-w-2xl mx-auto dark:text-white">
              <h3 className="font-medium text-xl">Using Benford&apos;s Law to Identify Stolen Elections</h3>
              <p className="text-sm pt-2">
                        How to use the natural frequency of digits to identify election fraud.
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
  