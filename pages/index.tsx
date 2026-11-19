import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

const profileFallback = {
  avatar_url: "https://avatars.githubusercontent.com/levi-x00",
  bio: "Available for freelance",
  location: "Jakarta, Indonesia",
};

export async function getStaticProps() {
  // CI runners share IPs, so unauthenticated GitHub API calls get rate-limited.
  const headers: HeadersInit = process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {};
  const res = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`,
    { headers }
  );
  const githubProfileData = res.ok
    ? { ...profileFallback, ...(await res.json()) }
    : profileFallback;

  return {
    props: { githubProfileData },
  };
}
