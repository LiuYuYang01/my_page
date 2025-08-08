import { useEffect } from 'react';
import Header from './components/Header';
import Wall from './components/Wall';
import Info from './components/Info';
import Particles from './bits/Particles';
// import DotGrid from './bits/DotGrid';
// import Galaxy from './bits/Galaxy';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, // 使动画重复播放
    });
  }, []);

  useEffect(() => {
    // 检查是否为移动端设备
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    if (isMobile()) {
      // 如果是移动端设备，显示提示信息并阻止渲染
      document.body.innerHTML =
        '<div style="padding: 20px; text-align: center; font-size: 18px; color:#fff">此网站仅支持电脑端访问，请使用电脑浏览器打开。</div>';
      return;
    }
  }, []);

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
