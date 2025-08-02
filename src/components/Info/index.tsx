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
  return (
    <div className="max-w-5xl mx-auto mb-36">
      <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
        <p className="text-white text-4xl leading-14">
          我从小就对网站开发领域很感兴趣，当时就希望有一个属于自己的网站，在 17
          年时候成功进入站长圈，并通过各种自学，以及各种折腾，才有了你现在看到的这个网站
        </p>
        {/* <TextType
          text={[
            '我从小就对网站开发领域很感兴趣，当时就希望有一个属于自己的网站，在 17 年时候成功进入站长圈，并通过各种自学，以及各种折腾，才有了你现在看到的这个网站',
          ]}
          className="text-white text-4xl leading-14"
        /> */}
      </AnimatedContent>

      <AnimatedContent direction="vertical" ease="power3.out" duration={3}>
        <img src="https://bu.dusays.com/2025/08/03/688e3edb1e964.jpg" alt="" className="mt-10 rounded-4xl" />
      </AnimatedContent>

      <IconCloud iconSlugs={techIcons} />
    </div>
  );
};
