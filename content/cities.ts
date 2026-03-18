export interface City {
  slug: string
  name: string
  county: string
  region: string
  postcodes: string[]
  population: string
  competitionLevel: 'Low' | 'Medium' | 'High'
  monthlySearches: number
  description?: string
  searchTerms?: string[]
  areas?: string[]  // Optional - used by dynamic route
}

// Static city pages take priority - these cities have dedicated folders in app/gas-engineer-marketing/
// This data is used by the homepage to display city cards
const staticCities: City[] = [
  {
    slug: 'swindon',
    name: 'Swindon',
    county: 'Wiltshire',
    region: 'South West',
    postcodes: ['SN1', 'SN2', 'SN3', 'SN4', 'SN5', 'SN6'],
    population: '185,000',
    competitionLevel: 'Low',
    monthlySearches: 2100
  },
  {
    slug: 'peterborough',
    name: 'Peterborough',
    county: 'Cambridgeshire',
    region: 'East of England',
    postcodes: ['PE1', 'PE2', 'PE3', 'PE4', 'PE5', 'PE6', 'PE7'],
    population: '215,000',
    competitionLevel: 'Low',
    monthlySearches: 2900
  },
  {
    slug: 'telford',
    name: 'Telford',
    county: 'Shropshire',
    region: 'West Midlands',
    postcodes: ['TF1', 'TF2', 'TF3', 'TF4', 'TF7'],
    population: '180,000',
    competitionLevel: 'Low',
    monthlySearches: 1800
  },
  {
    slug: 'northampton',
    name: 'Northampton',
    county: 'Northamptonshire',
    region: 'East Midlands',
    postcodes: ['NN1', 'NN2', 'NN3', 'NN4', 'NN5'],
    population: '230,000',
    competitionLevel: 'Low',
    monthlySearches: 2600
  },
  {
    slug: 'gloucester',
    name: 'Gloucester',
    county: 'Gloucestershire',
    region: 'South West',
    postcodes: ['GL1', 'GL2', 'GL3', 'GL4'],
    population: '140,000',
    competitionLevel: 'Low',
    monthlySearches: 1600
  },
  {
    slug: 'basildon',
    name: 'Basildon',
    county: 'Essex',
    region: 'East of England',
    postcodes: ['SS13', 'SS14', 'SS15', 'SS16'],
    population: '185,000',
    competitionLevel: 'Low',
    monthlySearches: 2100
  },
  {
    slug: 'cheltenham',
    name: 'Cheltenham',
    county: 'Gloucestershire',
    region: 'South West',
    postcodes: ['GL50', 'GL51', 'GL52', 'GL53'],
    population: '120,000',
    competitionLevel: 'Low',
    monthlySearches: 1400
  },
  {
    slug: 'wakefield',
    name: 'Wakefield',
    county: 'West Yorkshire',
    region: 'Yorkshire & Humber',
    postcodes: ['WF1', 'WF2', 'WF3', 'WF4'],
    population: '230,000',
    competitionLevel: 'Low',
    monthlySearches: 2400
  },
  {
    slug: 'derby',
    name: 'Derby',
    county: 'Derbyshire',
    region: 'East Midlands',
    postcodes: ['DE1', 'DE3', 'DE21', 'DE22', 'DE23', 'DE24'],
    population: '260,000',
    competitionLevel: 'Low',
    monthlySearches: 2800
  },
  {
    slug: 'luton',
    name: 'Luton',
    county: 'Bedfordshire',
    region: 'East of England',
    postcodes: ['LU1', 'LU2', 'LU3', 'LU4'],
    population: '220,000',
    competitionLevel: 'Low',
    monthlySearches: 2500
  }
]

// This empty array is used by the dynamic [city] route - it won't generate any pages
// since all cities now have static pages
export const cities: City[] = []

// Returns all static cities for the homepage city grid
export const getPhase1Cities = (): City[] => staticCities

export const getCityBySlug = (slug: string): City | undefined => {
  return staticCities.find(city => city.slug === slug)
}

export const getCitiesByCompetition = (level: City['competitionLevel']): City[] => {
  return staticCities.filter(city => city.competitionLevel === level)
}

export const getTotalMonthlySearches = (): number => {
  return staticCities.reduce((total, city) => total + city.monthlySearches, 0)
}
