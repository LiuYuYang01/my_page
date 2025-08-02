import Header from './components/Header';
import Wall from './components/Wall';
import Info from './components/Info';

import CircularGallery from './bits/CircularGallery';

export default () => {
  return (
    <>
      <Header />
      <Info />
      <Wall />

      <div className="relative h-[600px]">
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
    </>
  );
};
