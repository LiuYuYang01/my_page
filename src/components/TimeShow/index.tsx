import React, { useState, useEffect } from 'react';

interface Props {
  time: number; // 改为秒数
  children: React.ReactNode;
}

export default ({ time, children }: Props) => {
  const [isTimeReached, setIsTimeReached] = useState(false);

  useEffect(() => {
    const now = Math.floor(Date.now() / 1000); // 获取当前时间戳（秒）
    if (now >= time) {
      setIsTimeReached(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsTimeReached(true);
    }, (time - now) * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return isTimeReached ? <>{children}</> : null;
};
