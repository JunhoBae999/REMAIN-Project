import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

function NaverMapAPI() {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '340px', // 네이버지도 가로 길이
        height: '340px' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 33.4512, lng: 126.6189 }} // 지도 초기 위치
      defaultZoom={16}>
      <Marker
        key={1}
        position={new navermaps.LatLng(33.4512, 126.6189)}
        animation={1}
        onClick={() => {alert('목적지인 제주 평화 공원입니다.');}}
      />
    </NaverMap>
  );
}

function App() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={`483uo9i9cs`} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}

export default App;