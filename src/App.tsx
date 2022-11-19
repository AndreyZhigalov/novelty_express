import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Blocks } from 'react-loader-spinner';

const MainLayout = lazy(() => import(/* webpackChunkName: "mainLayout" */ './layouts/MainLayout'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const Offer = lazy(() => import(/* webpackChunkName: "Offer" */ './pages/Offer'));
const About = lazy(() => import(/* webpackChunkName: "About" */ './pages/About'));
const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ './pages/Contacts'));

const App: React.FC = () => {
  return (
    <main className="App">
      <Suspense
        fallback={
          <div className="loading-page">
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          </div>
        }>
        <Routes>
          <Route path="novelty_express" element={<MainLayout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="about-us" element={<About />}></Route>
            <Route path="our-offer" element={<Offer />}></Route>
            <Route path="stock" element={''}></Route>
            <Route path="contacts" element={<Contacts />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
