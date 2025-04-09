import { expect, test } from 'vitest'
import { isEven } from '../src/isEven';

test(() => {
    expect(isEven(2)).toBe(true)
  })

test(() => {
    expect(isEven(1)).toBe(false)
  })