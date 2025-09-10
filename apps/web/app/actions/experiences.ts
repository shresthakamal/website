'use server';

import prisma from '@repo/db/client';

// Types for Experience data
export interface ExperienceData {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logoPath: string | null;
  logoType: string | null;
  startYear: number;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

// Helper function to safely convert JsonArray to string array
function jsonArrayToStringArray(jsonArray: any): string[] {
  if (Array.isArray(jsonArray)) {
    return jsonArray.filter((item): item is string => typeof item === 'string');
  }
  return [];
}

// Helper function to transform Prisma experience to ExperienceData
function transformExperience(experience: any): ExperienceData {
  return {
    id: experience.id,
    title: experience.title,
    company: experience.company,
    location: experience.location,
    period: experience.period,
    type: experience.type,
    description: experience.description,
    achievements: jsonArrayToStringArray(experience.achievements),
    technologies: jsonArrayToStringArray(experience.technologies),
    logoPath: experience.logoPath,
    logoType: experience.logoType,
    startYear: experience.startYear,
    sortOrder: experience.sortOrder,
    createdAt: experience.createdAt,
    updatedAt: experience.updatedAt,
  };
}

/**
 * Get all experiences ordered by sort order and start year (descending)
 */
export async function getAllExperiences(): Promise<ExperienceData[]> {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: [
        { sortOrder: 'asc' },
        { startYear: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return experiences.map(transformExperience);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw new Error('Failed to fetch experiences');
  }
}

/**
 * Get experience by ID
 */
export async function getExperienceById(id: number): Promise<ExperienceData | null> {
  try {
    const experience = await prisma.experience.findUnique({
      where: { id }
    });

    if (!experience) {
      return null;
    }

    return transformExperience(experience);
  } catch (error) {
    console.error('Error fetching experience by ID:', error);
    throw new Error('Failed to fetch experience');
  }
}

/**
 * Get experiences by company
 */
export async function getExperiencesByCompany(company: string): Promise<ExperienceData[]> {
  try {
    const experiences = await prisma.experience.findMany({
      where: {
        company: {
          contains: company,
          mode: 'insensitive'
        }
      },
      orderBy: [
        { startYear: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return experiences.map(transformExperience);
  } catch (error) {
    console.error('Error fetching experiences by company:', error);
    throw new Error('Failed to fetch experiences by company');
  }
}

/**
 * Get experiences by employment type (Full-time, Part-time, Contract)
 */
export async function getExperiencesByType(type: string): Promise<ExperienceData[]> {
  try {
    const experiences = await prisma.experience.findMany({
      where: {
        type: {
          equals: type,
          mode: 'insensitive'
        }
      },
      orderBy: [
        { startYear: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return experiences.map(transformExperience);
  } catch (error) {
    console.error('Error fetching experiences by type:', error);
    throw new Error('Failed to fetch experiences by type');
  }
}

/**
 * Get experiences that include specific technology
 */
export async function getExperiencesByTechnology(technology: string): Promise<ExperienceData[]> {
  try {
    const experiences = await prisma.experience.findMany({
      where: {
        technologies: {
          path: [],
          array_contains: technology
        }
      },
      orderBy: [
        { startYear: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return experiences.map(transformExperience);
  } catch (error) {
    console.error('Error fetching experiences by technology:', error);
    throw new Error('Failed to fetch experiences by technology');
  }
}

/**
 * Get experiences within a date range
 */
export async function getExperiencesByYearRange(startYear: number, endYear: number): Promise<ExperienceData[]> {
  try {
    const experiences = await prisma.experience.findMany({
      where: {
        startYear: {
          gte: startYear,
          lte: endYear
        }
      },
      orderBy: [
        { startYear: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return experiences.map(transformExperience);
  } catch (error) {
    console.error('Error fetching experiences by year range:', error);
    throw new Error('Failed to fetch experiences by year range');
  }
}

/**
 * Get latest N experiences
 */
export async function getLatestExperiences(limit: number = 5): Promise<ExperienceData[]> {
  try {
    const experiences = await prisma.experience.findMany({
      take: limit,
      orderBy: [
        { startYear: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return experiences.map(transformExperience);
  } catch (error) {
    console.error('Error fetching latest experiences:', error);
    throw new Error('Failed to fetch latest experiences');
  }
}

/**
 * Search experiences by title or description
 */
export async function searchExperiences(query: string): Promise<ExperienceData[]> {
  try {
    const experiences = await prisma.experience.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            description: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            company: {
              contains: query,
              mode: 'insensitive'
            }
          }
        ]
      },
      orderBy: [
        { startYear: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return experiences.map(transformExperience);
  } catch (error) {
    console.error('Error searching experiences:', error);
    throw new Error('Failed to search experiences');
  }
}

/**
 * Get total count of experiences
 */
export async function getExperienceCount(): Promise<number> {
  try {
    return await prisma.experience.count();
  } catch (error) {
    console.error('Error counting experiences:', error);
    throw new Error('Failed to count experiences');
  }
}

/**
 * Get unique companies from experiences
 */
export async function getUniqueCompanies(): Promise<string[]> {
  try {
    const companies = await prisma.experience.findMany({
      select: {
        company: true
      },
      distinct: ['company'],
      orderBy: {
        company: 'asc'
      }
    });

    return companies.map(exp => exp.company);
  } catch (error) {
    console.error('Error fetching unique companies:', error);
    throw new Error('Failed to fetch unique companies');
  }
}

/**
 * Get all unique technologies used across experiences
 */
export async function getUniqueTechnologies(): Promise<string[]> {
  try {
    const experiences = await prisma.experience.findMany({
      select: {
        technologies: true
      }
    });

    const allTechnologies = new Set<string>();
    
    experiences.forEach(exp => {
      const technologies = jsonArrayToStringArray(exp.technologies);
      technologies.forEach(tech => allTechnologies.add(tech));
    });

    return Array.from(allTechnologies).sort();
  } catch (error) {
    console.error('Error fetching unique technologies:', error);
    throw new Error('Failed to fetch unique technologies');
  }
}
