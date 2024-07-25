import nuthread from '../app/images/nuthread_home_screen.jpg'
import finazon from '../app/images/finazon_stock_market_dash.jpg'
import nextjs from '../app/images/icons/icons8-nextjs-96.png'
import reactjs from '../app/images/icons/icons8-react-js-100.png'
import stripe from '../app/images/icons/icons8-stripe-100.png'
import tailwindcss from '../app/images/icons/icons8-tailwindcss-96.png'
import typescript from '../app/images/icons/icons8-typescript-100.png'
import logo from '../app//images/Julian_Borner_Logo.png'
import github from '../app/images/icons/icons8-github-100.png'
import instagram from '../app/images/icons/icons8-instagram-100.png'
import linkedin from '../app/images/icons/icons8-linkedin-100.png'
import Upwork from '../app/images/icons/upwork.png'
import fiverr from '../app/images/icons/fiverr.png'
import luca from '../app/images/luca-bravo-unsplash.jpg'
import pankaj from '../app/images/pankaj-patel-unsplash.jpg'
import mohammad from '../app/images/mohammad-unsplash.jpg'
import lavi from '../app/images/lavi-unsplash.jpg'
import lav_large from '../app/images/lavi-large.jpg'
import webdev from '../app/images/icons/web-development.png'
import digital from '../app/images/icons/digital-marketing.png'
import seo from '../app/images/icons/search-engine-optimization.png'
import img1 from '../app/images/img1.jpg'
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skillsets", link: "#skillsets" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: img1,
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: nextjs,
      spareImg: reactjs,
    },
  
    {
      id: 5,
      title: "Currently building a Nextjs Ecommerce website, a social media platform for gamers, and a video chat app for desktop and mobile",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: pankaj,
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Nuthread By Julian",
      des: "A full-stack and fully functioning Ecommerce web-shop with a modern minimalist design and Stripe.js payment integration",
      img: nuthread,
      iconLists: [nextjs,reactjs,stripe,tailwindcss,typescript],//Next,React,TypeScript, Stripe
      link: "https://nuthread-by-julian.vercel.app/",//fix
    },
    {
      id: 2,
      title: "Finazon Stock Market Dashboard",
      des: "A stock market dashboard utilizing the Finazon API.",
      img: finazon,
      iconLists: [nextjs,reactjs,tailwindcss,typescript],//Next, React & TypeScript
      link: "https://finazon-stock-dashboard.vercel.app/home",
    },
   /* {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
    */
  ];
  
  export const skillsets = [ //Rename to skillsets and specializations: Web Development, Search Engine Optimization and Digital Marketing
    {//Replace quote with Skill and description
      skills:
        "I create responsive, user-centric web apps via React, Next.js and Node. After deployment, I use tools such as Google Analytics and Google Data Studio to monitor site traffic and all performance metrics to continuously tailor the user interface and overall experience to the end-users needs.",
      desc: "Web Development",
      img:webdev
    },
    {
      skills:
        "When marketing your web app, I use the latest tools such as Hootsuite, Google Ads and Sprout to create a visually appealing ad campaign that draws in as many potential users as possible. ",
      desc: "Digital Marketing",
      img:digital
    },
    {
      skills:
        "I use tools such as Google Search Console, SemRush and others to ensure your users can easily find your web app, and understand everything you want them to know before their first click. ",
      desc: "Search Engine Optimization",
      img:seo
    },
   
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Upwork",
      img: Upwork,
      nameImg: "/Upwork",
    },
    {
      id: 2,
      name: "Fiverr",
      img: fiverr,
      nameImg: "/Fiverr",
    },
   
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Freelance Web Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: logo,
    },
    
  ];
  
  export const socialMedia = [//replace wiht new images.
    {
      id: 1,
      img: github,
    },
    {
      id: 2,
      img: linkedin,
    },
    {
      id: 3,
      img: instagram,
    },
  ];