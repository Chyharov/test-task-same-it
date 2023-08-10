import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const SecondPage = lazy(() => import('pages/SecondPage/SecondPage'));


export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
