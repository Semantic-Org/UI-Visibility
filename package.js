
Package.describe({
  name    : 'semantic:ui-visibility',
  summary : 'Semantic UI - Visibility: Single component release',
  version : '2.0.3',
  git     : 'git://github.com/Semantic-Org/UI-Visibility.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'visibility.js'
  ], 'client');
});
