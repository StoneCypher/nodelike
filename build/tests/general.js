'use strict';

var _avaSpec = require('ava-spec');

var nodelike = require('../../../build/nodelike.es5.js');

(0, _avaSpec.test)('2+2 is 4', function (t) {
  return t.is(2 + 2, 4);
});

(0, _avaSpec.describe)('Package basics', async function (it) {

  /*
    it.describe('- `proceed` walkthrough', async it2 => {
  
      it2('machine starts red',  t => t.is("Red",    light.state()));
      it2('proceed is true',     t => t.is(true,     light.action('Proceed')));
      it2('light is now green',  t => t.is("Green",  light.state()));
      it2('proceed is true',     t => t.is(true,     light.action('Proceed')));
      it2('light is now yellow', t => t.is("Yellow", light.state()));
      it2('proceed is true',     t => t.is(true,     light.action('Proceed')));
      it2('light is red again',  t => t.is("Red",    light.state()));
  
    });
  */

  it('Hello world/0', function (t) {
    return t.is("Hello, world!", nodelike.hello());
  });
  it('Hello world/1', function (t) {
    return t.is("Hello, Joe!", nodelike.hello('Joe'));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy90ZXN0cy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbIm5vZGVsaWtlIiwicmVxdWlyZSIsInQiLCJpcyIsIml0IiwiaGVsbG8iXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxnQ0FBUixDQUFqQjs7QUFNQSxtQkFBSyxVQUFMLEVBQWlCO0FBQUEsU0FBS0MsRUFBRUMsRUFBRixDQUFLLElBQUUsQ0FBUCxFQUFVLENBQVYsQ0FBTDtBQUFBLENBQWpCOztBQU1BLHVCQUFTLGdCQUFULEVBQTJCLGdCQUFNQyxFQUFOLEVBQVk7O0FBRXZDOzs7Ozs7Ozs7Ozs7OztBQWNFQSxLQUFHLGVBQUgsRUFBb0I7QUFBQSxXQUFLRixFQUFFQyxFQUFGLENBQUssZUFBTCxFQUFzQkgsU0FBU0ssS0FBVCxFQUF0QixDQUFMO0FBQUEsR0FBcEI7QUFDQUQsS0FBRyxlQUFILEVBQW9CO0FBQUEsV0FBS0YsRUFBRUMsRUFBRixDQUFLLGFBQUwsRUFBc0JILFNBQVNLLEtBQVQsQ0FBZSxLQUFmLENBQXRCLENBQUw7QUFBQSxHQUFwQjtBQUVELENBbkJEIiwiZmlsZSI6ImdlbmVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7dGVzdCwgZGVzY3JpYmV9IGZyb20gJ2F2YS1zcGVjJztcblxuY29uc3Qgbm9kZWxpa2UgPSByZXF1aXJlKCcuLi8uLi8uLi9idWlsZC9ub2RlbGlrZS5lczUuanMnKTtcblxuXG5cblxuXG50ZXN0KCcyKzIgaXMgNCcsIHQgPT4gdC5pcygyKzIsIDQpKTtcblxuXG5cblxuXG5kZXNjcmliZSgnUGFja2FnZSBiYXNpY3MnLCBhc3luYyBpdCA9PiB7XG5cbi8qXG4gIGl0LmRlc2NyaWJlKCctIGBwcm9jZWVkYCB3YWxrdGhyb3VnaCcsIGFzeW5jIGl0MiA9PiB7XG5cbiAgICBpdDIoJ21hY2hpbmUgc3RhcnRzIHJlZCcsICB0ID0+IHQuaXMoXCJSZWRcIiwgICAgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MigncHJvY2VlZCBpcyB0cnVlJywgICAgIHQgPT4gdC5pcyh0cnVlLCAgICAgbGlnaHQuYWN0aW9uKCdQcm9jZWVkJykpKTtcbiAgICBpdDIoJ2xpZ2h0IGlzIG5vdyBncmVlbicsICB0ID0+IHQuaXMoXCJHcmVlblwiLCAgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MigncHJvY2VlZCBpcyB0cnVlJywgICAgIHQgPT4gdC5pcyh0cnVlLCAgICAgbGlnaHQuYWN0aW9uKCdQcm9jZWVkJykpKTtcbiAgICBpdDIoJ2xpZ2h0IGlzIG5vdyB5ZWxsb3cnLCB0ID0+IHQuaXMoXCJZZWxsb3dcIiwgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MigncHJvY2VlZCBpcyB0cnVlJywgICAgIHQgPT4gdC5pcyh0cnVlLCAgICAgbGlnaHQuYWN0aW9uKCdQcm9jZWVkJykpKTtcbiAgICBpdDIoJ2xpZ2h0IGlzIHJlZCBhZ2FpbicsICB0ID0+IHQuaXMoXCJSZWRcIiwgICAgbGlnaHQuc3RhdGUoKSkpO1xuXG4gIH0pO1xuKi9cblxuICBpdCgnSGVsbG8gd29ybGQvMCcsIHQgPT4gdC5pcyhcIkhlbGxvLCB3b3JsZCFcIiwgbm9kZWxpa2UuaGVsbG8oKSAgICAgICkpO1xuICBpdCgnSGVsbG8gd29ybGQvMScsIHQgPT4gdC5pcyhcIkhlbGxvLCBKb2UhXCIsICAgbm9kZWxpa2UuaGVsbG8oJ0pvZScpICkpO1xuXG59KTtcbiJdfQ==