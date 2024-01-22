export const projectData = [

/***** ***** ***** ***** ***** *****/
/*                                 */
/*    WORK IN-PROGRESS PROJECTS    */
/*                                 */
/***** ***** ***** ***** ***** *****/
  {
    title: 'Austin Public Library website',
    description:
      "Collaborating with Austin Public Library technologists to iterate our city's library website.",
    access_at: 'https://library.austintexas.gov/',
    project_at: null,
    type: 'scraper',
    status: 'in development',
    categories: ['digital services'],
    contact: ['Liani Lye', '@lianilychee'],
    date: '2023-09-11T00:00:00.000Z',
    thumb: null,
    screenshot: `library.png`,
    featured: false,
    stack: [`Drupal`, `PHP`],
    skipSize: 496,
  },

  {
    title: 'Experience program (new)',
    description:
      'The Experience Program fosters the next generation of civics and technology leaders by developing data literacy practices, structured problem solving skills, and the ability to work in a collaborative environment.',
      /*
      Full blurb:
      'The Experience Program fosters the next generation of civics and technology leaders by developing data literacy practices, structured problem solving skills, and the ability to work in a collaborative environment.  We train leaders from <bootcamps and other places we source from> while improving open data and public interest technology within city government and other civic Austin organizations.',
      */
    access_at: null,
    project_at: null,
    type: 'scraper',
    status: 'in development',
    categories: ['digital services'],
    contact: ['Liani Lye', '@lianilychee'],
    date: '2023-09-11T00:00:00.000Z',
    thumb: null,
    screenshot: `experience.png`,
    featured: false,
    stack: ['Python', 'R', 'Azure Functions', `TypeScript`, `React`, `D3`],
    skipSize: 496,
  },

  {
    title: 'Indigent Defense Stats',
    description:
      'Collect and analyze court records from counties across Texas, to compare effectiveness of court-appointed with privately retained attorneys.',
    access_at: 'https://indigentdefense.net/',
    project_at: 'https://github.com/open-austin/indigent-defense-stats',
    type: 'scraper',
    status: 'in development',
    categories: ['justice system', 'web scraping'],
    contact: ['Dan Minshew', '@newswim'],
    date: '2021-05-14T00:00:00.000Z',
    thumb: null,
    screenshot: `indigent-defense.png`,
    featured: false,
    stack: ['Python', 'R', 'Azure Functions', `TypeScript`, `React`, `D3`],
    skipSize: 496,
  },

  {
    title: 'Educate program (new)',
    description:
      'The Experience program promotes digital literacy across city government agencies and community organizations across Austin, promoting neighborhood and issue-based dialogue.',
    access_at: null,
    project_at: null,
    type: 'scraper',
    status: 'in development',
    categories: ['digital services'],
    contact: ['Liani Lye', '@lianilychee'],
    date: '2023-09-11T00:00:00.000Z',
    thumb: null,
    screenshot: `educate.png`,
    featured: false,
    stack: ['Python', 'R', 'Azure Functions', `TypeScript`, `React`, `D3`],
    skipSize: 496,
  },

/*
  {
    title: 'Open Austin website',
    description:
      'This website!',
    access_at: '',
    project_at: 'https://github.com/open-austin/website-v2-vercel/',
    type: '',
    status: 'in development',
    categories: ['meta'],
    contact: ['Liani Lye, Dan Minshew'],
    date: '',
    thumb: null,
    screenshot: '',
    featured: true,
    archived: false,
    stack: ['Typescript', 'Next.JS', 'Vercel'],
    skipSize: 496,
  },
*/

/***** ***** ***** ***** ***** *****/
/*                                 */
/*         FINISHED PROJECTS       */
/*                                 */
/***** ***** ***** ***** ***** *****/

  {
    title: 'Phone Code Mapping',
    description:
      'Identifying geography and issue-area trends from anonymized mental health intake call data.',
    access_at: '',
    project_at: 'https://github.com/open-austin/phone-code-mapping',
    type: '',
    status: 'deployed',
    categories: ['mental health'],
    contact: ['Paul Vonder Haar'],
    date: '',
    thumb: null,
    screenshot: '',
    featured: true,
    archived: false,
    skipSize: 496,
  },

/*
  {
    title: 'Power Outages',
    description:
      'Tracking power outages in Austin over time to enable people to conduct analysis or advocacy.',
    access_at: '',
    project_at: 'https://github.com/open-austin/energy-outage',
    type: '',
    status: 'in development',
    categories: ['environment'],
    contact: ['Joe Caterine'],
    date: '',
    thumb: null,
    screenshot: '',
    featured: true,
    archived: false,
    skipSize: 496,
  },
*/

  {
    title: 'Visualizing Vulnerable Communities',
    description:
      "Through a two-part effort, we helped the Austin Transportation Dept (ATD) equitably focus their 2021 time and funding. We created a map to identify at-risk Austin communities. We then co-facilitated a public participation process to customize the map based on Austinites' lived experiences.",
    access_at:
      'https://austintransportation.shinyapps.io/vulnerability_weighting_map/',
    project_at: 'https://github.com/cityofaustin/vulnerability_weighting_map',
    type: 'website',
    status: 'deployed',
    categories: ['transportation'],
    contact: ['Liani Lye'],
    date: '',
    thumb: null,
    screenshot: '',
    featured: true,
    archived: false,
    skipSize: 552,
  },
  {
    title: 'Runoff Rally',
    description:
      'We partnered with the League of Women Voters Austin Area and the Travis County Clerk to create a poll worker signup website that is easy to use.',
    access_at: '',
    project_at: 'https://github.com/open-austin/rally-for-the-run-off',
    type: '',
    status: 'deployed',
    categories: ['voting'],
    contact: ['Daniel Roesler'],
    date: '',
    thumb: 'Runoff_Rally.png',
    screenshot: 'Runoff_Rally.png',
    featured: true,
    archived: false,
    skipSize: 496,
  },
  {
    title: 'Tenant File App',
    description:
      'Workflow for gathering tenant evidence is complicated and time consuming. The Tenant File App changes that, allowing tenants to easily document housing conditions, landlord-tenant interactions, and landlord neglect or abuse.',
    access_at: '',
    project_at: 'https://github.com/open-austin/BASTA-tfwa',
    type: 'website',
    status: 'deployed',
    categories: ['housing'],
    stack: ['C#', 'TypeScript', 'React.js', 'GraphQL', 'Google Cloud'],
    contact: ['Aaron Renaud'],
    date: '',
    thumb: null,
    screenshot: '',
    featured: true,
    archived: false,
    skipSize: 552,
  },
  {
    title: 'Vax.Codes',
    description:
      'Website allowing event organizers and businesses to verify that someone has received a Covid-19 vaccine by scanning a QR code issued by an approved health organization.',
    access_at: 'https://vax.codes/',
    project_at: 'https://github.com/open-austin/vax-codes',
    type: 'website',
    status: 'deployed',
    categories: ['health', 'covid'],
    contact: ['Daniel Roesler', '@danielroesler'],
    date: '2021-02-10T00:00:00.000Z',
    thumb: null,
    screenshot: 'vax-codes.png',
    featured: true,
    archived: false,
    skipSize: 552,
  },
  {
    title: 'Atmosphere License',
    description:
      'Open source software licenses with fossil fuel divestment provisions',
    access_at: 'https://www.open-austin.org/atmosphere-license/',
    project_at: 'https://github.com/open-austin/atmosphere-license',
    type: 'software licenses',
    status: 'deployed',
    categories: ['open source', 'environment'],
    stack: ['JavaScript', 'Liquid'],
    contact: ['Matt Carey', '@mcareyaus'],
    date: '2019-11-08T00:00:00.000Z',
    thumb: null,
    screenshot: 'atmosphere-license.png',
    featured: true,
    skipSize: 514,
  },
  {
    title: 'Eviction Hearing Scraper',
    description:
      'Scraper that extracts eviction hearing records from the Travis County Justice of the Peace website',
    access_at:
      'https://trla.maps.arcgis.com/apps/opsdashboard/index.html#/8f5beb8367f44d30aa2ed6eeb2b3b3e4',
    project_at: 'https://github.com/open-austin/eviction-hearing-parser',
    type: 'scraper',
    status: 'deployed',
    contact: ['info@open-austin.org'],
    categories: ['evictions'],
    stack: ['Python'],
    date: '2020-07-05T00:00:00.000Z',
    thumb: 'eviction-parser.png',
    screenshot: 'eviction-parser.png',
    featured: true,
    skipSize: 532,
  },
  {
    title: 'Instabus',
    description:
      "Instabus is a realtime map of Austin's public transit. It works well on mobile and desktop.",
    access_at: 'http://instabus.org',
    project_at: 'https://github.com/luqmaan/instabus',
    type: 'web application',
    status: 'deployed',
    categories: ['transportation'],
    stack: ['JavaScript'],
    contact: ['Luqmaan Dawoodjee', 'ldawoodjee@gmail.com'],
    date: '2015-04-09T00:00:00.000Z',
    thumb: 'instabus.png',
    screenshot: 'instabus.png',
    featured: false,
    skipSize: 510,
  },
  {
    title: 'Austin Park Equity',
    description:
      "Austin Park Equity is an open-source project that aims to increase equitable park access. Our maps help visualize how Austin's park resources are distributed throughout the City of Austin.",
    access_at: 'http://austinparkequity.com/',
    project_at: 'https://github.com/open-austin/austin-park-equity',
    type: 'web application',
    status: 'deployed',
    contact: ['Mateo Clarke', 'code@mateoclarke.com'],
    categories: ['GIS', 'mapping', 'parks', 'inequity', 'green-space'],
    stack: ['JavaScript', 'Ruby'],
    date: '2015-05-18T00:00:00.000Z',
    cfa_stage: 'Beta',
    screenshot: 'austinparkequity.png',
    featured: false,
    skipSize: 629,
  },
  {
    title: 'Budget Party',
    description:
      'Web app that teaches about the City Budget and invites you to remix how departments and services are funded',
    access_at: 'https://austinbudget.party',
    project_at: 'https://github.com/open-austin/budgetparty',
    type: 'web application',
    status: 'deployed',
    contact: ['Mateo Clarke', 'code@mateoclarke.com'],
    categories: ['civic engagement', 'Finance'],
    stack: ['JavaScript'],
    date: '2017-04-20T00:00:00.000Z',
    thumb: 'budget-party.png',
    screenshot: 'budget-party.png',
    featured: false,
    skipSize: 531,
  },

/*
  {
    title: 'BallotAPI',
    description: 'Free, public-domain database of every ballot in the U.S.',
    access_at: 'https://ballotapi.org/',
    project_at: 'https://github.com/open-austin/ballotapi',
    type: 'web service',
    status: 'deployed',
    categories: ['government', 'elections'],
    contact: ['Daniel Roesler', '@diafygi'],
    date: '2019-03-14T00:00:00.000Z',
    thumb: null,
    screenshot: 'ballotapi.png',
    featured: false,
    stack: ['Python', 'Jekyll', 'PostgreSQL'],
    skipSize: 496,
  },
*/
]
