Package.describe({
  name: 'mys:foo',
  summary: null,
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('angular-templates');
  api.use('ecmascript');

  api.addFiles('bar.html', 'client');
});
