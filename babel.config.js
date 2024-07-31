module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@app': './app',
            '@screens': './app/screens',
            '@sharedComponents': './app/sharedComponents',
          },
        },
      ],
    ],
  }
}
