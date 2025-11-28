import { NavBar } from '@/components/nav_bar';
import { HeroSection } from '@/components/hero_section';
import { EducationSection } from '@/components/education_section';
import { ResearchInterests } from '@/components/research_interests';
import { ResearchExperience } from '@/components/research_experience';
import { SkillsSection } from '@/components/skills_section';
import { HonorsSection } from '@/components/honors_section';
import { FooterSection } from '@/components/footer_section';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <NavBar />
      <HeroSection />
      <EducationSection />
      <ResearchInterests />
      <ResearchExperience />
      <SkillsSection />
      <HonorsSection />
      <FooterSection />
    </main>
  );
}
