import LightRays from '@/bits/LightRays';
import SplitText from '@/bits/SplitText';
import RotatingText from '@/bits/RotatingText';
import AnimatedContent from '@/bits/AnimatedContent';

export default () => {
  return (
    <div className="relative w-full h-[600px] text-white">
      <LightRays raysOrigin="top-center" raysColor="#fff" lightSpread={2} />

      <div className="absolute top-[30%] left-[20%] z-50">
        <AnimatedContent direction="vertical" ease="power3.out">
          <div className="flex items-center justify-between w-6xl">
            <div className="w-[50%]">
              <div className="text-6xl font-semibold mb-6">👋 Hello, 我叫刘宇阳</div>

              <div className="flex items-center space-x-3 mb-6">
                <SplitText text="我是一名 02 年的" className="text-2xl" />

                <RotatingText
                  texts={['前端工程师', '后端工程师', '全栈工程师']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-[#539dfd] text-white text-2xl overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg"
                />
              </div>

              <div className="text-xl text-gray-400">
                从小我就对计算机有着无穷的兴趣，因此我的梦想是做一名技术顶尖的程序员，也就是
                <b className="text-[#539dfd]"> 架构师</b>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://liuyuyang.net"
                  target="_blank"
                  className="px-6 py-2 bg-[#539dfd] text-white rounded-full hover:bg-[#3a86f5] transition-colors cursor-pointer"
                >
                  个人博客
                </a>

                <a
                  href="https://github.com/LiuYuYang01"
                  target="_blank"
                  className="px-6 py-2 border border-gray-800 hover:border-cyan-500/50 rounded-full hover:text-white transition-colors cursor-pointer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://q.qlogo.cn/g?b=qq&nk=3311118881&s=640"
                alt=""
                className="w-[300px] h-[300px] rounded-full"
              />
            </div>
          </div>
        </AnimatedContent>
      </div>

      <AnimatedContent direction="vertical" ease="power3.out">
        <div className="absolute bottom-0 text-center text-xs text-gray-400">了解更多</div>
      </AnimatedContent>
    </div>
  );
};
