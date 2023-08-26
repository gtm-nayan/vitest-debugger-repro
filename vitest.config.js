import { defineConfig } from 'vitest/config';
import MagicString from 'magic-string';

export default defineConfig({
	plugins: [
		{
			name: 'vitest-plugin-whatever',

			transform(code, id) {
				const s = new MagicString(code, {
					filename: id
				});
				s.replace(
					'debugger',
					'\nconsole.log("debugger");\n\n\n\n//extra lines \n  debugger;'
				);
				const new_code = s.toString();
				const map = s.generateMap({
					includeContent: true
				});
                console.log('new_code', new_code);
				return {
                    code: new_code,
                    map: map
                }
			}
		}
	],
	test: {
		environment: 'jsdom'
	}
});
