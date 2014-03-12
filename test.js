var resolve = require('./')
var test = require('tape')
var path = require('path')

var fixtures = path.resolve(__dirname, 'fixtures')

test('module entry files', function(t) {
  t.test('default', function(t) {
    var dir = path.resolve(fixtures, 'main/default')
    var expected = path.resolve(fixtures, 'main/default/index.glsl')
    var actual = resolve.sync(dir)
    t.equal(actual, expected, 'resolves "index.glsl"')
    t.end()
  })

  t.test('glslify', function(t) {
    var dir = path.resolve(fixtures, 'main/glslify')
    var expected = path.resolve(fixtures, 'main/glslify/thing.glsl')
    var actual = resolve.sync(dir)
    t.equal(actual, expected, 'resolves "thing.glsl" from pkg.glslify')
    t.end()
  })

  t.test('main', function(t) {
    var dir = path.resolve(fixtures, 'main/main')
    var expected = path.resolve(fixtures, 'main/main/thing.glsl')
    var actual = resolve.sync(dir)
    t.equal(actual, expected, 'resolves "thing.glsl" from pkg.main')
    t.end()
  })

  t.test('main-ignore', function(t) {
    var dir = path.resolve(fixtures, 'main/main-ignore')
    var expected = path.resolve(fixtures, 'main/main-ignore/index.glsl')
    var actual = resolve.sync(dir)
    t.equal(actual, expected, 'ignores .js files in pkg.main')
    t.end()
  })
})
