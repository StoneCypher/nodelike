
import {test, describe} from 'ava-spec';

const jssm = require('../../../build/nodelike.es5.js');





test('2+2 is 4', t => t.is(2+2, 4));

const seq = upTo => new Array(upTo).fill(false).map( (_,i) => i );




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
