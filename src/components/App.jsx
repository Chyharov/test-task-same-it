import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const DepartmentsList = lazy(() => import('pages/DepartmentsList/DepartmentsList'));


export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/DepartmentsList" element={<DepartmentsList />} />
        </Routes>
      </Suspense>
    </>
  );
};