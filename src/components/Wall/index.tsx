import { useEffect, useState } from 'react';
import axios from '@/utils/request';
import Masonry from 'react-masonry-css';

export default () => {
  const [list, setList] = useState<Wall[]>([]);

  const getWallList = async () => {
    const {
      data: { data },
    } = await axios.post('/wall/cate/2?page=1&size=9999');
    console.log(data.result);
    setList(data.result);
  };

  useEffect(() => {
    getWallList();
  }, []);

  // 瀑布流布局的断点配置
  const breakpointColumnsObj = {
    default: 5,
    1280: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto mb-14">
        <div data-aos="fade-up" data-aos-duration="2000">
          <p className="text-white text-4xl leading-14 text-center">来自诸多网友对我的评价</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* 使用 react-masonry-css 实现瀑布流布局 */}
        <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
          {list.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50 group h-full flex flex-col mb-3">
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-2">
                    <h3 className="font-medium text-white">{item.name}</h3>
                  </div>

                  <div className="relative flex-grow flex flex-col text-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <p className="text-gray-300 relative z-10 flex-grow max-h-[300px] overflow-y-scroll">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};
