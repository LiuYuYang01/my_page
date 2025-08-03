import Header from './components/Header';
import Wall from './components/Wall';
import Info from './components/Info';
import Particles from './bits/Particles';
// import DotGrid from './bits/DotGrid';
// import Galaxy from './bits/Galaxy';

export default () => {
  return (
    <>
      <Header />

      <div className="fixed top-0 left-0 w-full h-screen">
        <Particles />
        {/* <DotGrid /> */}
        {/* <Galaxy /> */}
      </div>

      <Info />
      <Wall />
    </>
  );
};
