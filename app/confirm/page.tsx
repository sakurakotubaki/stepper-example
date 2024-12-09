'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import type { RootState } from '../store/store'
import { setActiveStep } from '../store/stepperSlice'

export default function Confirm() {
  const dispatch = useDispatch()
  const router = useRouter()
  const symptoms = useSelector((state: RootState) => state.stepper.symptoms)

  const symptomLabels = {
    toothache: '歯が痛む',
    sensitivity: '歯がしみる',
    bleeding: '歯茎から出血する',
    broken: '歯が折れた',
    lost: '歯が取れた',
    treatment: '歯の治療が必要',
    diagnosisOnly: '診断だけ希望',
  }

  const selectedSymptoms = Object.entries(symptoms)
    .filter(([_, value]) => value)
    .map(([key]) => symptomLabels[key as keyof typeof symptomLabels])

  const handleSubmit = () => {
    dispatch(setActiveStep(2))
    router.push('/complete')
  }

  const handleBack = () => {
    dispatch(setActiveStep(0))
    router.push('/apply')
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">申し込み内容の確認</h2>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">選択された症状:</h3>
        {selectedSymptoms.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {selectedSymptoms.map((symptom, index) => (
              <li key={index} className="text-lg">
                {symptom}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">症状が選択されていません</p>
        )}
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          戻る
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          申し込む
        </button>
      </div>
    </div>
  )
}
