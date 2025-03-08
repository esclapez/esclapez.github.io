import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GoogleScolarIcon from '../components/Icon/GoogleScholarIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/HeaderPict.jpg';
import profilepic from '../images/PictLight.png';
import pelePB from '../images/portfolio/CoverPistonBowl.png';
import dalescloud from '../images/portfolio/DALES.png';
import etaoc_see from '../images/portfolio/eTAOC_sea.jpg';
import sundials from '../images/portfolio/SundialsODE.png';
import testimonialImage from '../images/Windmolens.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioSection,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Lucas Esclapez',
  description: "Personal webpage of Lucas Esclapez"
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Lucas Esclapez.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am <strong className="text-stone-100">Research Software Engineer</strong> and a <strong className="text-stone-100">Computational Scientist</strong> based in the Netherlands, currently
        working at the <strong className="text-stone-100"> Netherlands eScience Center</strong> in Amsterdam. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};


/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm an research software engineer, with a PhD in fluid mechanics and energetics, and a broad interest in scientific computing.
  Over the years, I have worked with numerous scientific softwares with a common denominator: the need to crush large amount of data using 
  large high performance computing (HPC) platforms.
  `,
  aboutItems: [
    {label: 'Location', text: 'Leiden, Netherlands', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationality', text: 'French', Icon: FlagIcon},
    {label: 'Interests', text: 'Drums, rock climbing, reading, cooking', Icon: SparklesIcon},
    {label: 'Study', text: 'PhD, INP Toulouse, France', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Netherlands eScience Center.', Icon: BuildingOffice2Icon},
  ],
};



/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Dutch',
        level: 3,
      },
    ],
  },
  {
    name: 'Computing',
    skills: [
      {
        name: 'Fortran',
        level: 7,
      },
      {
        name: 'C++',
        level: 6,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'Julia',
        level: 3,
      },
    ],
  },
  {
    name: 'HPC',
    skills: [
      {
        name: 'MPI',
        level: 7,
      },
      {
        name: 'OpenMP',
        level: 6,
      },
      {
        name: 'OpenACC',
        level: 6,
      },
    ],
  },
  {
    name: 'Misc',
    skills: [
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'LateX',
        level: 4,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2015',
    location: 'Institut National Polytechnique, Toulouse, France',
    title: 'PhD, Fluid Mechanics & Energetics',
    content: <p>Numerical investigation of ignition and flame propagation in aeronautical gas turbines.</p>
  },
  {
    date: 'Oct. 2011',
    location: 'Institut National des Sciences Appliquees, Toulouse, France',
    title: 'Msc Research, Energetics and Transfers',
    content: <p>Combustion, Microfluidic, Fluid Mechanics, Radiative heat transfer, ...</p>
  },
  {
    date: 'Oct. 2011',
    location: 'Institut National des Sciences Appliquees, Toulouse, France',
    title: 'Msc, Mechanical Engineering',
    content: <p>Fluid mechanics, Heat transfer, Numerical Methods, Machines Design, ... </p>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2023 - Present',
    location: 'Netherlands eScience Center, Amsterdam, NL',
    title: 'Research Software Engineer',
    content: (
      <p>
      </p>
    ),
  },
  {
    date: 'July 2021 - June 2023',
    location: 'National Renewable Energy Lab., Denver, CO, USA',
    title: 'Project Scientist',
    content: (
      <p>
      </p>
    ),
  },
  {
    date: 'June 2018 - June 2021',
    location: 'Lawrence Berkeley National Lab., Berkeley, CA, USA',
    title: 'Project Scientist',
    content: (
      <p>
      </p>
    ),
  },
  {
    date: 'October 2016 - May 2018',
    location: 'CERFACS, Toulouse, FR',
    title: 'Post-doctoral researcher',
    content: (
      <p>
      </p>
    ),
  },
  {
    date: 'June 2015 - September 2016',
    location: 'Center for Turbulence Research, Stanford, CA, USA',
    title: 'Post-doctoral researcher',
    content: (
      <p>
      </p>
    ),
  },
];

/**
 * Portfolio section
 */
export const portfolio: PortfolioSection = {
  imageSrc: testimonialImage,
  portfolioItems: [
    {
      title: 'Accelerating atmospheric simulations with OpenACC',
      text: 'Within ESiWACE3, we collaborated with the Dutch Atmospheric LES (DALES) developers to port the solver to GPUs. To minimize disruption to the Fortran90 code base while enabling significant speed-up, we employed OpenACC. On a node basis, we obtained a ~12x speedup on H100 NVidia GPUs on the Snellius cluster (SURF). An overview of the work and performances is available on the link below.',
      image: dalescloud,
      link: 'https://arxiv.org/pdf/2502.20412',
    },
    {
      title: 'Rare events sampling in geophysical high-dimentional dynamical systems',
      text: 'The Atlantic ocean circulation plays a key role in the global redistribution of heat and its potential collapse has been identified as a major tipping climatic event. We worked with the team lead by H. Dijkstra in Utrecht to apply for the first time trajectory-adaptive multi-level sampling (TAMS) to a global circulation model POP in order to predict collapse probability before 2100.',
      image: etaoc_see,
      link: 'https://research-software-directory.org/projects/etaoc',
    },
    {
      title: 'ExaScale-ready time integrators for many-ODEs systems',
      text: 'Reactive flow simulations involve the integration of a stiff ODE system representing the chemical decomposition of a fuel. In collaboration with the SUNDIALS team at LLNL (USA), we integrated a several ODE integrators into the Pele framework to enable high-throughput chemical integration. This was a key ingredient in achieving efficient combustion simulations at ExaScale, i.e. 3/4 of Frontier.',
      image: sundials,
      link: 'https://arxiv.org/pdf/2405.01713',
    },
    {
      title: 'Pele: reactive flow simulations at the ExaScale',
      text: 'Within the ExaScale Computing Project (ECP), we developed the Pele suite, a suite of CFD softwares comprising a low-Mach and a compressible Navier-Stokes solvers as well as a shared library for chemistry, transport and multiphsyics modules. Built upon AMReX, an Adaptive Mesh Refinement library, the Pele suite is the first ExaScale ready CFD solver for chemicaly reactive flows.', 
      image: pelePB,
      link: 'https://epubs.siam.org/doi/10.1137/1.9781611977967.2',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you want to chat.', 
  items: [
    {
      type: ContactType.Email,
      text: 'lucas.esclapez@gmail.com',
      href: 'mailto:lucas.esclapez@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Leiden, Netherlands',
      href: 'https://www.google.ca/maps/place/Leiden/@52.1517296,4.4403846,13z',
    },
    {
      type: ContactType.Github,
      text: 'esclapez',
      href: 'https://github.com/esclapez',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/esclapez'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lucasesclapez/'},
  {label: 'GoogleScholar', Icon: GoogleScolarIcon, href: 'https://scholar.google.fr/citations?user=Cce_XDQAAAAJ&hl=en&oi=sra'},
];
