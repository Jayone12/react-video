const diffTime = (timestamp: number) => {
  // 현재 시간
  const currentTime = Date.now();
  const createTime = new Date(timestamp).getTime();

  // 현재 시간에과 생성 시간의 차이
  const diff = Math.floor((currentTime - createTime) / 1000 / 60);

  if (diff < 1) return `a few seconds`;
  if (diff < 60) {
    return `${diff} minutes ago`;
  }

  // 분으로 바꾼 diff에서 60으로 또 나누어 시간으로 바꾼다. (1시간은 60분)
  const diffHour = Math.floor(diff / 60);
  if (diffHour < 24) {
    return `${diffHour} hours ago`;
  }

  // 시간으로 바꾼거에서 24로 나눠서 일수를 계산한다. (하루는 24시간)
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 365) {
    return `${diffDay} days ago`;
  }

  // 마지막은 년수로 계산
  return `${Math.floor(diffDay / 365)} years ago`;
};

export default diffTime;
