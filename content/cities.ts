export interface City {
  slug: string
  name: string
  county: string
  postcodes: string[]
  population: string
  competitionLevel: 'Low' | 'Medium' | 'High'
  monthlySearches: number
}

// Static city pages take priority - these cities have dedicated folders in app/gas-engineer-marketing/
// Add new cities here ONLY if they don't have a static page yet
export const cities: City[] = [
  // Future cities go here - they will be rendered by the dynamic [city] route
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
