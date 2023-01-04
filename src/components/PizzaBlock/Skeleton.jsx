import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={510}
    viewBox="0 0 280 510"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="120" r="120" />
    <rect x="0" y="272" rx="10" ry="10" width="280" height="22" />
    <rect x="0" y="320" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="433" rx="10" ry="10" width="95" height="30" />
    <rect x="119" y="425" rx="24" ry="24" width="155" height="45" />
  </ContentLoader>
);

export default Skeleton;
