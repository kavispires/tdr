import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoadingPage } from 'pages/LoadingPage';

const Home = lazy(() => import('pages/Home' /* webpackChunkName: "Home" */));
const Resource = lazy(() => import('pages/Resource' /* webpackChunkName: "Resource" */));
const ResourceGenerator = lazy(
  () => import('pages/ResourceGenerator' /* webpackChunkName: "ResourceGenerator" */)
);
const SingleWordsExpander = lazy(
  () => import('pages/SingleWordsExpander' /* webpackChunkName: "SingleWordsExpander" */)
);
const Other = lazy(() => import('pages/Other' /* webpackChunkName: "Other" */));

const CrimeEvidence = lazy(
  () => import('pages/Images/CrimeEvidence' /* webpackChunkName: "CrimeEvidence" */)
);
const CrimeWeapons = lazy(() => import('pages/Images/CrimeWeapons' /* webpackChunkName: "CrimeWeapons" */));
const ImageCards = lazy(() => import('pages/Images/ImageCards' /* webpackChunkName: "ImageCards" */));
const Sprites = lazy(() => import('pages/Images/Sprites' /* webpackChunkName: "Sprites" */));
const Suspects = lazy(() => import('pages/Images/Suspects' /* webpackChunkName: "Suspects" */));
const ArteRuimParser = lazy(() => import('pages/ArteRuimParser' /* webpackChunkName: "ArteRuimParser" */));
const ArteRuimGroups = lazy(() => import('pages/ArteRuimGroups' /* webpackChunkName: "ArteRuimGroups" */));
const ImageCardsRelationships = lazy(
  () => import('pages/Images/ImageCardsRelationships' /* webpackChunkName: "ImageCardsRelationships" */)
);
const ImageCardsConnections = lazy(
  () => import('pages/Images/ImageCardsConnections' /* webpackChunkName: "ImageCardsConnections" */)
);
const Items = lazy(() => import('pages/Items/Items' /* webpackChunkName: "Items" */));
const ItemsAttribution = lazy(
  () => import('pages/Items/ItemsAttribution' /* webpackChunkName: "ItemsAttribution" */)
);
const ItemsGroups = lazy(() => import('pages/Items/ItemsGroups' /* webpackChunkName: "ItemsGroups" */));
const ItemsDiscSets = lazy(() => import('pages/Items/ItemsDiscSets' /* webpackChunkName: "ItemsDiscSets" */));
const ItemsMovieSets = lazy(
  () => import('pages/Items/ItemsMovieSets' /* webpackChunkName: "ItemsMovieSets" */)
);
const ItemsQuartets = lazy(() => import('pages/Items/ItemsQuartets' /* webpackChunkName: "ItemsQuartets" */));

const DailySetup = lazy(() => import('pages/DailySetup' /* webpackChunkName: "DailySetup" */));
const CrimesHediondosCategorizer = lazy(
  () => import('pages/CrimesHediondosCategorizer' /* webpackChunkName: "CrimesHediondosCategorizer" */)
);

export const routes = (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<LoadingPage />}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="/resources/listing"
      element={
        <Suspense fallback={<LoadingPage />}>
          <Resource />
        </Suspense>
      }
    />
    <Route
      path="/resources/generator"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ResourceGenerator />
        </Suspense>
      }
    />

    <Route
      path="/game/arte-ruim-parser"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ArteRuimParser />
        </Suspense>
      }
    />
    <Route
      path="/game/arte-ruim-groups"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ArteRuimGroups />
        </Suspense>
      }
    />
    <Route
      path="/game/crimes-hediondos-categorizer"
      element={
        <Suspense fallback={<LoadingPage />}>
          <CrimesHediondosCategorizer />
        </Suspense>
      }
    />
    <Route
      path="/game/daily-setup"
      element={
        <Suspense fallback={<LoadingPage />}>
          <DailySetup />
        </Suspense>
      }
    />

    <Route
      path="/items"
      element={
        <Suspense fallback={<LoadingPage />}>
          <Items />
        </Suspense>
      }
    />
    <Route
      path="/items/groups"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ItemsGroups />
        </Suspense>
      }
    />
    <Route
      path="/items/attribution"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ItemsAttribution />
        </Suspense>
      }
    />
    <Route
      path="/items/discs"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ItemsDiscSets />
        </Suspense>
      }
    />
    <Route
      path="/items/movies"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ItemsMovieSets />
        </Suspense>
      }
    />
    <Route
      path="/items/quartets"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ItemsQuartets />
        </Suspense>
      }
    />

    <Route
      path="/images/sprites"
      element={
        <Suspense fallback={<LoadingPage />}>
          <Sprites />
        </Suspense>
      }
    />
    <Route
      path="/images/suspects"
      element={
        <Suspense fallback={<LoadingPage />}>
          <Suspects />
        </Suspense>
      }
    />

    <Route
      path="/images/evidence"
      element={
        <Suspense fallback={<LoadingPage />}>
          <CrimeEvidence />
        </Suspense>
      }
    />
    <Route
      path="/images/weapons"
      element={
        <Suspense fallback={<LoadingPage />}>
          <CrimeWeapons />
        </Suspense>
      }
    />

    <Route
      path="/image-cards/decks"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ImageCards />
        </Suspense>
      }
    />
    <Route
      path="/image-cards/relationships"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ImageCardsRelationships />
        </Suspense>
      }
    />
    <Route
      path="/image-cards/connections"
      element={
        <Suspense fallback={<LoadingPage />}>
          <ImageCardsConnections />
        </Suspense>
      }
    />

    <Route
      path="/single-words"
      element={
        <Suspense fallback={<LoadingPage />}>
          <SingleWordsExpander />
        </Suspense>
      }
    />
    <Route
      path="/other"
      element={
        <Suspense fallback={<LoadingPage />}>
          <Other />
        </Suspense>
      }
    />
  </Routes>
);
