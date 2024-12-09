import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Symptoms = {
  toothache: boolean
  sensitivity: boolean
  bleeding: boolean
  broken: boolean
  lost: boolean
  treatment: boolean
  diagnosisOnly: boolean
}

interface StepperState {
  activeStep: number
  symptoms: Symptoms
}

const initialState: StepperState = {
  activeStep: 0,
  symptoms: {
    toothache: false,
    sensitivity: false,
    bleeding: false,
    broken: false,
    lost: false,
    treatment: false,
    diagnosisOnly: false,
  },
}

export const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload
    },
    updateSymptoms: (state, action: PayloadAction<Partial<Symptoms>>) => {
      state.symptoms = { ...state.symptoms, ...action.payload }
    },
    resetStepper: (state) => {
      state.activeStep = 0
      state.symptoms = initialState.symptoms
    },
  },
})

export const { setActiveStep, updateSymptoms, resetStepper } = stepperSlice.actions
export default stepperSlice.reducer
