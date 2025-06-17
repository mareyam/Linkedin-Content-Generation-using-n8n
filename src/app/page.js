'use client';
import './globals.css';
import { useState } from 'react';
import Starter from '@/components/layout/home';
import NicheSelection from '@/components/layout/home/niche-selection';

export default function Home() {
  const [showNiches, setShowNiches] = useState(false);

  return (
    <>
      <Starter showNiches={showNiches} setShowNiches={setShowNiches} />
      {showNiches && <NicheSelection />}
    </>
  );
}
