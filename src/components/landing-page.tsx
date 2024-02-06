"use client"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Description, EmailRounded, LinkedIn } from "@mui/icons-material";
import { ModeToggle } from "./ui/mode_toggle";
import DescriptionIcon from '@mui/icons-material/Description';
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
      <header className="px-4 lg:px-6 h-16 flex items-center  transition-all duration-500 ease-in-out">
        <nav className="ml-auto flex gap-4 sm:gap-6 pt-5 pr-10">
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
            About Me
          </Link>
          {/* <ModeToggle /> */}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 transition-all duration-500 ease-in-out">
          <div className="container px-4 md:px-6 flex justify-between items-center">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl pl-10 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-space-grotesk transition-all duration-500 ease-in-out">
                Hi, I&apos;m Rishi Srihari
              </h1>
              <p className="max-w-[800px] pl-10 text-gray-500 md:text-2xl dark:text-gray-400 font-space-grotesk transition-all duration-500 ease-in-out">
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
          className="w-full py-12 md:py-24 lg:py-32 bg-violet-400 dark:bg-violet-400 transition-all duration-500 ease-in-out transform skew-y-3"
          id="projects"
        >
          <div className="container px-4 md:px-6 transform -skew-y-3">
            <h2 className="text-3xl pl-10 pb-10 text-gray-800 dark:text-gray-800 font-bold tracking-tighter sm:text-5xl transition-all dark:duration-500 ease-in-out">
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
                    href=""
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
                        href={"https://devpost.com/software/zotconnect-g6jhme"}
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
                  src="/billiards.jpg.webp"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg text-gray-800 dark:text-gray-800 font-bold transition-all duration-500 ease-in-out">
                  Billiards Tracker
                </h3>
                <p className="text-gray-800 dark:text-gray-800 font-space-grotesk transition-all duration-500 ease-in-out">
                A program designed to map live billiard games for trajectory prediction and analysis.
                </p>
                <div className="flex gap-4">
                <Credenza>
                  <CredenzaTrigger asChild>
                    <Link
                    className="italic text-sm font-semibold text-gray-800 dark:text-gray-800 hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href=""
                    >
                      <span className="text-gray-800 dark:text-gray-800">View More</span>
                    </Link>
                  </CredenzaTrigger>
                  <CredenzaContent>
                    <CredenzaHeader>
                      <CredenzaTitle>Billiards Tracker</CredenzaTitle>
                      <CredenzaDescription>
                        Programmer
                      </CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                      <span className="p-1"></span>
                      <p>
                      • Used OpenCV to remap live feeds of billiards games onto a 2D interface for analysis in real time.
                      </p>
                      <span className="p-2"></span>
                      <p>
                      • Employed physics concepts to predict ball trajectory and suggest optimal next moves and angles
                      </p>
                      <span className="p-2"></span>
                      <p>
                      • Developed an algorithm that takes into account angular velocity, drag, friction, and live table layout to predict game 
                        movements.
                      </p>
                      <div className="pt-5 pb-5">
                        <img
                          className="mt-10 mb-10 w-full h-52 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
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
                      <div className="flex flex-grid pb-14">
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
                        href={"https://github.com/hrishikesh-srihari/billiardTracking"}
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
                    className="italic text-sm font-semibold hover:underline underline-offset-4 text-gray-800 dark:text-gray-800 transition-all duration-500 ease-in-out"
                    href="https://github.com/hrishikesh-srihari/billiardTracking"
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
                  src="/academic_research.jpg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg text-gray-800 dark:text-gray-800 font-bold transition-all duration-500 ease-in-out">
                  Academic Research Information Scraper
                </h3>
                <p className="text-gray-800 dark:text-gray-800 transition-all duration-500 ease-in-out">
                  Built a Java program powered by Selenium that accept keywords and parameters through a polished GUI and scrapes hundreds of academic research databases for 
                  related papers and returns notable info, including abstract, number of citations, date of publication, links to further related sources, etc.
                </p>
                <div className="flex gap-4">
                <Credenza>
                  <CredenzaTrigger asChild>
                    <Link
                    className="italic text-sm font-semibold text-gray-800 dark:text-gray-800 hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href=""
                    >
                      <span className="text-gray-800 dark:text-gray-800">View More</span>
                    </Link>
                  </CredenzaTrigger>
                  <CredenzaContent>
                    <CredenzaHeader>
                      <CredenzaTitle>Academic Research Information Scraper</CredenzaTitle>
                      <CredenzaDescription>
                        Programmer
                      </CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                      <span className="p-1"></span>
                      <p>
                      • Implemented Selenium web-scraping to gather information from a variety of published research papers given keywords.
                      </p>
                      <span className="p-2"></span>
                      <p>
                      • Utilized JavaFX to create a GUI that supports actions such as sorting alphabetically and by citations/number of views,
                        and deletion/insertion of database elements, and displays the abstract, key citations, and other core information.
                      </p>
                      <span className="p-2"></span>
                      <p>
                      • Used SQLite to store and organize scraped research information and allows user to manually insert and delete
                        information.
                      </p>
                      <div className="pt-5 pb-5">
                        <img
                          className="mt-10 mb-10 w-full h-52 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                          height="200"
                          src="/academic_research.jpg"
                          style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                          }}
                          width="200"
                        />
                      </div>
                      <CredenzaTitle>Technologies</CredenzaTitle>
                      <div className="flex flex-grid pb-14">
                        <Badge variant="secondary">Selenium</Badge>
                        <span className="px-1"></span>
                        <Badge variant="secondary">Java</Badge>
                        <span className="px-1"></span>
                        <Badge variant="secondary">SQLite</Badge>
                        <span className="px-1"></span>
                        <Badge variant="secondary">JavaFX</Badge>
                      </div>
                    </CredenzaBody>
                    <CredenzaFooter>
                      <CredenzaClose asChild>
                        <Button variant="outline">Close</Button>
                      </CredenzaClose>
                    </CredenzaFooter>
                  </CredenzaContent>
                </Credenza>
                  <Link
                    className="italic text-sm font-semibold text-gray-800 dark:text-gray-800 hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href="https://github.com/hrishikesh-srihari/research-scraper"
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
          className="w-full py-12 md:py-24 lg:py-32 transition-all duration-500 ease-in-out transform skew-y-3"
          id="experiences"
        >
          <div className="container px-4 md:px-6 transform -skew-y-3 ">
            <h2 className="pl-10 pb-10 text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-500 ease-in-out">
              Experiences
            </h2>
            <div className="mx-auto grid items-start gap-12 sm:max-w-4xl sm:grid-cols-2 md:gap-16 lg:max-w-7xl mt-8 pl-10 mr-5">
              <div className="group grid gap-4 transition-all duration-200 transform hover:scale-105">
                <img
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
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
                <h5 className="text-md italic text-gray-500 dark:text-gray-400 font-semibold transition-all duration-500 ease-in-out mt-[0.5px]">
                  September 2023 - Present
                </h5>
                <p className="text-gray-500 dark:text-gray-400 transition-all duration-500 ease-in-out">
                  Spearhead the Local Mission Control Console &#40;LMCC&#41; subteam that works on the real-time tracking of critical biomedical and suit data, geological data collection, mission emergency handling, and seamless integration of all rover
                      camera feeds for the explorer. 
                </p>
                <p className="text-gray-500 dark:text-gray-400 transition-all duration-500 ease-in-out">
                  Work under <span className="text-emerald-400 font-semibold">Team Cartographer.</span>
                </p>
                <div className="flex gap-4">
                <Credenza>
                  <CredenzaTrigger asChild>
                    <Link
                    className="italic text-sm hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href=""
                    >
                      <span>View More</span>
                    </Link>
                  </CredenzaTrigger>
                  <CredenzaContent>
                    <CredenzaHeader>
                      <CredenzaTitle>SWE Intern at NASA JSC</CredenzaTitle>
                      <CredenzaDescription>
                        Subteam Lead
                      </CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                      <span className="p-1"></span>
                      <p>
                      • Spearhead the Local Mission Control Console &#40;LMCC&#41; subteam that works on the real-time tracking of critical biomedical and suit data, geological data collection, mission emergency handling, and seamless integration of all rover
                      camera feeds for the explorer. 
                      </p>
                      <span className="p-2"></span>
                      <p>
                      • Conduct code reviews and meetings within team, and undertook integration with other teams and overall larger-scale
                        project organization
                      </p>
                      <span className="p-2"></span>
                      <p>
                      • Contributed on development of a custom RESTful API to efficiently process and display data, as well as creating custom HTTP requests for A* Pathfinding, OpenCV, etc.
                      </p>
                      <div className="pt-5 pb-5">
                        <img
                          className="mt-10 mb-10 w-full h-52 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
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
                      <div className="flex flex-grid pb-14">
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
              <div className="group grid gap-4 transition-all duration-200 transform hover:scale-105">
                <img
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height="200"
                  src="/cs_at_mines.png"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "fill",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-bold font-space-grotesk transition-all duration-500 ease-in-out">
                  ComputingForGood Intern at Colorado School of Mines
                </h3>
                <h5 className="text-md italic text-gray-500 dark:text-gray-400 font-semibold transition-all duration-500 ease-in-out mt-[0.5px]">
                  June 2021 - August 2021
                </h5>
                <div>
                  <Badge variant="default">🏆 Won Best Social Welfare Project</Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-space-grotesk transition-all duration-500 ease-in-out">
                Utilized Android Studio to develop an application for scheduling meetups, suggesting optimal event slots, 
                and integrating daily plans to promote healthier relationships.
                </p>
                <div className="flex gap-4">
                <Credenza>
                  <CredenzaTrigger asChild>
                    <Link
                    className="italic text-sm hover:underline underline-offset-4 transition-all duration-500 ease-in-out"
                    href=""
                    >
                      <span>View More</span>
                    </Link>
                  </CredenzaTrigger>
                  <CredenzaContent>
                    <CredenzaHeader>
                      <CredenzaTitle>ComputingForGood Intern at Colorado School of Mines</CredenzaTitle>
                      <CredenzaDescription>
                        Programming Lead
                      </CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                      <span className="p-1"></span>
                      <p>
                      • Utilized Android Studio to develop an application for scheduling meetups, suggesting optimal event slots, and integrating daily plans to promote healthier relationships.
                      </p>
                      <span className="p-2"></span>
                      <p>
                      • Directed preparation of presentation and pitch given at the end-of-term project convention. 
                      </p>
                      <div className="pt-5 pb-5">
                        <img
                          className="mt-10 mb-10 w-full h-52 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
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
                      <div className="flex flex-grid pb-14">
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
        <section className="w-full py-12 bg-violet-400 dark:bg-violet-400 md:py-24 lg:py-32 transition-all duration-500 ease-in-out" id="about">
          <div className="container px-4 md:px-6">
            <h2 className="pl-10 text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-500 ease-in-out">
              About Me
            </h2>
            <div className="pl-10 flex flex-col gap-4 mt-8">
              <p className="max-w-[700px] text-gray-700 md:text-xl dark:text-gray-700 font-space-grotesk transition-all duration-500 ease-in-out">
                I am currently a student at the University of California, Irvine studying computer science. I have roughly 3 years of front-end experience 
                and am comfortable working with most modern web development frameworks and technologies. As a student, I&apos;m always looking to learn new skills and add to my range as a programmer and a student.
              </p>
            </div>
            <div className="pl-10 pt-10">
              <Button variant="outline" onClick={() => {window.open("/Hrishikesh_Srihari_Resume.pdf", "_blank")}}>
                <Description className="h-4 w-4"/><span className="pl-2">Resume</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 bg-violet-400 dark:bg-violet-400 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 transition-all duration-500 ease-in-out">
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
