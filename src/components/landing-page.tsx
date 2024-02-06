"use client"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { EmailRounded, LinkedIn } from "@mui/icons-material";
import { ModeToggle } from "./ui/mode_toggle";
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
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
} from "@/components/ui/credenza"


export function LandingPage() {
  return (
    <div className= "flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800 transition-all duration-500 ease-in-out">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-violet-400 dark:bg-violet-400 transition-all duration-500 ease-in-out">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 font-space-grotesk transition-all duration-500 ease-in-out">
          Rishi Srihari
        </h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
            href="#experiences"
          >
            Experiences
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
            href="#about"
          >
            About
          </Link>
          {/* <ModeToggle /> */}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 transition-all duration-500 ease-in-out">
          <div className="container px-4 md:px-6 flex justify-between items-center">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-space-grotesk transition-all duration-500 ease-in-out">
                Hi, I&apos;m Rishi Srihari
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 font-space-grotesk transition-all duration-500 ease-in-out">
                A CS student and front-end developer specializing in building web applications.
              </p>
            </div>
            <img
              className="w-64 h-64 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-105"
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
          className="w-full py-12 md:py-24 lg:py-32 bg-violet-400 dark:bg-violet-400 transition-all duration-500 ease-in-out"
          id="projects"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-gray-800 dark:text-gray-800 font-bold tracking-tighter sm:text-5xl font-space-grotesk transition-all dark:duration-500 ease-in-out">
              Projects
            </h2>
            <div className="mx-auto grid items-start gap-10 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-7xl lg:grid-cols-3 mt-8 mr-5">
              <div className="group grid gap-6 transition-all duration-200 transform hover:scale-105">
                <img
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/zot_connect.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg text-gray-800 dark:text-gray-800 font-bold transition-all duration-500 ease-in-out">
                  ZotConnect
                </h3>
                <div>
                  <Badge variant="secondary">🏆 Won Best Overall Hack at IrvineHacks 2024</Badge>
                  <p className="pt-5 text-gray-800 dark:text-gray-800 transition-all duration-500 ease-in-out">
                    Elevate academic connections with this tailored communication platform for professors & students. Your research needs, simplified.
                  </p>
                </div>
                
                <div className="flex gap-4">
                <Credenza>
                  <CredenzaTrigger asChild>
                    <Link
                    className="italic text-sm text-gray-800 dark:text-gray-800 font-semibold hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href="#projects"
                    >
                      <span className="text-gray-800 dark:text-gray-800">View More</span>
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
                        ZotConnect is a web application meticulously crafted to establish straightforward communication between professors and students.
                      </p>
                      <p>
                        Our innovative approach ensures that both professors and students enjoy an optimized and efficient process to address their needs.
                      </p>
                      <div className="pt-5 pb-5">
                        <img
                          className="mt-10 mb-10 w-full h-52 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
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
                      <div className="flex flex-grid">
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
                        href={"https://google.com"}
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
                    className="italic text-sm font-semibold text-gray-800 dark:text-gray-800 hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href="https://zotconnect.vercel.app"
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                  <Link
                    className="italic text-sm font-semibold text-gray-800 dark:text-gray-800 hover:underline underline-offset-4 font-space-grotesk transition-all duration-500 ease-in-out"
                    href="https://github.com/abhi-arya1/zotconnect"
                    target="_blank"
                  >
                    Github
                  </Link>

                </div>
              </div>
              <div className="group grid gap-6 transition-all duration-200 transform hover:scale-105 pl-5 pr-5">
                <img
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/zot_connect.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg text-gray-800 dark:text-gray-800 font-bold transition-all duration-500 ease-in-out">
                  Project 2
                </h3>
                <p className="text-gray-800 dark:text-gray-800 font-space-grotesk transition-all duration-500 ease-in-out">
                  A brief description of the project.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="italic text-sm font-semibold hover:underline underline-offset-4 text-gray-800 dark:text-gray-800 transition-all duration-500 ease-in-out"
                    href="#"
                    target="_blank"
                  >
                    Visit Site
                  </Link>
                  <Link
                    className="italic text-sm font-semibold hover:underline underline-offset-4 text-gray-800 dark:text-gray-800 transition-all duration-500 ease-in-out"
                    href="#"
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </div>
              <div className="group grid gap-6 transition-all duration-200 transform hover:scale-105 pl-5">
                <img
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg text-gray-800 dark:text-gray-800 font-boldtransition-all duration-500 ease-in-out">
                  Project 3
                </h3>
                <p className="text-gray-800 dark:text-gray-800 transition-all duration-500 ease-in-out">
                  A brief description of the project.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="italic text-sm text-gray-800 dark:text-gray-800 font-semibold hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href="#"
                  >
                    Visit Site
                  </Link>
                  <Link
                    className="italic text-sm font-semibold text-gray-800 dark:text-gray-800 hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href="#"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 transition-all duration-500 ease-in-out"
          id="experiences"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-500 ease-in-out">
              Experiences
            </h2>
            <div className="mx-auto grid items-start gap-12 sm:max-w-4xl sm:grid-cols-2 md:gap-16 lg:max-w-7xl mt-8 pl-10 mr-5">
              <div className="group grid gap-4 transition-all duration-200 transform hover:scale-105">
                <img
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/nasasuits.jpg.webp"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-bold font-space-grotesk transition-all duration-500 ease-in-out">
                  SWE Intern at NASA SUITS
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-space-grotesk transition-all duration-500 ease-in-out">
                  A brief description of the experience.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="text-sm hover:underline underline-offset-4 font-space-grotesk transition-all duration-500 ease-in-out"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="group grid gap-4 transition-all duration-200 transform hover:scale-105">
                <img
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/cs_at_mines.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-bold font-space-grotesk transition-all duration-500 ease-in-out">
                  ComputingForGood Intern at Colorado School of Mines
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-space-grotesk transition-all duration-500 ease-in-out">
                  A brief description of the experience.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="text-sm hover:underline underline-offset-4 font-space-grotesk transition-all duration-500 ease-in-out"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-violet-400 dark:bg-violet-400 md:py-24 lg:py-32 transition-all duration-500 ease-in-out" id="about">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-500 ease-in-out">
              About Me
            </h2>
            <div className="flex flex-col gap-4 mt-8">
              <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-700 font-space-grotesk transition-all duration-500 ease-in-out">
                I am a full-stack developer with over 5 years of experience in building web applications. I specialize
                in JavaScript and have professional experience working with React and Node.js.
              </p>
              <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-700 font-space-grotesk transition-all duration-500 ease-in-out">
                I have a passion for learning and sharing my knowledge with others as clearly as possible. If you found
                value in something I have created, please feel free to share, comment, and ask me anything!
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t transition-all duration-500 ease-in-out">
        <p className="text-xs text-gray-300 dark:text-gray-300 font-space-grotesk transition-all duration-500 ease-in-out">
          © 2024 Rishi Srihari. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Button variant="outline" onClick={() => {window.open("https://github.com/hrishikesh-srihari", "_blank")}}>
          <GitHubIcon className="h-4 w-4"/><span className="pl-2">GitHub</span>
          </Button>
          <Button variant="outline" onClick={() => {window.open("www.linkedin.com/in/hrishikesh-srihari000", "_blank")}}>
            <LinkedIn className="h-4 w-4"/><span className="pl-2">LinkedIn</span>
          </Button>
          <Button variant="outline" onClick={() => {window.open("mailto:sriharihrishikesh@gmail.com", "_blank")}}>
            <EmailRounded className="h-4 w-4"/> <span className="pl-2">Email</span>
          </Button>
        </nav>
      </footer>
    </div>
  );
}
