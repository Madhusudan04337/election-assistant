'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'voter-education-max-step'

interface ProgressContextType {
  maxUnlockedStep: number
  unlockNextStep: (currentStep: number) => void
  isStepLocked: (stepId: number) => boolean
  resetProgress: () => void
  isLoading: boolean
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [maxUnlockedStep, setMaxUnlockedStep] = useState<number>(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = parseInt(saved)
      if (!isNaN(parsed) && parsed >= 1) {
        setMaxUnlockedStep(parsed)
      } else {
        setMaxUnlockedStep(1)
      }
    }
    setIsLoading(false)
  }, [])

  const unlockNextStep = useCallback((currentStep: number) => {
    const nextStep = currentStep + 1
    if (nextStep > maxUnlockedStep && nextStep <= 12) {
      setMaxUnlockedStep(nextStep)
      localStorage.setItem(STORAGE_KEY, nextStep.toString())
    }
  }, [maxUnlockedStep])

  const isStepLocked = useCallback((stepId: number) => {
    return stepId > maxUnlockedStep
  }, [maxUnlockedStep])

  const resetProgress = useCallback(() => {
    setMaxUnlockedStep(1)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  return (
    <ProgressContext.Provider value={{
      maxUnlockedStep,
      unlockNextStep,
      isStepLocked,
      resetProgress,
      isLoading
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
