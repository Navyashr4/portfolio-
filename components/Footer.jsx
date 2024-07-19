import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 text-xl gap-8 justify-between items-center text-center md:text-left">
      <Link href="/">
        Navya Vedachala<span className="text-accent">.</span>
      </Link>
      <div>
        Full-stack Software Developer<span className="text-accent">.</span>
      </div>
      {/* <div className="flex flex-col">
        <p>
          All rights reserved<span className="text-accent">.</span>
        </p>
        <p>2024</p> 
      </div>*/}
      <div>
        Say Hi<span className="text-accent">!</span>
      </div>
      <div className="flex flex-col">
        <Link
          className="text-decoration: underline hover:text-accent"
          href="/resume"
        >
          Resume
        </Link>
        <Link className="text-decoration: underline hover:text-accent" href="">
          LinkedIn
        </Link>
        <Link
          className="text-decoration: underline hover:text-accent"
          href="mailto:your-email@example.com"
        >
          Email
        </Link>
      </div>
    </div>
  );
};

export default Footer;
