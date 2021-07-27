/* eslint-disable */
import plural from '../lib/index'

test('check strings return as normal when passed a count of 1', () => {
    expect(plural('apple', 1)).toBe('apple')
})

test('check strings return plurals when passed a count of 0', () => {
    expect(plural('apple', 0)).toBe('apples')
})

test('check strings return plurals when passed a count of 2', () => {
    expect(plural('apple', 2)).toBe('apples')
})
