import { useState } from 'react';
import { Faq } from '../components/Faq';
import { Hero } from '../components/Hero';
import { InquiryForm } from '../components/InquiryForm';
import { Packages } from '../components/Packages';
import { Reviews } from '../components/Reviews';
import { RunOfShow } from '../components/RunOfShow';
import { TwoLanguages } from '../components/TwoLanguages';

export function HomePage() {
  const [date, setDate] = useState('');
  const [packageId, setPackageId] = useState('');

  function pickDate(d: string) {
    setDate(d);
    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <Hero selectedDate={date} onPickDate={pickDate} />
      <RunOfShow />
      <TwoLanguages />
      <Packages onChoose={setPackageId} />
      <Reviews />
      <Faq />
      <InquiryForm date={date} packageId={packageId} onDateChange={setDate} />
    </>
  );
}
