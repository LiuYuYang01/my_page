import IconCloud from '@/ui/IconCloud';
import Work from '../Work';
import Map from '../Map';

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
    <div className="mb-36 text-center">
      <div className="max-w-5xl mx-auto mt-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14">
            目前我在 <b className="text-primary">浙江</b> <b className="text-yellow-300">宁波</b> 从事前端开发工程师岗位
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className="mt-16">
          <Map />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-[300px]">
        <div data-aos="fade-up" data-aos-duration="1000" className="space-y-[50px]">
          {/* <p className="text-white text-3xl leading-14">
              我从小就对 <b className="text-primary">网站开发</b> 领域很感兴趣，当时就希望有一个属于自己的网站， 在{' '}
              <b className="text-yellow-300"> 17 </b>
              年成功进入站长圈，并通过各种 <b className="text-green-400">自学</b>
              ，以及各种折腾，才有了你现在所看到的这个网站
            </p> */}

          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-white text-3xl leading-14 mb-[100px]">
              <b className="text-yellow-300">"热爱，是所有的理由与解释"</b>
            </p>
          </div>

          <p className="text-white text-3xl leading-14">
            对于很多人来说写代码是一件 <b className="text-red-500">痛苦不堪</b> 的事情
          </p>

          <p className="text-white text-3xl leading-14">
            而我不一样，这正是我的 <b className="text-yellow-300">爱好</b>
          </p>

          <p className="text-white text-3xl leading-14">每天工作做着自己喜欢的事情还那么挣钱</p>

          <p className="text-white text-3xl leading-14">
            简直占据了 <b className="text-green-400">天时地利人和</b>
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            src="https://bu.dusays.com/2025/08/10/6898554428678.jpg"
            alt=""
            className={`w-full min-h-[500px] mt-16 rounded-2xl duration-500`}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-[400px] space-y-[50px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mb-[100px]">
            <b className="text-yellow-300">"不谋全局者，不足谋一域"</b>
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">
            我认为只专注一个领域是无法做出一个 <b className="text-green-400">完整的项目</b>
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">因为如果只会前端那么做出来的项目是一个没有灵魂的项目</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">但只会后端连界面都看不到又能有什么意义呢</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">我想具备的是能够一个人完成整个项目的研发的能力</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">
            因此，我踏入了 <b className="text-primary">全栈工程师</b> 的探索之路
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            // src="https://res.liuyuyang.net/thrive/article/688f1d8d60b24174ce20ff03.jpg"
            src="https://bu.dusays.com/2025/08/03/688f1dd3d2cdc.jpg"
            alt=""
            className={`w-full min-h-[500px]  mt-16 rounded-2xl duration-500`}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-[400px] space-y-[50px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">在这条路我并没有选择传统的教育方式</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">而是选择了一所培训机构</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-3xl leading-14 mt-6 text-yellow-300">"传智专修学院"</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            src="https://bu.dusays.com/2025/08/03/688f2a4a19b12.jpg"
            alt=""
            className={`min-h-[230px] mt-16 mb-36 rounded-2xl`}
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">
            它是 IT 培训界扛把子 <b className="text-red-500">黑马程序员</b> 所办
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">
            这所学校的教学体系为 <b className="text-green-400">三年</b> 专注于{' '}
            <b className="text-primary">全栈工程师</b> 培养
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6">这正是我比较看重的一点</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            src="https://bu.dusays.com/2025/08/03/688f2ada193ab.jpg"
            alt=""
            className={`min-h-[576px] mt-10 mb-36 rounded-2xl`}
          />
        </div>
      </div>

      <div>
        <div className="max-w-5xl mx-auto mt-[400px] space-y-[50px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-white text-3xl leading-14 mb-32">
              对了，我还有一个 <b className="text-yellow-300">身份</b>
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-white text-3xl leading-14">
              我还是一名 <b className="text-primary">开源项目作者</b>
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="flex justify-center mb-[100px]">
              <img
                src="https://bu.dusays.com/2025/08/03/688e4b8493c3f.jpg"
                alt=""
                className={`min-h-[647px] mt-10 rounded-2xl transition-all duration-500`}
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-white text-3xl leading-14 mt-6">
              👨‍💻 我正在全力投入 <b className="text-primary">ThriveX </b> 项目的研发
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-white text-3xl leading-14 mt-6">这是我迄今为止投入精力最多的项目。</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-white text-3xl leading-14 mt-6">我希望它能够成为一个真正有用且独特的产物</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-white text-3xl leading-14 mt-6">同时保持简单易用</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className="mt-10">
          <Work />

          <div className="ml-[-350px]">
            <Work
              images={[
                { src: 'https://bu.dusays.com/2025/08/09/689623fc681f2.jpg', alt: 'Image 1' },
                { src: 'https://bu.dusays.com/2025/08/09/68962457e423c.jpg', alt: 'Image 3' },
                { src: 'https://bu.dusays.com/2025/08/09/6896245875d65.jpg', alt: 'Image 4' },
                { src: 'https://bu.dusays.com/2025/08/09/689624592b4bf.jpg', alt: 'Image 5' },
                { src: 'https://bu.dusays.com/2025/08/09/6896246546c88.jpg', alt: 'Image 7' },
                { src: 'https://bu.dusays.com/2025/08/09/689624670f0f7.jpg', alt: 'Image 8' },
                { src: 'https://bu.dusays.com/2025/08/09/6896240e1153a.jpg', alt: 'Image 9' },
                { src: 'https://bu.dusays.com/2025/08/09/6896247f92f1f.jpg', alt: 'Image 10' },
                { src: 'https://bu.dusays.com/2025/08/09/689624cac990f.jpg', alt: 'Image 11' },
                { src: 'https://bu.dusays.com/2025/08/09/689624d0475a5.jpg', alt: 'Image 12' },
                { src: 'https://bu.dusays.com/2025/08/09/6896246086c01.jpg', alt: 'Image 6' },
                { src: 'https://bu.dusays.com/2025/08/09/689623fe118af.jpg', alt: 'Image 2' },
                { src: 'https://bu.dusays.com/2025/08/09/6896247e7aaf6.jpg', alt: 'Image 13' },
                { src: 'https://bu.dusays.com/2025/08/09/689624f3698af.jpg', alt: 'Image 14' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-[400px] space-y-[50px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14">
            下面是我的 <b className="text-yellow-300">毕生所学</b>
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-white text-3xl leading-14 mt-6 mb-[100px]">
            其中我最喜欢的一套组合是：<b className="text-[#8DD5F8]">NextJS</b> <span className="px-1">+</span>
            <b className="text-primary">TailwindCSS</b>
          </p>
        </div>

        <IconCloud iconSlugs={techIcons} />
      </div>
    </div>
  );
};
