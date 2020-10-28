import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Restaurants from './pages/Restaurants';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/restaurants" component={Restaurants} />
      </Switch>
    </div>
  );
}
