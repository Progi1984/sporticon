const { icons } = require('../data/sporticon.json');
const simpleIcons = require('../index.js');

icons.forEach(icon => {
  const subject = simpleIcons[icon.title];

  test(`${icon.title} has a "title"`, () => {
    expect(typeof subject.title).toBe('string');
  });

  test(`${icon.title} has a "source"`, () => {
    expect(typeof subject.source).toBe('string');
  });

  test(`${icon.title} has an "svg"`, () => {
    expect(typeof subject.svg).toBe('string');
  });
});
