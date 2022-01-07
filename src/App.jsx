import './App.css';
import { Route, Routes } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { Suspense, lazy } from "react";
import Navigation from "./components/Navigation/Navigation";

const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));


const App = () => {
  return(
    <>
      <Navigation />
      <Suspense fallback={<Loader  type="TailSpin" color="orange" height={480} width={480} timeout={3000}/>}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/movies/" element={<MoviesPage />} />
          <Route path="/movies/:id/" element={<MovieDetailsPage />}>
           <Route path={`/movies/:id/cast`} element={<Cast />} />
            <Route path={`/movies/:id/reviews`} element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
