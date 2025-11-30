/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { AnatomyPicker } from '../src'

test('button', () => {
  render(<AnatomyPicker model="abdominal-pain-female")
})
