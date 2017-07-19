'use strict';

var _avaSpec = require('ava-spec');

var jssm = require('../../../build/nodelike.es5.js');

(0, _avaSpec.test)('2+2 is 4', function (t) {
  return t.is(2 + 2, 4);
});

var seq = function seq(upTo) {
  return new Array(upTo).fill(false).map(function (_, i) {
    return i;
  });
};

/*
describe('Simple stop light', async it => {

  const trs = [
          { name: 'SwitchToWarn', action: 'Proceed', from:'Green',  to:'Yellow' },
          { name: 'SwitchToHalt', action: 'Proceed', from:'Yellow', to:'Red'    },
          { name: 'SwitchToGo',   action: 'Proceed', from:'Red',    to:'Green'  }
        ],
        light = new jssm.machine({
          initial_state : 'Red',
          transitions   : trs
        });

  const r_states = light.states();
  it('has the right state count', t => t.is(r_states.length, 3));
  trs.map(t => t.to).map(c =>
    it(`has state "${c}"`, t => t.is(r_states.includes(c), true))
  );

  const r_names = light.list_named_transitions();
  it('has the right named transition count', t => t.is(r_names.size, 3));
  trs.map(t => t.name).map(a =>
    it(`has named transition "${a}"`, t => t.is(r_names.has(a), true))
  );

  it.describe('- `proceed` walkthrough', async it2 => {

    it2('machine starts red',  t => t.is("Red",    light.state()));
    it2('proceed is true',     t => t.is(true,     light.action('Proceed')));
    it2('light is now green',  t => t.is("Green",  light.state()));
    it2('proceed is true',     t => t.is(true,     light.action('Proceed')));
    it2('light is now yellow', t => t.is("Yellow", light.state()));
    it2('proceed is true',     t => t.is(true,     light.action('Proceed')));
    it2('light is red again',  t => t.is("Red",    light.state()));

  });

  it.describe('- mixed - `proceed` and `transition`', async it3 => {

    it3('machine starts red',              t => t.is("Red",    light.state()));
    it3('proceed is true',                 t => t.is(true,     light.action('Proceed')));
    it3('light is now green',              t => t.is("Green",  light.state()));

    it3('green refuses transition red',    t => t.is(false,    light.transition('Red')));
    it3('green still green',               t => t.is("Green",  light.state()));
    it3('green refuses transition green',  t => t.is(false,    light.transition('Green')));
    it3('green still green',               t => t.is("Green",  light.state()));
    it3('green accepts transition yellow', t => t.is(true,     light.transition('Yellow')));
    it3('green now yellow',                t => t.is("Yellow", light.state()));

    it3('proceed is true',                 t => t.is(true,     light.action('Proceed')));
    it3('light is red again',              t => t.is("Red",    light.state()));

    it3('red refuses transition yellow',   t => t.is(false,    light.transition('Yellow')));
    it3('red still red',                   t => t.is("Red",    light.state()));
    it3('red refuses transition red',      t => t.is(false,    light.transition('Red')));
    it3('red still red',                   t => t.is("Red",    light.state()));
    it3('red accepts transition green',    t => t.is(true,     light.transition('Green')));
    it3('red now green',                   t => t.is("Green",  light.state()));

    it3('proceed is true',                 t => t.is(true,     light.action('Proceed')));
    it3('light is yellow again',           t => t.is("Yellow", light.state()));
    it3('proceed is true',                 t => t.is(true,     light.action('Proceed')));
    it3('light is finally red again',      t => t.is("Red",    light.state()));

  });

});
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy90ZXN0cy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbImpzc20iLCJyZXF1aXJlIiwidCIsImlzIiwic2VxIiwiQXJyYXkiLCJ1cFRvIiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOztBQUNBOztBQUVBLElBQU1BLE9BQU9DLFFBQVEsZ0NBQVIsQ0FBYjs7QUFNQSxtQkFBSyxVQUFMLEVBQWlCO0FBQUEsU0FBS0MsRUFBRUMsRUFBRixDQUFLLElBQUUsQ0FBUCxFQUFVLENBQVYsQ0FBTDtBQUFBLENBQWpCOztBQUVBLElBQU1DLE1BQU0sU0FBTkEsR0FBTTtBQUFBLFNBQVEsSUFBSUMsS0FBSixDQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixDQUFxQixLQUFyQixFQUE0QkMsR0FBNUIsQ0FBaUMsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsV0FBU0EsQ0FBVDtBQUFBLEdBQWpDLENBQVI7QUFBQSxDQUFaOztBQUtBIiwiZmlsZSI6ImdlbmVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7dGVzdCwgZGVzY3JpYmV9IGZyb20gJ2F2YS1zcGVjJztcblxuY29uc3QganNzbSA9IHJlcXVpcmUoJy4uLy4uLy4uL2J1aWxkL25vZGVsaWtlLmVzNS5qcycpO1xuXG5cblxuXG5cbnRlc3QoJzIrMiBpcyA0JywgdCA9PiB0LmlzKDIrMiwgNCkpO1xuXG5jb25zdCBzZXEgPSB1cFRvID0+IG5ldyBBcnJheSh1cFRvKS5maWxsKGZhbHNlKS5tYXAoIChfLGkpID0+IGkgKTtcblxuXG5cblxuLypcbmRlc2NyaWJlKCdTaW1wbGUgc3RvcCBsaWdodCcsIGFzeW5jIGl0ID0+IHtcblxuICBjb25zdCB0cnMgPSBbXG4gICAgICAgICAgeyBuYW1lOiAnU3dpdGNoVG9XYXJuJywgYWN0aW9uOiAnUHJvY2VlZCcsIGZyb206J0dyZWVuJywgIHRvOidZZWxsb3cnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnU3dpdGNoVG9IYWx0JywgYWN0aW9uOiAnUHJvY2VlZCcsIGZyb206J1llbGxvdycsIHRvOidSZWQnICAgIH0sXG4gICAgICAgICAgeyBuYW1lOiAnU3dpdGNoVG9HbycsICAgYWN0aW9uOiAnUHJvY2VlZCcsIGZyb206J1JlZCcsICAgIHRvOidHcmVlbicgIH1cbiAgICAgICAgXSxcbiAgICAgICAgbGlnaHQgPSBuZXcganNzbS5tYWNoaW5lKHtcbiAgICAgICAgICBpbml0aWFsX3N0YXRlIDogJ1JlZCcsXG4gICAgICAgICAgdHJhbnNpdGlvbnMgICA6IHRyc1xuICAgICAgICB9KTtcblxuICBjb25zdCByX3N0YXRlcyA9IGxpZ2h0LnN0YXRlcygpO1xuICBpdCgnaGFzIHRoZSByaWdodCBzdGF0ZSBjb3VudCcsIHQgPT4gdC5pcyhyX3N0YXRlcy5sZW5ndGgsIDMpKTtcbiAgdHJzLm1hcCh0ID0+IHQudG8pLm1hcChjID0+XG4gICAgaXQoYGhhcyBzdGF0ZSBcIiR7Y31cImAsIHQgPT4gdC5pcyhyX3N0YXRlcy5pbmNsdWRlcyhjKSwgdHJ1ZSkpXG4gICk7XG5cbiAgY29uc3Qgcl9uYW1lcyA9IGxpZ2h0Lmxpc3RfbmFtZWRfdHJhbnNpdGlvbnMoKTtcbiAgaXQoJ2hhcyB0aGUgcmlnaHQgbmFtZWQgdHJhbnNpdGlvbiBjb3VudCcsIHQgPT4gdC5pcyhyX25hbWVzLnNpemUsIDMpKTtcbiAgdHJzLm1hcCh0ID0+IHQubmFtZSkubWFwKGEgPT5cbiAgICBpdChgaGFzIG5hbWVkIHRyYW5zaXRpb24gXCIke2F9XCJgLCB0ID0+IHQuaXMocl9uYW1lcy5oYXMoYSksIHRydWUpKVxuICApO1xuXG4gIGl0LmRlc2NyaWJlKCctIGBwcm9jZWVkYCB3YWxrdGhyb3VnaCcsIGFzeW5jIGl0MiA9PiB7XG5cbiAgICBpdDIoJ21hY2hpbmUgc3RhcnRzIHJlZCcsICB0ID0+IHQuaXMoXCJSZWRcIiwgICAgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MigncHJvY2VlZCBpcyB0cnVlJywgICAgIHQgPT4gdC5pcyh0cnVlLCAgICAgbGlnaHQuYWN0aW9uKCdQcm9jZWVkJykpKTtcbiAgICBpdDIoJ2xpZ2h0IGlzIG5vdyBncmVlbicsICB0ID0+IHQuaXMoXCJHcmVlblwiLCAgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MigncHJvY2VlZCBpcyB0cnVlJywgICAgIHQgPT4gdC5pcyh0cnVlLCAgICAgbGlnaHQuYWN0aW9uKCdQcm9jZWVkJykpKTtcbiAgICBpdDIoJ2xpZ2h0IGlzIG5vdyB5ZWxsb3cnLCB0ID0+IHQuaXMoXCJZZWxsb3dcIiwgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MigncHJvY2VlZCBpcyB0cnVlJywgICAgIHQgPT4gdC5pcyh0cnVlLCAgICAgbGlnaHQuYWN0aW9uKCdQcm9jZWVkJykpKTtcbiAgICBpdDIoJ2xpZ2h0IGlzIHJlZCBhZ2FpbicsICB0ID0+IHQuaXMoXCJSZWRcIiwgICAgbGlnaHQuc3RhdGUoKSkpO1xuXG4gIH0pO1xuXG4gIGl0LmRlc2NyaWJlKCctIG1peGVkIC0gYHByb2NlZWRgIGFuZCBgdHJhbnNpdGlvbmAnLCBhc3luYyBpdDMgPT4ge1xuXG4gICAgaXQzKCdtYWNoaW5lIHN0YXJ0cyByZWQnLCAgICAgICAgICAgICAgdCA9PiB0LmlzKFwiUmVkXCIsICAgIGxpZ2h0LnN0YXRlKCkpKTtcbiAgICBpdDMoJ3Byb2NlZWQgaXMgdHJ1ZScsICAgICAgICAgICAgICAgICB0ID0+IHQuaXModHJ1ZSwgICAgIGxpZ2h0LmFjdGlvbignUHJvY2VlZCcpKSk7XG4gICAgaXQzKCdsaWdodCBpcyBub3cgZ3JlZW4nLCAgICAgICAgICAgICAgdCA9PiB0LmlzKFwiR3JlZW5cIiwgIGxpZ2h0LnN0YXRlKCkpKTtcblxuICAgIGl0MygnZ3JlZW4gcmVmdXNlcyB0cmFuc2l0aW9uIHJlZCcsICAgIHQgPT4gdC5pcyhmYWxzZSwgICAgbGlnaHQudHJhbnNpdGlvbignUmVkJykpKTtcbiAgICBpdDMoJ2dyZWVuIHN0aWxsIGdyZWVuJywgICAgICAgICAgICAgICB0ID0+IHQuaXMoXCJHcmVlblwiLCAgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MygnZ3JlZW4gcmVmdXNlcyB0cmFuc2l0aW9uIGdyZWVuJywgIHQgPT4gdC5pcyhmYWxzZSwgICAgbGlnaHQudHJhbnNpdGlvbignR3JlZW4nKSkpO1xuICAgIGl0MygnZ3JlZW4gc3RpbGwgZ3JlZW4nLCAgICAgICAgICAgICAgIHQgPT4gdC5pcyhcIkdyZWVuXCIsICBsaWdodC5zdGF0ZSgpKSk7XG4gICAgaXQzKCdncmVlbiBhY2NlcHRzIHRyYW5zaXRpb24geWVsbG93JywgdCA9PiB0LmlzKHRydWUsICAgICBsaWdodC50cmFuc2l0aW9uKCdZZWxsb3cnKSkpO1xuICAgIGl0MygnZ3JlZW4gbm93IHllbGxvdycsICAgICAgICAgICAgICAgIHQgPT4gdC5pcyhcIlllbGxvd1wiLCBsaWdodC5zdGF0ZSgpKSk7XG5cbiAgICBpdDMoJ3Byb2NlZWQgaXMgdHJ1ZScsICAgICAgICAgICAgICAgICB0ID0+IHQuaXModHJ1ZSwgICAgIGxpZ2h0LmFjdGlvbignUHJvY2VlZCcpKSk7XG4gICAgaXQzKCdsaWdodCBpcyByZWQgYWdhaW4nLCAgICAgICAgICAgICAgdCA9PiB0LmlzKFwiUmVkXCIsICAgIGxpZ2h0LnN0YXRlKCkpKTtcblxuICAgIGl0MygncmVkIHJlZnVzZXMgdHJhbnNpdGlvbiB5ZWxsb3cnLCAgIHQgPT4gdC5pcyhmYWxzZSwgICAgbGlnaHQudHJhbnNpdGlvbignWWVsbG93JykpKTtcbiAgICBpdDMoJ3JlZCBzdGlsbCByZWQnLCAgICAgICAgICAgICAgICAgICB0ID0+IHQuaXMoXCJSZWRcIiwgICAgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MygncmVkIHJlZnVzZXMgdHJhbnNpdGlvbiByZWQnLCAgICAgIHQgPT4gdC5pcyhmYWxzZSwgICAgbGlnaHQudHJhbnNpdGlvbignUmVkJykpKTtcbiAgICBpdDMoJ3JlZCBzdGlsbCByZWQnLCAgICAgICAgICAgICAgICAgICB0ID0+IHQuaXMoXCJSZWRcIiwgICAgbGlnaHQuc3RhdGUoKSkpO1xuICAgIGl0MygncmVkIGFjY2VwdHMgdHJhbnNpdGlvbiBncmVlbicsICAgIHQgPT4gdC5pcyh0cnVlLCAgICAgbGlnaHQudHJhbnNpdGlvbignR3JlZW4nKSkpO1xuICAgIGl0MygncmVkIG5vdyBncmVlbicsICAgICAgICAgICAgICAgICAgIHQgPT4gdC5pcyhcIkdyZWVuXCIsICBsaWdodC5zdGF0ZSgpKSk7XG5cbiAgICBpdDMoJ3Byb2NlZWQgaXMgdHJ1ZScsICAgICAgICAgICAgICAgICB0ID0+IHQuaXModHJ1ZSwgICAgIGxpZ2h0LmFjdGlvbignUHJvY2VlZCcpKSk7XG4gICAgaXQzKCdsaWdodCBpcyB5ZWxsb3cgYWdhaW4nLCAgICAgICAgICAgdCA9PiB0LmlzKFwiWWVsbG93XCIsIGxpZ2h0LnN0YXRlKCkpKTtcbiAgICBpdDMoJ3Byb2NlZWQgaXMgdHJ1ZScsICAgICAgICAgICAgICAgICB0ID0+IHQuaXModHJ1ZSwgICAgIGxpZ2h0LmFjdGlvbignUHJvY2VlZCcpKSk7XG4gICAgaXQzKCdsaWdodCBpcyBmaW5hbGx5IHJlZCBhZ2FpbicsICAgICAgdCA9PiB0LmlzKFwiUmVkXCIsICAgIGxpZ2h0LnN0YXRlKCkpKTtcblxuICB9KTtcblxufSk7XG4qL1xuIl19