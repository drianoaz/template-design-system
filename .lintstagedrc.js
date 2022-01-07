const path = require('path');

/**
 * To run lint-staged with next lint must to use --file flag
 *
 * @see https://nextjs.org/docs/basic-features/eslint#lint-staged
 */
const buildEslintCommand = (filenames) => {
  const files = filenames.map((filename) => {
    return path.relative(process.cwd(), filename);
  });

  return `next lint --fix --file ${files.join(' --file ')}`;
};

module.exports = {
  '*': 'prettier --write --ignore-unknown',
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
