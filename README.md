# Next.js Stepper Example with Redux Toolkit

このプロジェクトは、Next.js、Redux Toolkit、TailwindCSSを使用したステッパー（進行状況表示）機能を持つ診察予約システムのデモアプリケーションです。

## 技術スタック

- Next.js 14
- Bun
- Redux Toolkit
- TailwindCSS

## 環境構築

1. プロジェクトのクローン
```bash
git clone git@github.com:sakurakotubaki/stepper-example.git
cd stepper-example
```

2. 依存関係のインストール
```bash
bun install
```

3. 開発サーバーの起動
```bash
bun dev
```

## プロジェクト構成

```
app/
├── components/
│   └── Stepper.tsx        # ステッパーコンポーネント
├── store/
│   ├── store.ts           # Reduxストアの設定
│   └── stepperSlice.ts    # ステッパーのスライス
├── apply/
│   └── page.tsx           # 申し込みページ
├── confirm/
│   └── page.tsx           # 確認ページ
├── complete/
│   └── page.tsx           # 完了ページ
└── providers.tsx          # Reduxプロバイダー
```

## Redux Toolkitの使用例

### 1. ストアの設定 (store.ts)
```typescript
import { configureStore } from '@reduxjs/toolkit'
import stepperReducer from './stepperSlice'

export const store = configureStore({
  reducer: {
    stepper: stepperReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

### 2. スライスの作成 (stepperSlice.ts)
```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StepperState {
  activeStep: number
  symptoms: {
    toothache: boolean
    sensitivity: boolean
    // ...他の症状
  }
}

export const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload
    },
    // ...他のリデューサー
  },
})
```

### 3. コンポーネントでの使用例
```typescript
import { useSelector, useDispatch } from 'react-redux'
import { setActiveStep } from '../store/stepperSlice'

export default function YourComponent() {
  const dispatch = useDispatch()
  const activeStep = useSelector((state: RootState) => state.stepper.activeStep)

  const handleNext = () => {
    dispatch(setActiveStep(activeStep + 1))
  }
}
```

## 主な機能

1. **ステッパー表示**
   - 現在の進行状況をビジュアル化
   - ページ遷移に連動して自動更新

2. **フォーム管理**
   - チェックボックスによる症状選択
   - Reduxによる状態管理

3. **ページ遷移**
   - 申し込み → 確認 → 完了の3ステップ
   - 戻る機能付き

## 学習ポイント

1. **Redux Toolkit**
   - スライスによる状態管理
   - TypeScriptとの型連携
   - アクション・リデューサーの実装

2. **Next.js**
   - App Routerの使用
   - クライアントコンポーネント
   - ページ遷移の実装

3. **TailwindCSS**
   - モダンなUIデザイン
   - レスポンシブ対応
   - コンポーネントスタイリング

