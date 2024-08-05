export default class Settings {
  constructor() {
    // набор настроек по умолчанию
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    // набор пользовательских настроек
    this.userSettings = new Map();
  }

  // устанавливаем значения настроек
  setSetting(name, value) {
    this.userSettings.set(name, value);
  }

  // получаем значения настроек
  getSettings() {
    // создаем новый набор настроек на основе настроек по умолчанию
    const settings = new Map(this.defaultSettings);
    // добавляем пользовательские настройки, если они отличаются от настроек по умолчанию
    this.userSettings.forEach((value, key) => settings.set(key, value));

    return settings;
  }
}
