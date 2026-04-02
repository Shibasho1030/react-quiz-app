# React Quiz App

## 概要
Reactを用いて開発したクイズアプリです。
Udemy講座をベースにしつつ、設計・実装の約9割を自力で構築しました。

単なる模写ではなく、状態管理・ロジックを自分で考えながら実装しています。

---

## デモ
（デプロイURL or GIF）

---

## 主な機能
- クイズの出題（APIから取得）
- 選択肢の選択と正誤判定
- スコア計算
- 進捗表示（progress bar）
- タイマー機能
- ハイスコア管理
- クイズのリスタート

---

## 技術スタック
- React
- JavaScript (ES6+)
- CSS

---

## 工夫した点・アピールポイント

### 1. useReducerによる状態管理
複雑な状態（問題・回答・スコア・タイマーなど）を一元管理しています。

状態遷移を明確にするため、以下のようなステータス設計を行いました。
- loading
- ready
- active
- finished

---

### 2. 非同期処理とエラーハンドリング
APIから問題を取得し、エラー時のUIも実装しています。

---

### 3. タイマー機能（useEffect）
setIntervalを用いたタイマーを実装し、クリーンアップも適切に行っています。

---

### 4. コンポーネント設計
UIを細かく分割し、責務ごとにコンポーネントを設計しています。

例：
- Question（問題表示）
- Options（選択肢）
- Progress（進捗）
- Timer（時間管理）

---

## 今後の改善点
- データ永続化（LocalStorage or DB）
- TypeScript導入
- UI/UXの改善
- テストコード追加

---

## 学習背景
Jonas Schmedtmann氏のUdemy講座を参考にしながら、
設計・ロジックの9割は自分で考えて実装しました。

```md

 
```
# React Quiz App

## Overview
This is a quiz application built with React.

While the project is inspired by a Udemy course, approximately 90% of the implementation (including logic and state design) was done independently.

The focus was not on copying, but on understanding and rebuilding the application from scratch.

---

## Demo
(Add deployment URL or GIF)

---

## Features
- Fetch quiz questions from API
- Select answers and validate correctness
- Score calculation
- Progress tracking
- Timer functionality
- High score tracking
- Restart quiz

---

## Tech Stack
- React
- JavaScript (ES6+)
- CSS

---

## Key Highlights

### 1. State Management with useReducer
Complex states such as questions, answers, score, and timer are managed in a centralized reducer.

Clear state transitions:
- loading
- ready
- active
- finished

---

### 2. Async Data Fetching & Error Handling
Implemented API fetching with proper error handling UI.

---

### 3. Timer with useEffect
Built a timer using setInterval with proper cleanup to avoid memory leaks.

---

### 4. Component Architecture
The UI is split into reusable components with clear responsibilities:
- Question
- Options
- Progress
- Timer

---

## Future Improvements
- Persist data (LocalStorage or database)
- Add TypeScript
- Improve UI/UX
- Add testing

---

## Learning Context
This project was inspired by a Udemy course by Jonas Schmedtmann.
However, most of the implementation was rebuilt independently to deepen understanding.
