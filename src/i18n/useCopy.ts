import { useMemo } from "react";
import {
  aboutHighlights,
  awards,
  certifications,
  education,
  experience,
  navItems,
  profile,
  research,
  services,
  skillCards,
  stats,
  teaching,
  type Project,
} from "../data/profile";
import {
  enAboutHighlights,
  enAwards,
  enCertifications,
  enEducation,
  enExperience,
  enProfile,
  enProjects,
  enResearch,
  enServices,
  enTeaching,
} from "./en-content";
import { useLanguage } from "./LanguageProvider";
import type { Locale } from "./locale";
import { ui } from "./ui";

function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "id") return project;
  const text = enProjects[project.name];
  if (!text) return project;
  return {
    ...project,
    description: text.description,
    org: text.org ?? project.org,
    stack: text.stack ?? project.stack,
    caseStudy: text.caseStudy ?? project.caseStudy,
  };
}

export function buildCopy(locale: Locale) {
  const copy = ui[locale];
  const isEn = locale === "en";
  const cv = isEn ? profile.cvEn : profile.cv;

  return {
    locale,
    ui: copy,
    navItems: navItems.map((item) => ({
      ...item,
      label: copy.nav[item.id],
    })),
    profile: {
      ...profile,
      location: isEn ? enProfile.location : profile.location,
      greeting: isEn ? enProfile.greeting : profile.greeting,
      tagline: isEn ? enProfile.tagline : profile.tagline,
      bio: isEn ? enProfile.bio : [...profile.bio],
      cv,
      cvFileName: cv.slice(cv.lastIndexOf("/") + 1),
    },
    aboutHighlights: isEn ? [...enAboutHighlights] : [...aboutHighlights],
    services: services.map((service) => {
      const text = isEn ? enServices[service.no] : undefined;
      return {
        ...service,
        title: text?.title ?? service.title,
        description: text?.description ?? service.description,
      };
    }),
    experience: experience.map((job) => {
      const text = isEn ? enExperience[job.company] : undefined;
      return {
        ...job,
        type: text?.type ?? job.type,
        location: text?.location ?? job.location,
        period: text?.period ?? job.period,
        role: text?.role ?? job.role,
        points: text?.points ?? [...job.points],
      };
    }),
    skillCards,
    stats: stats.map((item, index) => ({
      ...item,
      label: [copy.stats.experience, copy.stats.skills, copy.stats.projects, copy.stats.gpa][
        index
      ],
    })),
    education: {
      ...education,
      faculty: isEn ? enEducation.faculty : education.faculty,
      program: isEn ? enEducation.program : education.program,
      note: isEn ? enEducation.note : education.note,
    },
    teaching: isEn ? enTeaching : [...teaching],
    certifications: certifications.map((item) => ({
      ...item,
      title: isEn ? (enCertifications[item.title]?.title ?? item.title) : item.title,
      org: isEn ? (enCertifications[item.title]?.org ?? item.org) : item.org,
    })),
    awards: awards.map((item) => ({
      ...item,
      title: isEn ? (enAwards[item.title]?.title ?? item.title) : item.title,
    })),
    research: isEn ? enResearch : research.map((item) => ({ ...item })),
    localizeProject: (project: Project) => localizeProject(project, locale),
  };
}

export function useCopy() {
  const { locale } = useLanguage();
  return useMemo(() => buildCopy(locale), [locale]);
}
