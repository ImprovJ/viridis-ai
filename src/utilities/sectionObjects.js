import GeneticAlgorithms from '../components/blogs/EvolutionaryAlgorithms/GeneticAlgorithms.jsx';
import IntroToStockMarkets from '../components/blogs/Finance/IntroToStockMarkets.jsx';
import LogoDesignPrinciples from '../components/blogs/Logos/LogoDesignPrinciples.jsx';

// Import images
import evolutionaryAlgorithmsImg from '../assets/sectionImgs/statue.png';
import financeImg from '../assets/sectionImgs/dogs.png';
import logosImg from '../assets/sectionImgs/whale.png';

const sectionObjects = [
  {
    id: "evolutionaryalgorithms",
    title: "Evolutionary Algorithms",
    path: "/section/evolutionaryalgorithms",
    image: evolutionaryAlgorithmsImg,
    blogs: [
      {
        id: "genetic-algorithms",
        title: "Genetic Algorithms",
        content: GeneticAlgorithms
      },
    ]
  },
  {
    id: "finance",
    title: "Finance",
    path: "/section/finance",
    image: financeImg,
    blogs: [
      {
        id: "intro-to-stock-markets",
        title: "Introduction to Stock Markets",
        content: IntroToStockMarkets
      },
    ]
  },
  {
    id: "logos",
    title: "Logos",
    path: "/section/logos",
    image: logosImg,
    blogs: [
      {
        id: "logo-design-principles",
        title: "Logo Design Principles",
        content: LogoDesignPrinciples
      },
    ]
  },
];

export default sectionObjects;