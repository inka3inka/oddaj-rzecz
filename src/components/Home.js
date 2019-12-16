import React from 'react';
import {Header} from './header/Header'
import {MainSection} from "./mainSection/MainSection";
import {ColumnsContainer} from "./threeColumnsSection/ColumnsContainer";
import {FourStepsSection} from "./fourStepsSection/FourStepsSection";

export function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <ColumnsContainer/>
      <FourStepsSection/>
    </>
  )
}