'use client';

import { useEffect, useState } from 'react';

import AMapLoader from '@amap/amap-jsapi-loader';

// 为高德地图添加全局类型声明
declare global {
  interface Window {
    _AMapSecurityConfig: {
      securityJsCode: string;
    };
  }
}

export default function MapContainer() {
  let map: any = null;
  let infoWindow: any = null;
  // 添加加载状态
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: 'c8c59309d679d989a8a56461956cdd38s',
    };
    AMapLoader.load({
      key: 'dad939358a9a25219a1c42c8d62cb218',
      version: '2.0',
      plugins: ['AMap.Scale', 'AMap.Marker', 'AMap.InfoWindow'], // 添加InfoWindow插件
    })
      .then((AMap) => {
        map = new AMap.Map('container', {
          mapStyle: 'amap://styles/grey',
          viewMode: '3D',
          zoom: 4.8,
          center: [121.853829, 29.922533],
        });

        // 初始化信息窗口
        infoWindow = new AMap.InfoWindow({
          isCustom: true, // 使用自定义窗口
          autoMove: true, // 自动调整位置
          offset: new AMap.Pixel(0, -30), // 偏移量
        });

        // 添加标记点
        const marker = new AMap.Marker({
          position: [121.853829, 29.922533],
          title: '目标位置',
          icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          offset: new AMap.Pixel(-10, -30),
        });

        map.add(marker);

        // 为标记点添加点击事件
        marker.on('click', () => {
          infoWindow.open(map, marker.getPosition());
          infoWindow.setContent('');
          // 设置地图中心点和缩放级别
          map.setCenter(marker.getPosition());
          map.setZoom(15);
        });

        // 地图加载完成，设置isLoading为false
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        // 加载失败也设置isLoading为false
        setIsLoading(false);
      });

    return () => {
      map?.destroy();
    };
  }, []);

  // 根据isLoading状态显示不同内容
  return (
    <div className="w-full h-[700px] border rounded-3xl mt-10 relative overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white">地图加载中...</p>
          </div>
        </div>
      ) : null}
      <div id="container" className="w-full h-full"></div>
    </div>
  );
}
