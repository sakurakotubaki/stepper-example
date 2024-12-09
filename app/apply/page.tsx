'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { updateSymptoms, setActiveStep } from '../store/stepperSlice'
import type { RootState } from '../store/store'

export default function Apply() {
  const dispatch = useDispatch()
  const router = useRouter()
  const symptoms = useSelector((state: RootState) => state.stepper.symptoms)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setActiveStep(1))
    router.push('/confirm')
  }

  const handleCheckboxChange = (symptom: keyof typeof symptoms) => {
    dispatch(updateSymptoms({ [symptom]: !symptoms[symptom] }))
  }

  const symptomsList = [
    { id: 'toothache', label: '歯が痛む' },
    { id: 'sensitivity', label: '歯がしみる' },
    { id: 'bleeding', label: '歯茎から出血する' },
    { id: 'broken', label: '歯が折れた' },
    { id: 'lost', label: '歯が取れた' },
    { id: 'treatment', label: '歯の治療が必要' },
    { id: 'diagnosisOnly', label: '診断だけ希望' },
  ]

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">症状を選択してください</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {symptomsList.map(({ id, label }) => (
          <div key={id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={id}
              checked={symptoms[id as keyof typeof symptoms]}
              onChange={() => handleCheckboxChange(id as keyof typeof symptoms)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={id} className="text-lg">
              {label}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          確認画面へ
        </button>
      </form>
    </div>
  )
}
