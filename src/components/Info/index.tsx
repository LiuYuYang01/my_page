import { useState } from 'react';
import AnimatedContent from '@/bits/AnimatedContent';
import IconCloud from '@/ui/IconCloud';

const techIcons = [
  'scss',
  'css',
  'html',
  'tailwindcss',
  'axios',
  'fetch',
  'vue',
  'vuex',
  'redux',
  'zustand',
  'element-plus',
  'typescript',
  'javascript',
  'antdesign',
  'motion',
  'pinia',
  'framer-motion',
  'echarts',
  'java',
  'spring',
  'springboot',
  'mybatis',
  'mybatis-plus',
  'redis',
  'rabbitmq',
  'mysql',
  'mongodb',
  'react',
  'nextjs',
  'nestjs',
  'webpack',
  'vite',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'koa',
  'express',
  'python',
  'flask',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'intellijidea',
  'datagrip',
  'apifox',
  'postman',
  'trae',
  'cursor',
  'webstorm',
  'navicat',
  'hbuilder',
  'hbuilderx',
  'googledrive',
  'macos',
  'windows',
  'linux',
  'pycharm',
  'wechat',
];

export default () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mb-36 mt-[100px]">
      <div>
        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14">
            我从小就对 <b className="text-primary">网站开发</b> 领域很感兴趣，当时就希望有一个属于自己的网站，
            <b className="text-yellow-300"> 17 </b>
            年时候成功进入站长圈，并通过各种 <b className="text-green-400">自学</b>
            ，以及各种折腾，才有了你现在看到的这个网站
          </p>

          {/* <TextType
          text={[
            '我从小就对网站开发领域很感兴趣，当时就希望有一个属于自己的网站，在 17 年时候成功进入站长圈，并通过各种自学，以及各种折腾，才有了你现在看到的这个网站',
          ]}
          className="text-white text-4xl leading-14"
        /> */}
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <img
            src="https://bu.dusays.com/2025/08/03/688e3edb1e964.jpg"
            alt=""
            className={`h-[500px] mt-10 rounded-4xl transition-all duration-500 ${
              imageLoaded ? 'opacity-100 blur-0' : 'opacity-80 blur-md'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </AnimatedContent>
      </div>

      <div className="mt-[200px]">
        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14">
            所谓 <b className="text-yellow-300">"不谋全局者，不足谋一域"</b>
          </p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14 mt-6">
            我觉得只专注一个领域是无法做出一个 <b className="text-green-400">完整的项目</b>
          </p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14 mt-6">因为如果只会前端那么做出来的项目是一个没有灵魂的项目</p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14 mt-6">但只会后端连界面都看不到又能有什么意义呢</p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14 mt-6">我想一个人能够完成整个项目的研发的能力</p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14 mt-6">
            因此，我踏入了 <b className="text-primary">全栈工程师</b> 的学习道路
          </p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <div className="flex justify-center">
            <img
              src="https://bu.dusays.com/2025/08/03/688e4b8493c3f.jpg"
              alt=""
              className={`h-[500px] mt-10 rounded-4xl transition-all duration-500 ${
                imageLoaded ? 'opacity-100 blur-0' : 'opacity-80 blur-md'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </AnimatedContent>
      </div>

      <div className="mt-[200px]">
        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14">不仅如此，我还是一名 <b className="text-primary">开源项目作者</b></p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <div className="flex justify-center mb-[100px]">
            <img
              src="https://bu.dusays.com/2025/08/03/688e4b8493c3f.jpg"
              alt=""
              className={`h-[500px] mt-10 rounded-4xl transition-all duration-500`}
            />
          </div>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14 mt-6">
            👨‍💻 我正在全力投入 <b className="text-primary">ThriveX </b>
            项目的开发，这是我迄今为止投入精力最多的项目。
          </p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14 mt-6">
            我希望它能够成为一个真正有用且独特的产物，同时保持简单易用。
          </p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <div className="flex justify-center">
            <img
              // src="https://bu.dusays.com/2025/08/03/688e4b8493c3f.jpg"
              src="https://bu.dusays.com/2025/08/03/688e50758b7f7.jpg"
              alt=""
              className={`h-[500px] mt-10 rounded-4xl transition-all duration-500`}
            />
          </div>
        </AnimatedContent>
      </div>

      <div className="mt-[200px]">
        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14">下面是我多年累计下来的技术栈</p>
        </AnimatedContent>

        <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
          <p className="text-white text-4xl leading-14 mt-6 mb-[100px]">
            其中我最喜欢的一套组合是：<b className="text-primary">NextJS</b> +{' '}
            <b className="text-green-500">Spring Boot</b>
          </p>
        </AnimatedContent>

        <IconCloud iconSlugs={techIcons} />
      </div>
    </div>
  );
};
