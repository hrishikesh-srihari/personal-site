"use client";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Space_Grotesk } from "next/font/google";
import Typewriter from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Description, EmailRounded, LinkedIn } from "@mui/icons-material";
import { ModeToggle } from "./ui/mode_toggle";
import DescriptionIcon from "@mui/icons-material/Description";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-all duration-500 ease-in-out dark:bg-gray-800">
      <header className="flex h-16 items-center px-4 transition-all  duration-500 ease-in-out lg:px-6">
        <nav className="ml-auto flex gap-4 pr-10 pt-5 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 transition-all duration-500 ease-in-out hover:underline"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 transition-all duration-500 ease-in-out hover:underline"
            href="#experiences"
          >
            Experiences
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 transition-all duration-500 ease-in-out hover:underline"
            href="#about"
          >
            About Me
          </Link>
          {/* <ModeToggle /> */}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 transition-all duration-500 ease-in-out md:py-24 lg:py-32">
          <div className="container flex items-center justify-between px-4 sm:flex-col md:px-6 lg:flex-row">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="font-space-grotesk pl-10 text-3xl font-bold tracking-tighter transition-all duration-500 ease-in-out sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m Rishi Srihari
              </h1>
              <p className="font-space-grotesk max-w-[800px] pl-10 text-gray-500 transition-all duration-500 ease-in-out md:text-2xl dark:text-gray-400">
                A CS student and front-end developer specializing in building
                web applications.
              </p>
            </div>
            <img
              className="h-64 w-64 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              height="256"
              src="/rishi_profile_pic.jpg"
              style={{
                aspectRatio: "256/256",
                objectFit: "cover",
              }}
              width="256"
            />
          </div>
        </section>
        <section
          className="w-full skew-y-3 transform bg-violet-400 py-12 transition-all duration-500 ease-in-out md:py-24 lg:py-32 dark:bg-violet-400"
          id="projects"
        >
          <div className="container -skew-y-3 transform px-4 md:px-6">
            <h2 className="pb-10 pl-10 text-3xl font-bold tracking-tighter text-gray-800 transition-all ease-in-out sm:text-5xl dark:text-gray-800 dark:duration-500">
              Projects
            </h2>
            <div className="mx-auto mr-5 mt-8 grid items-start gap-10 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-7xl lg:grid-cols-3">
              <div className="group grid transform gap-6 transition-all duration-200 hover:scale-105">
                <img
                  className="h-48 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/zot_connect.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-bold text-gray-800 transition-all duration-500 ease-in-out dark:text-gray-800">
                  ZotConnect
                </h3>
                <div>
                  <Badge variant="secondary">
                    🏆 Won Best Overall Hack at IrvineHacks 2024
                  </Badge>
                  <p className="pt-5 text-gray-800 transition-all duration-500 ease-in-out dark:text-gray-800">
                    Elevate academic connections with this tailored
                    communication platform for professors & students. Your
                    research needs, simplified.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Credenza>
                    <CredenzaTrigger asChild>
                      <Link
                        className="text-sm font-semibold italic text-gray-800 underline-offset-4 transition-all duration-500 ease-in-out hover:underline dark:text-gray-800"
                        href=""
                      >
                        <span className="text-gray-800 dark:text-gray-800">
                          View More
                        </span>
                      </Link>
                    </CredenzaTrigger>
                    <CredenzaContent>
                      <CredenzaHeader>
                        <CredenzaTitle>ZotConnect</CredenzaTitle>
                        <CredenzaDescription>
                          Connecting professors and students alike
                        </CredenzaDescription>
                      </CredenzaHeader>
                      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                        <p>
                          ZotConnect is a web application meticulously crafted
                          to establish straightforward communication between
                          professors and students.
                        </p>
                        <p>
                          Our innovative approach ensures that both professors
                          and students enjoy an optimized and efficient process
                          to address their needs.
                        </p>
                        <div className="pb-5 pt-5">
                          <img
                            className="mb-10 mt-10 h-52 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            height="200"
                            src="/zot_connect.png"
                            style={{
                              aspectRatio: "200/200",
                              objectFit: "cover",
                            }}
                            width="200"
                          />
                        </div>
                        <CredenzaTitle>Technologies</CredenzaTitle>
                        <div className="flex-grid flex">
                          <Badge variant="secondary">NextJS</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Typescript</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">ConvexDB</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Clerk Auth</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Google Cloud AI</Badge>
                        </div>
                      </CredenzaBody>
                      <CredenzaFooter>
                        <Link
                          href={
                            "https://devpost.com/software/zotconnect-g6jhme"
                          }
                          target="_blank"
                          className={cn(buttonVariants({ variant: "outline" }))}
                        >
                          DevPost
                        </Link>
                        <CredenzaClose asChild>
                          <Button variant="outline">Close</Button>
                        </CredenzaClose>
                      </CredenzaFooter>
                    </CredenzaContent>
                  </Credenza>
                  <Link
                    className="text-sm font-semibold italic text-gray-800 underline-offset-4 transition-all duration-500 ease-in-out hover:underline dark:text-gray-800"
                    href="https://zotconnect.vercel.app"
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                  <Link
                    className="font-space-grotesk text-sm font-semibold italic text-gray-800 underline-offset-4 transition-all duration-500 ease-in-out hover:underline dark:text-gray-800"
                    href="https://github.com/abhi-arya1/zotconnect"
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </div>
              <div className="group grid transform gap-6 pl-5 pr-5 transition-all duration-200 hover:scale-105">
                <img
                  className="h-48 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/billiards.jpg.webp"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-bold text-gray-800 transition-all duration-500 ease-in-out dark:text-gray-800">
                  Billiards Tracker
                </h3>
                <p className="font-space-grotesk text-gray-800 transition-all duration-500 ease-in-out dark:text-gray-800">
                  A program designed to map live billiard games for trajectory
                  prediction and analysis.
                </p>
                <div className="flex gap-4">
                  <Credenza>
                    <CredenzaTrigger asChild>
                      <Link
                        className="text-sm font-semibold italic text-gray-800 underline-offset-4 transition-all duration-500 ease-in-out hover:underline dark:text-gray-800"
                        href=""
                      >
                        <span className="text-gray-800 dark:text-gray-800">
                          View More
                        </span>
                      </Link>
                    </CredenzaTrigger>
                    <CredenzaContent>
                      <CredenzaHeader>
                        <CredenzaTitle>Billiards Tracker</CredenzaTitle>
                        <CredenzaDescription>Programmer</CredenzaDescription>
                      </CredenzaHeader>
                      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                        <span className="p-1"></span>
                        <p>
                          • Used OpenCV to remap live feeds of billiards games
                          onto a 2D interface for analysis in real time.
                        </p>
                        <span className="p-2"></span>
                        <p>
                          • Employed physics concepts to predict ball trajectory
                          and suggest optimal next moves and angles
                        </p>
                        <span className="p-2"></span>
                        <p>
                          • Developed an algorithm that takes into account
                          angular velocity, drag, friction, and live table
                          layout to predict game movements.
                        </p>
                        <div className="pb-5 pt-5">
                          <img
                            className="mb-10 mt-10 h-52 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            height="200"
                            src="/billiards.jpg.webp"
                            style={{
                              aspectRatio: "200/200",
                              objectFit: "cover",
                            }}
                            width="200"
                          />
                        </div>
                        <CredenzaTitle>Technologies</CredenzaTitle>
                        <div className="flex-grid flex pb-14">
                          <Badge variant="secondary">Python</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">OpenCV</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Advanced Physics</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Pandas</Badge>
                        </div>
                      </CredenzaBody>
                      <CredenzaFooter>
                        <Link
                          href={
                            "https://github.com/hrishikesh-srihari/billiardTracking"
                          }
                          target="_blank"
                          className={cn(buttonVariants({ variant: "outline" }))}
                        >
                          Github
                        </Link>
                        <CredenzaClose asChild>
                          <Button variant="outline">Close</Button>
                        </CredenzaClose>
                      </CredenzaFooter>
                    </CredenzaContent>
                  </Credenza>
                  <Link
                    className="text-sm font-semibold italic text-gray-800 underline-offset-4 transition-all duration-500 ease-in-out hover:underline dark:text-gray-800"
                    href="https://github.com/hrishikesh-srihari/billiardTracking"
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </div>
              <div className="group grid transform gap-6 transition-all duration-200 hover:scale-105">
                <img
                  className="h-48 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/coauthor_dashboard.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-bold text-gray-800 transition-all duration-500 ease-in-out dark:text-gray-800">
                  Coauthor
                </h3>
                <div>
                  <Badge variant="secondary">
                    🏆 Won Best First Time Hack at SFHacks 2024
                  </Badge>
                  <p className="pt-5 text-gray-800 transition-all duration-500 ease-in-out dark:text-gray-800">
                    Your next research workstation. 
                    All of your research workflow and collaboration needs on one platform.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Credenza>
                    <CredenzaTrigger asChild>
                      <Link
                        className="text-sm font-semibold italic text-gray-800 underline-offset-4 transition-all duration-500 ease-in-out hover:underline dark:text-gray-800"
                        href=""
                      >
                        <span className="text-gray-800 dark:text-gray-800">
                          View More
                        </span>
                      </Link>
                    </CredenzaTrigger>
                    <CredenzaContent>
                      <CredenzaHeader>
                        <CredenzaTitle>Coauthor</CredenzaTitle>
                        <CredenzaDescription>
                          All of your research needs, centralized
                        </CredenzaDescription>
                      </CredenzaHeader>
                      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                        <p>
                          Coauthor is a web plaform created to simplify the hassle and moving parts 
                          of the academic research process. 
                        </p>
                        <p>
                          Through self-training AI and real-time document collaboration, Coauthor is 
                          your one-stop-shop for all your research needs.
                        </p>
                        <div className="pb-5 pt-5">
                          <img
                            className="mb-10 mt-10 h-52 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            height="200"
                            src="/coauthor_dashboard.png"
                            style={{
                              aspectRatio: "200/200",
                              objectFit: "cover",
                            }}
                            width="200"
                          />
                        </div>
                        <CredenzaTitle>Technologies</CredenzaTitle>
                        <div className="flex-grid flex">
                          <Badge variant="secondary">NextJS</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Typescript</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">ConvexDB</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">FireworksAI</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Google Gemini</Badge>
                        </div>
                      </CredenzaBody>
                      <CredenzaFooter>
                        <Link
                          href={
                            "https://devpost.com/software/coauthor"
                          }
                          target="_blank"
                          className={cn(buttonVariants({ variant: "outline" }))}
                        >
                          DevPost
                        </Link>
                        <CredenzaClose asChild>
                          <Button variant="outline">Close</Button>
                        </CredenzaClose>
                      </CredenzaFooter>
                    </CredenzaContent>
                  </Credenza>
                  <Link
                    className="text-sm font-semibold italic text-gray-800 underline-offset-4 transition-all duration-500 ease-in-out hover:underline dark:text-gray-800"
                    href="https://coauthor.vercel.app"
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                  <Link
                    className="font-space-grotesk text-sm font-semibold italic text-gray-800 underline-offset-4 transition-all duration-500 ease-in-out hover:underline dark:text-gray-800"
                    href="https://github.com/abhi-arya1/coauthor"
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full skew-y-3 transform py-12 transition-all duration-500 ease-in-out md:py-24 lg:py-32"
          id="experiences"
        >
          <div className="container -skew-y-3 transform px-4 md:px-6 ">
            <h2 className="pb-10 pl-10 text-3xl font-bold tracking-tighter text-gray-800 transition-all duration-500 ease-in-out sm:text-5xl dark:text-gray-200">
              Experiences
            </h2>
            <div className="mx-auto mr-5 mt-8 grid items-start gap-12 pl-10 sm:max-w-4xl sm:grid-cols-2 md:gap-16 lg:max-w-7xl">
              <div className="group grid transform gap-4 transition-all duration-200 hover:scale-105">
                <img
                  className="h-48 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/nasa_jsc.jpg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-bold transition-all duration-500 ease-in-out">
                  SWE Intern at NASA JSC
                </h3>
                <h5 className="text-md mt-[0.5px] font-semibold italic text-gray-500 transition-all duration-500 ease-in-out dark:text-gray-400">
                  September 2023 - Present
                </h5>
                <p className="text-gray-500 transition-all duration-500 ease-in-out dark:text-gray-400">
                  Spearhead the Local Mission Control Console &#40;LMCC&#41;
                  subteam that works on the real-time tracking of critical
                  biomedical and suit data, geological data collection, mission
                  emergency handling, and seamless integration of all rover
                  camera feeds for the explorer.
                </p>
                <p className="text-gray-500 transition-all duration-500 ease-in-out dark:text-gray-400">
                  Work under{" "}
                  <span className="font-semibold text-emerald-400">
                    Team Cartographer.
                  </span>
                </p>
                <div className="flex gap-4">
                  <Credenza>
                    <CredenzaTrigger asChild>
                      <Link
                        className="text-sm italic underline-offset-4 transition-all duration-500 ease-in-out hover:underline"
                        href=""
                      >
                        <span>View More</span>
                      </Link>
                    </CredenzaTrigger>
                    <CredenzaContent>
                      <CredenzaHeader>
                        <CredenzaTitle>SWE Intern at NASA JSC</CredenzaTitle>
                        <CredenzaDescription>Subteam Lead</CredenzaDescription>
                      </CredenzaHeader>
                      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                        <span className="p-1"></span>
                        <p>
                          • Spearhead the Local Mission Control Console
                          &#40;LMCC&#41; subteam that works on the real-time
                          tracking of critical biomedical and suit data,
                          geological data collection, mission emergency
                          handling, and seamless integration of all rover camera
                          feeds for the explorer.
                        </p>
                        <span className="p-2"></span>
                        <p>
                          • Conduct code reviews and meetings within team, and
                          undertook integration with other teams and overall
                          larger-scale project organization
                        </p>
                        <span className="p-2"></span>
                        <p>
                          • Contributed on development of a custom RESTful API
                          to efficiently process and display data, as well as
                          creating custom HTTP requests for A* Pathfinding,
                          OpenCV, etc.
                        </p>
                        <div className="pb-5 pt-5">
                          <img
                            className="mb-10 mt-10 h-52 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            height="200"
                            src="/nasa_jsc.jpg"
                            style={{
                              aspectRatio: "200/200",
                              objectFit: "cover",
                            }}
                            width="200"
                          />
                        </div>
                        <CredenzaTitle>Skills</CredenzaTitle>
                        <div className="flex-grid flex pb-14">
                          <Badge variant="secondary">Leadership</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">ReactJS</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Typescript</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Python</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">RESTful API</Badge>
                        </div>
                      </CredenzaBody>
                      <CredenzaFooter>
                        <Link
                          href={"https://github.com/Team-Cartographer"}
                          target="_blank"
                          className={cn(buttonVariants({ variant: "outline" }))}
                        >
                          Github
                        </Link>
                        <CredenzaClose asChild>
                          <Button variant="outline">Close</Button>
                        </CredenzaClose>
                      </CredenzaFooter>
                    </CredenzaContent>
                  </Credenza>
                </div>
              </div>
              <div className="group grid transform gap-4 transition-all duration-200 hover:scale-105">
                <img
                  className="h-48 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/cs_at_mines.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "fill",
                  }}
                  width="200"
                />
                <h3 className="font-space-grotesk text-lg font-bold transition-all duration-500 ease-in-out">
                  ComputingForGood Intern at Colorado School of Mines
                </h3>
                <h5 className="text-md mt-[0.5px] font-semibold italic text-gray-500 transition-all duration-500 ease-in-out dark:text-gray-400">
                  June 2021 - August 2021
                </h5>
                <div>
                  <Badge variant="default">
                    🏆 Won Best Social Welfare Project
                  </Badge>
                </div>
                <p className="font-space-grotesk text-gray-500 transition-all duration-500 ease-in-out dark:text-gray-400">
                  Utilized Android Studio to develop an application for
                  scheduling meetups, suggesting optimal event slots, and
                  integrating daily plans to promote healthier relationships.
                </p>
                <div className="flex gap-4">
                  <Credenza>
                    <CredenzaTrigger asChild>
                      <Link
                        className="text-sm italic underline-offset-4 transition-all duration-500 ease-in-out hover:underline"
                        href=""
                      >
                        <span>View More</span>
                      </Link>
                    </CredenzaTrigger>
                    <CredenzaContent>
                      <CredenzaHeader>
                        <CredenzaTitle>
                          ComputingForGood Intern at Colorado School of Mines
                        </CredenzaTitle>
                        <CredenzaDescription>
                          Programming Lead
                        </CredenzaDescription>
                      </CredenzaHeader>
                      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                        <span className="p-1"></span>
                        <p>
                          • Utilized Android Studio to develop an application
                          for scheduling meetups, suggesting optimal event
                          slots, and integrating daily plans to promote
                          healthier relationships.
                        </p>
                        <span className="p-2"></span>
                        <p>
                          • Directed preparation of presentation and pitch given
                          at the end-of-term project convention.
                        </p>
                        <div className="pb-5 pt-5">
                          <img
                            className="mb-10 mt-10 h-52 w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            height="200"
                            src="/cs_at_mines.png"
                            style={{
                              aspectRatio: "200/200",
                              objectFit: "fill",
                            }}
                            width="200"
                          />
                        </div>
                        <CredenzaTitle>Skills</CredenzaTitle>
                        <div className="flex-grid flex pb-14">
                          <Badge variant="secondary">Android Studio</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Java</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Agile Workflow</Badge>
                          <span className="px-1"></span>
                          <Badge variant="secondary">Figma</Badge>
                        </div>
                      </CredenzaBody>
                      <CredenzaFooter>
                        <CredenzaClose asChild>
                          <Button variant="outline">Close</Button>
                        </CredenzaClose>
                      </CredenzaFooter>
                    </CredenzaContent>
                  </Credenza>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-violet-400 py-12 transition-all duration-500 ease-in-out md:py-24 lg:py-32 dark:bg-violet-400"
          id="about"
        >
          <div className="">
            <div className="pt-10">
              <h2 className="pl-10 text-3xl font-bold tracking-tighter text-gray-800 transition-all duration-500 ease-in-out sm:text-5xl dark:text-gray-800">
                About Me
              </h2>
              <div className="mt-8 flex flex-col gap-4 pl-10">
                <p className="font-space-grotesk max-w-[700px] text-gray-700 transition-all duration-500 ease-in-out md:text-xl dark:text-gray-700">
                  I am currently a student at the University of California,
                  Irvine studying computer science. I have roughly 3 years of
                  front-end experience and am comfortable working with most
                  modern web development frameworks and technologies. As a
                  student, I&apos;m always looking to learn new skills and add
                  to my range as a programmer and a student.
                </p>
              </div>

              <div className="pl-10 pt-10">
                <Button
                  variant="outline"
                  onClick={() => {
                    window.open("/Hrishikesh_Srihari_Resume.pdf", "_blank");
                  }}
                >
                  <Description className="h-4 w-4" />
                  <span className="pl-2">Resume</span>
                </Button>
              </div>
            </div>
            <div className="ml-[900px] mt-[-300px] flex w-[600px]">
              <Carousel className="h-[500px]">
                <CarouselContent className="h-[500px]">
                  <CarouselItem className="h-[500px]">
                    <img
                      className="mb-10 mt-10 h-[400px] w-full rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                      height="200"
                      src="/xc_1.jpg"
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </CarouselItem>
                  <CarouselItem className="h-[500px]">
                    <img
                      className="mb-10 mt-10 h-[400px] w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      height="200"
                      src="/xc_2.jpg"
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </CarouselItem>
                  <CarouselItem className="h-[500px]">
                    <img
                      className="mb-10 mt-10 h-[400px] w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      height="200"
                      src="/irvine_hacks1.jpg"
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </CarouselItem>
                  <CarouselItem className="h-[500px]">
                    <img
                      className="mb-10 mt-10 h-[400px] w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      height="200"
                      src="/me_photo2.jpg"
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 bg-violet-400 px-4 py-6 transition-all duration-500 ease-in-out sm:flex-row md:px-6 dark:bg-violet-400">
        <p className="font-space-grotesk text-xs text-gray-300 transition-all duration-500 ease-in-out dark:text-gray-300">
          © 2024 Rishi Srihari. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Button
            variant="outline"
            onClick={() => {
              window.open("https://github.com/hrishikesh-srihari", "_blank");
            }}
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="pl-2">GitHub</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/hrishikesh-srihari000",
                "_blank",
              );
            }}
          >
            <LinkedIn className="h-4 w-4" />
            <span className="pl-2">LinkedIn</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              window.open("mailto:sriharihrishikesh@gmail.com", "_blank");
            }}
          >
            <EmailRounded className="h-4 w-4" />{" "}
            <span className="pl-2">Email</span>
          </Button>
        </nav>
      </footer>
    </div>
  );
}
