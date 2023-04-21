import { getSkill, Skill, skills } from "../skills/config"
import MellowMashroom from '../../images/mellow-mashroom.png'
import ClearScore from '../../images/clearscore.png'
import Mummy from '../../images/mummy.jpg'
import Google from  '../../images/google-clone.png'
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
    name: "Mellow Mashrrom",
    description: 'For over 40 years, Mellow Mushroom Pizza Bakers has been serving up fresh, stone-baked pizzas to order in an eclectic, art-filled, and family-friendly environment.',
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
    name: 'Mummy.io',
    description: 'GameFi DApp',
    image: Mummy,
    url: 'https://mummy.io/',
    technologies: getSkill(['react', 'solidity', 'hardhat']),
  },
  {
    name: 'Google Clone',
    description: 'A clone of google page using google api',
    image: Google,
    technologies: getSkill(['react', 'python', 'tailwindcss']),
    github: `${GITHUB}/google-clone`,
  }
]