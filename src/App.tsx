/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#263634] antialiased selection:bg-[#F5D95B]/40 selection:text-[#124E50] overflow-x-hidden">
      {/* Top Navigation */}
      <Header />

      {/* Main Focused Opt-In Hero Screen */}
      <main className="flex-1 flex flex-col justify-center">
        <HeroSection />
      </main>
    </div>
  );
}
