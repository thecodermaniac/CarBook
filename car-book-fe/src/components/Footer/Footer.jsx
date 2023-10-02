import React from 'react'
import { footerLinks, socials } from "./FooterLinks";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="flex flex-col gap-4 bg-primarycolor text-white ">
      <div className="h-full w-full flex flex-col justify-between gap-4 p-8 lg:px-[12rem] rounded-t-[2rem] shadow-[0_35px_70px_-2px_rgba(0,0,0)] font-normal text-lg text-left bg-mainColor">
        <div className="h-full w-full flex flex-col md:flex-row items-start ">
          <div className="flex flex-col gap-4 items-start justify-between w-full flex-wrap flex-grow-1 basis-[70%] p-8 px-0 md:px-8 md:max-h-[12rem] overflow-hidden">
            {footerLinks.map((link, idx) => (
              <Link to={link.link} key={idx}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="pt-8 pl-0 md:pl-8 md:pt-0 border-t md:border-l flex flex-col md:border-t-0 border-fuchsia-400 w-full basis-[15%] gap-4">
            <h2 className="uppercase">Our Socials</h2>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <span className="w-6 hover:-translate-y-2 transition-all">
                  <img src={social.icon} alt={social.name} />
                </span>
              ))}
            </div>
            <div>
              <h2>Email:</h2>
              <a href="mailto:hey@matricula.co.in">hey@carwala.co.in</a>
            </div>
            <div>
              <h2>Contact No:</h2>
              <h2>+91 7439709486</h2>
              <h2>+91 8100482638</h2>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-neutral-300">
          &copy; {new Date().getFullYear()} CarWala . All rights reserved | Site maintained by <a href="https://serein.io/" target="_blank">thecodermaniac</a>
        </p>
      </div>
    </section>
  )
}

export default Footer