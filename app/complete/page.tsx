'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { resetStepper } from '../store/stepperSlice'

export default function Complete() {
  const dispatch = useDispatch()

  useEffect(() => {
    // 完了画面を離れる時にステッパーをリセット
    return () => {
      dispatch(resetStepper())
    }
  }, [dispatch])

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="mb-8">
        <svg
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-4">申し込みが完了しました</h2>
      <p className="text-gray-600 mb-8">
        ご申し込みありがとうございます。
        <br />
        後ほど担当者よりご連絡させていただきます。
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        ホームへ戻る
      </Link>
    </div>
  )
}
