import { test } from 'vitest';
import { add } from './counter';

test('add', (t) => {
	t.expect(add(1, 2)).toBe(7);
});
