import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import ProjectCard from '@/components/projectCard';
import SocialButton from '@/components/socialButton';
import ProjectModal from '@/components/projectModal';

import wunderpassImage from '/public/projects/wunderpass/showcase.png';
import wunderpassLandingPageImage from '/public/projects/wunderpass/landingPage/showcase.png';
import wundernftImage from '/public/projects/wundernft/showcase.png';
import casamaImage from '/public/projects/casama/showcase.png';
import coolheadImage from '/public/projects/coolhead/showcase.png';
import athomeImage from '/public/projects/athome/showcase.png';
import cleancarAppImage from '/public/projects/cleancarApp/showcase.png';
import erpImage from '/public/projects/erp/showcase.png';
import cleancarBackendImage from '/public/projects/cleancarBackend/showcase.png';
import ourtaskImage from '/public/projects/ourtask/showcase.png';
import barcrawlerImage from '/public/projects/barcrawler/showcase.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moritz Löchner</title>
        <meta name="description" content="Web Developer" />
      </Head>
      <main className="max-w-screen-xl mx-auto px-5">
        <div className="py-3 sm:py-16 flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="w-full">
            <h1 className="text-white text-3xl sm:text-6xl">Moritz Löchner,</h1>
            <h1 className="text-gray-300 text-3xl sm:text-6xl">
              <Typewriter
                options={{
                  strings: [
                    'Fullstack Developer',
                    'Co-Founder',
                    'Tech Enthusiast',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="flex gap-3 mt-3 flex-wrap">
              <SocialButton
                Icon={BsGithub}
                href="https://github.com/moritzdotcom"
              />
              <SocialButton
                Icon={BsLinkedin}
                href="https://www.linkedin.com/in/moritz-loechner/"
              />
              <SocialButton
                Icon={IoMdMail}
                href="mailto:moritz.loechner@gmail.com"
              />
              <SocialButton Icon={BsTelegram} href="https://t.me/mo_loc" />
            </div>
          </div>
          <div className="w-full max-w-xs sm:max-w-md">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <defs>
                <pattern
                  id="img1"
                  patternUnits="userSpaceOnUse"
                  width="100%"
                  height="95%"
                >
                  <image
                    href="/me.png"
                    x="0"
                    y="7%"
                    width="100%"
                    height="95%"
                  />
                </pattern>
              </defs>
              <path fill="url(#img1)">
                <animate
                  attributeName="d"
                  dur="20000ms"
                  repeatCount="indefinite"
                  values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
                ></animate>
              </path>
            </svg>
          </div>
        </div>

        <section id="about" className="py-5 my-5">
          <h1 className="text-white text-2xl sm:text-4xl mb-3">About Me</h1>
          <p className="text-gray-300 text-base sm:text-lg text-justify">
            Hi there! My name is Moritz, and I am a Full Stack web developer. I
            started my career journey as a business student, but since taking a
            programming course in university I discovered my passion for coding.
            That experience led me to participate in the LeWagon coding bootcamp
            in Berlin, where I developed my skills and gained hands-on
            experience building Web Applications.
            <br />
            Since then, I have been on a mission to continuously improve my
            technical abilities and stay up-to-date with the latest
            technologies. I have worked on a variety of projects, ranging from
            small startups to large corporations, and I am confident in my
            ability to turn ideas into high-quality, functional web
            applications.
          </p>
        </section>
        <section id="projects" className="w-full py-5 my-5">
          <h1 className="text-white text-2xl sm:text-4xl mb-5">My Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 gap-y-8">
            <ProjectCard
              name="WunderPass Web App"
              link="/projects/wunderpass"
              description="A Web Application to manage your decentralized Identity and connect to Applications in the WunderPass ecosystem."
              image={wunderpassImage}
              tags={['React', 'Tailwind']}
            />
            <ProjectCard
              name="WunderPass Website"
              link="/projects/wunderpassLanding"
              description="A Website for the WunderPass Web App."
              image={wunderpassLandingPageImage}
              tags={['React', 'Tailwind']}
            />
            <ProjectCard
              name="WunderPass NFT"
              link="/projects/wundernft"
              description="An NFT Project on the Polygon Blockchain."
              image={wundernftImage}
              tags={['Blockchain', 'React', 'Tailwind']}
            />
            <ProjectCard
              name="Casama"
              link="/projects/casama"
              description="A Blockchain based Web Application for sports prediction games."
              image={casamaImage}
              tags={['Blockchain', 'React', 'Tailwind']}
            />
            <ProjectCard
              name="Coolhead.finance"
              link="/projects/coolhead"
              description="A Web Application to create or follow Investment rules and get notified when they get triggered."
              image={coolheadImage}
              tags={['React', 'Prisma', 'Stripe', 'Tailwind']}
            />
            <ProjectCard
              name="AtHome Website"
              link="/projects/athome"
              description="A modern Website for a property management company."
              image={athomeImage}
              tags={['React', 'Tailwind']}
            />
            <ProjectCard
              name="CleanCar Web App"
              link="/projects/cleancarApp"
              description="The ❤️ of CleanCar's IT Infrastructure to manage invoices, employees, daily closings, tasks and much more."
              image={cleancarAppImage}
              tags={['Ruby on Rails', 'SQL']}
            />
            <ProjectCard
              name="CleanCar ERP Integration"
              link="/projects/erp"
              description="Automated the data flow from multiple sources into the Commarch ERP system."
              image={erpImage}
              tags={['Ruby', 'Business Automation']}
            />
            <ProjectCard
              name="CleanCar App Backend"
              link="/projects/cleancarBackend"
              description="A simple interface for CleanCar's marketing team to manage promotions and opening times displayed on the iOS and Android App."
              image={cleancarBackendImage}
              tags={['Ruby on Rails', 'SQL']}
            />
            <ProjectCard
              name="Ourtask"
              link="/projects/ourtask"
              description="A task management Platform built for a property management company - used and loved ever since."
              image={ourtaskImage}
              tags={['Ruby on Rails', 'SQL']}
            />
            <ProjectCard
              name="BarCrawler.club"
              link="/projects/barcrawler"
              description="A Web Application to create and plan a route optimized Pub Crawl to share with your friends - Drinking Games included ;)"
              image={barcrawlerImage}
              tags={['Ruby on Rails', 'SQL']}
            />
          </div>
        </section>
        <section id="contact" className="pt-10 pb-20">
          <h1 className="text-white text-2xl sm:text-4xl text-center">
            Get in touch
          </h1>
          <div className="flex gap-3 mt-5 justify-center flex-wrap">
            <SocialButton
              Icon={BsGithub}
              href="https://github.com/moritzdotcom"
            />
            <SocialButton
              Icon={BsLinkedin}
              href="https://www.linkedin.com/in/moritz-loechner/"
            />
            <SocialButton
              Icon={IoMdMail}
              href="mailto:moritz.loechner@gmail.com"
            />
            <SocialButton Icon={BsTelegram} href="https://t.me/mo_loc" />
          </div>
        </section>
      </main>
      <ProjectModal />
    </>
  );
}
