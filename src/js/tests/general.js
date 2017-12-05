
import {test, describe} from 'ava-spec';

const nodelike = require('../../../build/nodelike.es5.js');





test('2+2 is 4', t => t.is(2+2, 4));





describe('Package basics', async it => {

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

  it('Hello world/0', t => t.is("Hello, world!", nodelike.hello()      ));
  it('Hello world/1', t => t.is("Hello, Joe!",   nodelike.hello('Joe') ));

});
