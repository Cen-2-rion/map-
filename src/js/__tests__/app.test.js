import Settings from '../app';

const settings = new Settings();

test('should update settings in the set', () => {
  settings.setSetting('theme', 'light');
  settings.setSetting('music', 'rock');

  expect(settings.getSettings()).toEqual(new Map([
    ['theme', 'light'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]));
});
