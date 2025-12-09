import HeroSection from '@/components/sections/HeroSection';
import EventInfoSection from '@/components/sections/EventInfoSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import RegistrationSection from '@/components/sections/RegistrationSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
      <HeroSection />
      <EventInfoSection />
      <SpeakersSection />
      <RegistrationSection />
    </div>
  );
};

export default Index;
