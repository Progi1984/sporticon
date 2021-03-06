const { icons } = require('../data/sporticon.json');

icons.forEach(icon => {
  const filename = icon.title;
  const subject = require(`../icons/${filename}.js`);

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
