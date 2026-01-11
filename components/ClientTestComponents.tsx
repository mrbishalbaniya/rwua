'use client';

import WordPressConnectionTest from '@/components/WordPressConnectionTest';
import WordPressDataTest from '@/components/WordPressDataTest';
import MissionDataTest from '@/components/MissionDataTest';
import FocusAreasDataTest from '@/components/FocusAreasDataTest';
import ShowcaseMembersDataTest from '@/components/ShowcaseMembersDataTest';
import AboutDataTest from '@/components/AboutDataTest';
import DirectAboutQueryTest from '@/components/DirectAboutQueryTest';
import WordPressDebugTest from '@/components/WordPressDebugTest';

export default function ClientTestComponents() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-4">
      <WordPressDebugTest />
      <DirectAboutQueryTest />
      <WordPressConnectionTest />
      <WordPressDataTest />
      <MissionDataTest />
      <FocusAreasDataTest />
      <ShowcaseMembersDataTest />
      <AboutDataTest />
    </div>
  );
}