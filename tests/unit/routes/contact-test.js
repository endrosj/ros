//  Created By: Endro 
//  Email: endro.mono9@gmail.com 
//  Created At: 2024-04-12 

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contact', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:contact');
    assert.ok(route);
  });
});
