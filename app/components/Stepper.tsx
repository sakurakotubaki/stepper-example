'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

const steps = ['申し込み', '確認', '完了']

export default function Stepper() {
  const activeStep = useSelector((state: RootState) => state.stepper.activeStep)

  return (
    <div className="w-full py-4">
      <div className="flex justify-center items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index <= activeStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`mx-2 text-sm ${
                index <= activeStep ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 w-12 ${
                  index < activeStep ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
