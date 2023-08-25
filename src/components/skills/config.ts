import React from "./../../images/stack/react-logo.png";
import HTML from "./../../images/stack/html5-logo.png";
import CSS from "./../../images/stack/css-logo.png";
import JS from "./../../images/stack/js-logo.png";
import TS from "./../../images/stack/ts-logo.png";
import REST_API from "./../../images/stack/rest-api-logo.png";
import Solidity from "./../../images/stack/solidity-logo.png";
import Hardhat from "./../../images/stack/hardhat-logo.png"; 
import NPM from "./../../images/stack/npm-logo.png";
import YARN from "./../../images/stack/yarn-logo.png";
import Git from "./../../images/stack/git-logo.png";
import Native from "./../../images/stack/react-native.png";
import Web3 from "./../../images/stack/web3js.png";
import Ethers from "./../../images/stack/ethers-logo.png";
import Next from "./../../images/stack/nextjs-logo.png";
import Graph from "./../../images/stack/thegraph-logo.png";
import Socket from "./../../images/stack/socket.svg";
import NodeJS from "./../../images/stack/nodej-js.png";
import GRAPHQL from '../../images/stack/graphql-logo.svg';
import NestJS from "../../images/stack/nest.png";
import PHP from '../../images/stack/php.png';
import GCP from '../../images/stack/gcp1.png';
import AWS from '../../images/stack/aws.png';
import Laravel from '../../images/stack/laravel.png';
import Java from '../../images/stack/java.png';
import Python from '../../images/stack/python.jpg';
import CSharp from '../../images/stack/csharp.png';
import GitHub from '../../images/stack/github.png';
import BitBucket from '../../images/stack/butbucket.jpg';
import GitLab from '../../images/stack/gitlab.png';
import Trello from '../../images/stack/trello.jpg';
import Jira from '../../images/stack/jira.png';
import Slack from '../../images/stack/slack.png';
import MySQL from '../../images/stack/mysql.png';
import PostgreSQL from '../../images/stack/postgresql.png';
import Oracle from '../../images/stack/oracle.png';
import MsSQL from '../../images/stack/mssql.png';
import MongoDB from '../../images/stack/mongodb.png';
import Redis from '../../images/stack/redis.png';
import Express from '../../images/stack/express.png';
import Redux from '../../images/stack/redux.png';
import Zustand from '../../images/stack/zustand.png';
import Effector from '../../images/stack/effector.jpg';
// ui framework
import Mui from '../../images/stack/mui.png';
import AntD from '../../images/stack/antd.png';
import Tailwind from '../../images/stack/tailwind.png';
import Bootstrap from '../../images/stack/bootstrap.jpg';
import Chakra from '../../images/stack/chakra.jpg';
import Bulma from '../../images/stack/bulma.png';
// testing
import Jest from '../../images/stack/jest.png';
import Mocha from '../../images/stack/bulma.png';
import Chai from '../../images/stack/chai.png';
import Docker from '../../images/stack/docker.png';
import Kubernetes from '../../images/stack/kubernetes.png';
import Linux from '../../images/stack/linux.png';
import Cypress from '../../images/stack/cypress.jpg';
// blockchain
// import Moralis from "./../../images/stack/moralis-logo.png";
// import Waffle from "./../../images/stack/waffle.png";
// import Arweave from "./../../images/stack/arweave.png";
// import IPFS from "./../../images/stack/ipfs-logo.png";
// import Truffle from "./../../images/stack/truffle-logo.png"; 
// import Ganache from "./../../images/stack/ganache-logo.png"; 
// import Chainlink from "./../../images/stack/chainlink-logo.png"; 

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  let toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  })
  return toReturn;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS,
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    img: TS,
  },
  {
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML,
  },
  {
    name: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS,
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React,
  },
  {
    name: "Redux",
    url: "https://redux.js.org/",
    img: Redux,
  },
  {
    name: "Zustand",
    url: "https://github.com/pmndrs/zustand",
    img: Zustand,
  },
  {
    name: "Effector",
    url: "https://effector.dev/",
    img: Effector
  },
  {
    name: "React Native",
    url: "https://reactnative.dev/",
    img: Native,
  },
  {
    name: "NEXT.js",
    url: "https://nextjs.org/",
    img: Next,
  },
  {
    name: "Socket.io",
    url: "https://socket.io/",
    img: Socket,
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS,
  },
  {
    name: "ExpressJS",
    url: "https://expressjs.com/",
    img: Express,
  },  {
    name: "NestJS",
    url: "https://nestjs.com/",
    img: NestJS,
  },
  {
    name: "RESTful API",
    url: 'https://restfulapi.net/',
    img: REST_API,
  },
  {
    name: "GraphQL",
    url: 'https://graphql.org/',
    img: GRAPHQL,
  },
  {
    name: "Google Cloud",
    url: "https://cloud.google.com/",
    img: GCP,
  },
  {
    name: "Amazon Web Services",
    url: "https://aws.amazon.com/",
    img: AWS,
  },
  {
    name: "PHP",
    url: "https://php.net",
    img: PHP,
  },
  {
    name: "Laravel",
    url: "https://laravel.com/",
    img: Laravel,
  },
  {
    name: "Material UI",
    url: "https://mui.com/",
    img: Mui,
  },
  {
    name: "Ant Design",
    url: "https://ant.design/",
    img: AntD,
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    img: Tailwind,
  },
  {
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    img: Bootstrap,
  },
  {
    name: "Chakra UI",
    url: "https://chakra-ui.com/",
    img: Chakra,
  },
  {
    name: "Bulma",
    url: "https://bulma.io/",
    img: Bulma,
  },
  {
    name: "Jest",
    url: "https://jestjs.io/",
    img: Jest,
  },
  {
    name: "Mocha",
    url: "https://mochajs.org/",
    img: Mocha,
  },
  {
    name: "Chai",
    url: "https://www.chaijs.com/",
    img: Chai,
  },
  {
    name: "Cypress",
    url: "https://www.cypress.io/",
    img: Cypress,
  },
  {
    name: "Docker",
    url: "https://www.docker.com/",
    img: Docker,
  },
  {
    name: "Kubernetes",
    url: "https://kubernetes.io/",
    img: Kubernetes,
  },
  {
    name: "Linux",
    url: "https://www.linux.org/",
    img: Linux,
  },
  {
    name: "Java",
    url: "https://www.java.com/",
    img: Java,
  },
  {
    name: "Python",
    url: "https://www.python.org/",
    img: Python,
  },
  {
    name: "C#",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    img: CSharp,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    img: GitHub,
  },
  {
    name: "BitBucket",
    url: "https://bitbucket.org",
    img: BitBucket,
  },
  {
    name: "GitLab",
    url: "https://gitlab.com",
    img: GitLab,
  },
  {
    name: "Trello",
    url: "https://trello.com",
    img: Trello,
  },
  {
    name: "Jira",
    url: "https://www.atlassian.com/software/jira",
    img: Jira,
  },
  {
    name: "Slack",
    url: "https://slack.com",
    img: Slack,
  },
  {
    name: "MySQL",
    url: "https://mysql.com",
    img: MySQL,
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    img: PostgreSQL,
  },
  {
    name: "Oracle",
    url: "https://www.oracle.com/",
    img: Oracle,
  },
  {
    name: "Microsoft SQL Server",
    url: "https://www.microsoft.com/en-us/sql-server",
    img: MsSQL,
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    img: MongoDB,
  },
  {
    name: "Redis",
    url: "https://redis.io/",
    img: Redis,
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM
  },
  {
    name: "YARN",
    url: "https://yarnpkg.com/",
    img: YARN
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
  {
    name: "Solidity",
    url: "https://soliditylang.org/",
    img: Solidity
  },
  {
    name: "Hardhat",
    url: "https://hardhat.org/",
    img: Hardhat
  },
  {
    name: "EthersJS",
    url: "https://docs.ethers.io/v5/",
    img: Ethers
  },
  {
    name: "web3js",
    url: "https://web3js.readthedocs.io/en/v1.7.4/",
    img: Web3
  },
  {
    name: "The Graph",
    url: "https://thegraph.com/en/",
    img: Graph
  },
]