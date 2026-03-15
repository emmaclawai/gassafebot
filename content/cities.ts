export interface City {
  slug: string
  name: string
  region: string
  description: string
  areas: string[]
  searchTerms: string[]
  demand: 'High' | 'Very High' | 'Medium' | 'Low'
  priority?: number
}

export const cities: City[] = [
  {
    slug: 'london',
    name: 'London',
    region: 'Greater London',
    description: 'The UK\'s largest market for gas engineers. High competition but massive demand across all London boroughs. Our SEO strategies are designed to help you stand out in this crowded market.',
    areas: ['Westminster', 'Kensington', 'Chelsea', 'Camden', 'Islington', 'Hackney', 'Tower Hamlets', 'Greenwich', 'Lewisham', 'Southwark', 'Lambeth', 'Wandsworth', 'Hammersmith', 'Fulham', 'Ealing', 'Hounslow', 'Richmond', 'Kingston', 'Merton', 'Sutton', 'Croydon', 'Bromley', 'Bexley', 'Barking', 'Dagenham', 'Redbridge', 'Newham', 'Waltham Forest', 'Haringey', 'Enfield', 'Barnet', 'Harrow', 'Hillingdon', 'Hounslow', 'Hillingdon'],
    searchTerms: ['gas engineer London', 'boiler repair London', 'gas safe engineer London', 'heating engineer London', 'boiler service London'],
    demand: 'Very High',
    priority: 1,
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    region: 'Greater Manchester',
    description: 'A thriving market with strong demand for gas engineers across the city and surrounding towns. Excellent opportunities for local SEO domination.',
    areas: ['City Centre', 'Salford', 'Eccles', 'Stretford', 'Sale', 'Altrincham', 'Wythenshawe', 'Didsbury', 'Chorlton', 'Withington', 'Rusholme', 'Fallowfield', 'Levenshulme', 'Burnage', 'Heaton Chapel', 'Stockport', 'Oldham', 'Rochdale', 'Bury', 'Bolton', 'Wigan'],
    searchTerms: ['gas engineer Manchester', 'boiler repair Manchester', 'gas safe engineer Manchester', 'heating engineer Manchester', 'boiler service Manchester'],
    demand: 'Very High',
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    description: 'The UK\'s second-largest city offers significant opportunities for gas engineers. Strong demand across diverse residential areas.',
    areas: ['City Centre', 'Edgbaston', 'Harborne', 'Selly Oak', 'Moseley', 'Kings Heath', 'Stirchley', 'Yardley', 'Acocks Green', 'Hall Green', 'Solihull', 'Erdington', 'Perry Barr', 'Handsworth', 'Aston', 'Digbeth', 'Jewellery Quarter', 'Sutton Coldfield', 'Walsall', 'West Bromwich', 'Dudley'],
    searchTerms: ['gas engineer Birmingham', 'boiler repair Birmingham', 'gas safe engineer Birmingham', 'heating engineer Birmingham', 'boiler service Birmingham'],
    demand: 'Very High',
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    description: 'A rapidly growing city with increasing demand for heating services. Great potential for establishing strong local presence.',
    areas: ['City Centre', 'Headingley', 'Hyde Park', 'Chapel Allerton', 'Roundhay', 'Oakwood', 'Moortown', 'Alwoodley', 'Horsforth', 'Kirkstall', 'Burley', 'Armley', 'Beeston', 'Holbeck', 'Hunslet', 'Cross Gates', 'Seacroft', 'Rothwell', 'Garforth', 'Pudsey', 'Bramley'],
    searchTerms: ['gas engineer Leeds', 'boiler repair Leeds', 'gas safe engineer Leeds', 'heating engineer Leeds', 'boiler service Leeds'],
    demand: 'High',
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Scotland',
    description: 'Scotland\'s largest city with consistent demand for gas engineers. Strong market for heating services across diverse neighbourhoods.',
    areas: ['City Centre', 'West End', 'Hillhead', 'Partick', 'Hyndland', 'Anniesland', 'Jordanhill', 'Scotstoun', 'Govan', 'Ibrox', 'Pollokshields', 'Shawlands', 'Strathbungo', 'Battlefield', 'Mount Florida', 'Cathcart', 'Giffnock', 'Clarkston', 'Newton Mearns', 'East Kilbride', 'Paisley'],
    searchTerms: ['gas engineer Glasgow', 'boiler repair Glasgow', 'gas safe engineer Glasgow', 'heating engineer Glasgow', 'boiler service Glasgow'],
    demand: 'High',
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside',
    description: 'A vibrant city with steady demand for gas engineering services. Good opportunities for local SEO across the city and surrounding areas.',
    areas: ['City Centre', 'Waterfront', 'Georgian Quarter', 'Ropewalks', 'Baltic Triangle', 'Aigburth', 'Allerton', 'Childwall', 'Gateacre', 'Woolton', 'Mossley Hill', 'Sefton Park', 'Wavertree', 'Toxteth', 'Dingle', 'Anfield', 'Everton', 'Walton', 'Kirkdale', 'Bootle', 'Crosby', 'Formby'],
    searchTerms: ['gas engineer Liverpool', 'boiler repair Liverpool', 'gas safe engineer Liverpool', 'heating engineer Liverpool', 'boiler service Liverpool'],
    demand: 'High',
  },
  {
    slug: 'sheffield',
    name: 'Sheffield',
    region: 'South Yorkshire',
    description: 'A city with a mix of traditional and modern housing stock, creating diverse opportunities for gas engineers.',
    areas: ['City Centre', 'Ecclesall', 'Millhouses', 'Carter Knowle', 'Banner Cross', 'Broomhall', 'Broomhill', 'Crookes', 'Walkley', 'Hillsborough', 'Stannington', 'Rotherham', 'Meadowhead', 'Woodseats', 'Gleadless', 'Mosborough', 'Halfway', 'Dronfield', 'Chesterfield'],
    searchTerms: ['gas engineer Sheffield', 'boiler repair Sheffield', 'gas safe engineer Sheffield', 'heating engineer Sheffield', 'boiler service Sheffield'],
    demand: 'High',
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    region: 'South West',
    description: 'A prosperous city with high property values and strong demand for quality heating services. Excellent market for premium positioning.',
    areas: ['City Centre', 'Clifton', 'Redland', 'Cotham', 'Kingsdown', 'Stokes Croft', 'Montpelier', 'St Pauls', 'Easton', 'Greenbank', 'Fishponds', 'Stapleton', 'Frenchay', 'Bradley Stoke', 'Patchway', 'Filton', 'Henleaze', 'Westbury-on-Trym', 'Southmead', 'Horfield', 'Gloucester Road'],
    searchTerms: ['gas engineer Bristol', 'boiler repair Bristol', 'gas safe engineer Bristol', 'heating engineer Bristol', 'boiler service Bristol'],
    demand: 'High',
  },
  {
    slug: 'nottingham',
    name: 'Nottingham',
    region: 'East Midlands',
    description: 'A growing city with expanding suburbs and consistent demand for heating services across residential areas.',
    areas: ['City Centre', 'West Bridgford', 'The Park', 'Lenton', 'Beeston', 'Wollaton', 'Mapperley', 'Carrington', 'Sherwood', 'Arnold', 'Woodthorpe', 'Gedling', 'Carlton', 'Netherfield', 'Colwick', 'West Bridgford', 'Ruddington', 'Beeston', 'Stapleford', 'Ilkeston'],
    searchTerms: ['gas engineer Nottingham', 'boiler repair Nottingham', 'gas safe engineer Nottingham', 'heating engineer Nottingham', 'boiler service Nottingham'],
    demand: 'Medium',
  },
  {
    slug: 'newcastle',
    name: 'Newcastle',
    region: 'Tyne and Wear',
    description: 'A vibrant North East city with steady demand for gas engineers across the urban core and surrounding towns.',
    areas: ['City Centre', 'Jesmond', 'Gosforth', 'Heaton', 'Byker', 'Ouseburn', 'Sandyford', 'Shieldfield', 'Fenham', 'Benwell', 'Elswick', 'Walker', 'Wallsend', 'North Shields', 'Whitley Bay', 'Tynemouth', 'South Shields', 'Gateshead', 'Washington', 'Blyth'],
    searchTerms: ['gas engineer Newcastle', 'boiler repair Newcastle', 'gas safe engineer Newcastle', 'heating engineer Newcastle', 'boiler service Newcastle'],
    demand: 'Medium',
  },
  {
    slug: 'leicester',
    name: 'Leicester',
    region: 'East Midlands',
    description: 'A diverse city with varied housing stock and consistent demand for heating services across multiple neighbourhoods.',
    areas: ['City Centre', 'Clarendon Park', 'Stoneygate', 'Knighton', 'Aylestone', 'Westcotes', 'Belgrave', 'North Evington', 'Evington', 'Goodwood', 'Rushey Mead', 'Thurmaston', 'Syston', 'Birstall', 'Glenfield', 'Braunstone', 'Wigston', 'Oadby'],
    searchTerms: ['gas engineer Leicester', 'boiler repair Leicester', 'gas safe engineer Leicester', 'heating engineer Leicester', 'boiler service Leicester'],
    demand: 'Medium',
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    description: 'Scotland\'s capital with high property values and strong demand for quality heating services across the city.',
    areas: ['City Centre', 'New Town', 'Old Town', 'Stockbridge', 'Dean Village', 'West End', 'Haymarket', 'Bruntsfield', 'Morningside', 'Marchmont', 'Newington', 'Prestonfield', 'Portobello', 'Leith', 'Trinity', 'Craigleith', 'Blackhall', 'Corstorphine', 'Gyle', 'South Gyle', 'Barnton'],
    searchTerms: ['gas engineer Edinburgh', 'boiler repair Edinburgh', 'gas safe engineer Edinburgh', 'heating engineer Edinburgh', 'boiler service Edinburgh'],
    demand: 'High',
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}

export function getPhase1Cities(): City[] {
  return cities
}
