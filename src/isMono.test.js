import React from 'react';
import { isMono } from './isMono';
import * as assert from 'assert';

describe('test isMono function', () => {
  test('[1, 2, 3]', () => {
    const result = isMono([1, 2, 3]);

    assert.strictEqual(result, true);
  });

  test('[3, 2, 3]', () => {
    const result = isMono([3, 2, 3]);

    assert.strictEqual(result, false);
  });

  test('[1.2, 1.3, 1.4]', () => {
    const result = isMono([1.2, 1.3, 1.4]);

    assert.strictEqual(result, true);
  });

  test('[0]', () => {
    const result = isMono([0]);

    assert.strictEqual(result, true);
  });

  test('[-Infinity, Infinity]', () => {
    const result = isMono([-Infinity, Infinity]);

    assert.strictEqual(result, true);
  });

  test('[]', () => {
    const result = isMono([]);

    assert.strictEqual(result, true);
  });

  test('["1", "2", "3"]', () => {
    const result = isMono(["1", "2", "3"]);

    assert.strictEqual(result, true);
  });

  test('"notArray"', () => {
    const result = isMono('notArray');

    assert.strictEqual(result, false);
  });

  test('[1, 1, 3]', () => {
    const result = isMono([1, 1, 3]);

    assert.strictEqual(result, true);
  });

  test('[-1, -2, -3, -5]', () => {
    const result = isMono([-1, -2, -3, -5]);

    assert.strictEqual(result, true);
  });

  test('[-4, -2, -3]', () => {
    const result = isMono([-4, -2, -3]);

    assert.strictEqual(result, false);
  });

  // Добавьте сюда ваши тесты
})

