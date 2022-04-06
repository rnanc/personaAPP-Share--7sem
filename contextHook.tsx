import React, { createContext, useState, useContext } from 'react';

interface Step1 {
  name: string
  avatar: string
}

interface Step2 {
  idade: string
  sexo: string
  escolaridade: string
  telefone: string
  email: string
}

interface Step3 {
  setor: string
  titulo: string
}

interface Step4 {
  habilidades: string[]
}

export interface allSteps {
  step1: Step1
  step2: Step2
  step3: Step3
  step4: Step4
}

interface StepContext {
  setStep1Context(value: Step1): void
  setStep2Context(value: Step2): void
  setStep3Context(value: Step3): void
  setStep4Context(value: Step4): void
  returnAllSteps(): allSteps
}

const Context = createContext<StepContext>({} as StepContext);

const StepProvider: React.FC = ({ children }) => {

  let step1: Step1 = {} as Step1
  let step2: Step2 = {} as Step2
  let step3: Step3 = {} as Step3
  let step4: Step4 = {} as Step4

  const setStep1Context = (value: Step1) => {
    step1 = value
    console.log(step1)
  }

  const setStep2Context = (value: Step2) => {
    step2 = value
    console.log(step2)
  }

  const setStep3Context = (value: Step3) => {
    step3 = value
    console.log(step3)
  }

  const setStep4Context = (value: Step4) => {
    step4 = value
    console.log(step4)
  }

  const returnAllSteps = (): allSteps => {
    console.log(step1, step2, step3, step4)
    return {step1, step2, step3, step4}
  }

  return (
    <Context.Provider value={{ setStep1Context,
                               setStep2Context, 
                               setStep3Context,
                               setStep4Context,
                               returnAllSteps}}>
      {children}
    </Context.Provider>
  );
}

function useProvider(): StepContext {
  const context = useContext(Context);


  return context;
}

export {StepProvider, useProvider};