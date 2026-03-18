export interface City {
  slug: string
  name: string
  county: string
  postcodes: string[]
  population: string
  competitionLevel: 'Low' | 'Medium' | 'High'
  monthlySearches: number
}

export const cities: City[] = [
  {
    slug: 'swindon',
    name: 'Swindon',
    county: 'Wiltshire',
    postcodes: ['SN1', 'SN2', 'SN3', 'SN4', 'SN5', 'SN6'],
    population: '185,000',
    competitionLevel: 'Low',
    monthlySearches: 2100
  },
  {
    slug: 'peterborough',
    name: 'Peterborough',
    county: 'Cambridgeshire',
    postcodes: ['PE1', 'PE2', 'PE3', 'PE4', 'PE5', 'PE6', 'PE7'],
    population: '215,000',
    competitionLevel: 'Low',
    monthlySearches: 2900
  },
  {
    slug: 'telford',
    name: 'Telford',
    county: 'Shropshire',
    postcodes: ['TF1', 'TF2', 'TF3', 'TF4', 'TF7'],
    population: '180,000',
    competitionLevel: 'Low',
    monthlySearches: 1800
  },
  {
    slug: 'northampton',
    name: 'Northampton',
    county: 'Northamptonshire',
    postcodes: ['NN1', 'NN2', 'NN3', 'NN4', 'NN5'],
    population: '230,000',
    competitionLevel: 'Low',
    monthlySearches: 2600
  },
  {
    slug: 'gloucester',
    name: 'Gloucester',
    county: 'Gloucestershire',
    postcodes: ['GL1', 'GL2', 'GL3', 'GL4'],
    population: '140,000',
    competitionLevel: 'Low',
    monthlySearches: 1600
  },
  {
    slug: 'basildon',
    name: 'Basildon',
    county: 'Essex',
    postcodes: ['SS13', 'SS14', 'SS15', 'SS16'],
    population: '185,000',
    competitionLevel: 'Low',
    monthlySearches: 2100
  },
  {
    slug: 'cheltenham',
    name: 'Cheltenham',
    county: 'Gloucestershire',
    postcodes: ['GL50', 'GL51', 'GL52', 'GL53'],
    population: '120,000',
    competitionLevel: 'Low',
    monthlySearches: 1400
  },
  {
    slug: 'wakefield',
    name: 'Wakefield',
    county: 'West Yorkshire',
    postcodes: ['WF1', 'WF2', 'WF3', 'WF4'],
    population: '230,000',
    competitionLevel: 'Low',
    monthlySearches: 2400
  },
  {
    slug: 'derby',
    name: 'Derby',
    county: 'Derbyshire',
    postcodes: ['DE1', 'DE3', 'DE21', 'DE22', 'DE23', 'DE24'],
    population: '260,000',
    competitionLevel: 'Low',
    monthlySearches: 2800
  },
  {
    slug: 'luton',
    name: 'Luton',
    county: 'Bedfordshire',
    postcodes: ['LU1', 'LU2', 'LU3', 'LU4'],
    population: '220,000',
    competitionLevel: 'Low',
    monthlySearches: 2500
  }
]

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug)
}

export const getCitiesByCompetition = (level: City['competitionLevel']): City[] => {
  return cities.filter(city => city.competitionLevel === level)
}

export const getTotalMonthlySearches = (): number => {
  return cities.reduce((total, city) => total + city.monthlySearches, 0)
}
