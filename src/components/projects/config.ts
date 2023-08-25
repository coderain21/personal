import { getSkill, Skill } from "../skills/config"
import MellowMashroom from '../../images/projects/mellow-mashroom.png'
import ClearScore from '../../images/projects/clearscore.png'
import Mummy from '../../images/projects/mummy.jpg'
import Google from  '../../images/projects/google-clone.png'
import Yurtle from '../../images/projects/yurtle.png'
import SO from '../../images/projects/simpleodds.png'
import Axe from '../../images/projects/axe.png'
import Fx1 from '../../images/projects/fx1.png'
import { GITHUB } from "../constants"

export type Project = {
  name: string,
  description: string,
  image: any,
  url?: string,
  github?: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "Simple Odds",
    description: " Your Gateway to Positive Expected Value! Uncover hidden gems in the world of betting. You're stepping into a realm where sportsbook errors become your winning advantage. Elevate your betting game and embrace a smarter way to play. Join us at SimpleOdds and bet on a brighter future.",
    image: SO,
    url: "https://simpleodds.com",
    technologies: getSkill(['NodeJS', 'react', 'zustand', 'docker'])
  },
  {
    name: 'Mummy.io',
    description: 'GameFi DApp Mummy​ is a state-of-the-art MMO game that brings to life forgotten Ancient World myths. The game features fast-action combat mechanics in the plentiful world of ancient Egypt, a realm torn between order and chaos, the fate of which lies in the hands of the Gods.',
    image: Mummy,
    url: 'https://mummy.io/',
    technologies: getSkill(['react', 'solidity', 'hardhat']),
  },
  {
    name: 'Yurtle',
    description: 'We created Yurtle for the millions of people who care for a loved one. Caregivers adopt different caring styles, but they all share a common trait: the reluctance to ask for help. ',
    image: Yurtle,
    technologies: getSkill(['react', 'nodejs', 'materiaui', 'redux', 'mysql', 'google cloud']),
    url: 'https://yurtle.co.uk/'
  },
  {
    name: 'AXE',
    description: 'Streamline invoice management and supercharge your cashflow with Axe. Effortlessly handle invoices, eliminate manual data entry, and empower your team to make smooth payments. Experience a new era of hassle-free financial management with Axe.',
    image: Axe,
    technologies: getSkill(['react', 'laravel', 'effector']),
    url: 'https://joinaxe.com'
  },
  {
    name: 'Fx1',
    description: 'Elevate your sports-watching experience with FX1 – the future of live sports entertainment. Using AI and blockchain technology, FX1 offers an immersive, community-driven approach to enjoying games like never before. Enjoy real-time predictions, interactive play-by-play, and connect with friends while earning rewards.',
    image: Fx1,
    technologies: getSkill(['next', 'nodejs', 'mongodb', 'graphql']),
    url: 'https://fx1.io'
  },
  {
    name: "Mellow Mashrrom",
    description: 'For over 40 years, Mellow Mushroom Pizza Bakers has been serving up fresh, stone-baked pizzas to order in an eclectic, art-filled, and family-friendly environment. Mellow is a state of mind, a culture, a way of being. Our mission is to provide delicious food in a fun and creative environment.',
    image: MellowMashroom,
    url: 'https://mellowmushroom.com/',
    technologies: getSkill(['NodeJS', 'MongoDB', 'react', 'graphql'])
  },
  {
    name: 'Clear Score',
    description: 'ClearScore is the first company in the United Kingdom to provide free credit scores and reports, along with advice to help consumers make better financial decisions.',
    image: ClearScore,
    url: 'https://www.clearscore.com/',
    technologies: getSkill(['react', 'redux', 'postgresql']),
  },
  {
    name: 'Google Clone',
    description: 'A clone of google page using google api',
    image: Google,
    technologies: getSkill(['react', 'python', 'tailwindcss']),
    github: `${GITHUB}/google-clone`,
  },
]