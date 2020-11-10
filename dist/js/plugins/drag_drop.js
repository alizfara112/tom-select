/**
* Tom Select v1.0.0-rc.3
* Licensed under the Apache License, Version 2.0 (the "License");
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../../tom-select.js')) :
	typeof define === 'function' && define.amd ? define(['../../tom-select.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.drag_drop = factory(global.TomSelect));
}(this, (function (TomSelect) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var TomSelect__default = /*#__PURE__*/_interopDefaultLegacy(TomSelect);

	/**
	 * Plugin: "drag_drop" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	var plugin = TomSelect__default['default'].define('drag_drop', function (options) {
	  if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
	  if (this.settings.mode !== 'multi') return;
	  var self = this;
	  var orig_lock = self.lock;
	  var orig_unlock = self.unlock;
	  self.hook('instead', 'lock', function () {
	    var sortable = self.control.dataset.sortable;
	    if (sortable) sortable.disable();
	    return orig_lock.apply(self, arguments);
	  });
	  self.hook('instead', 'unlock', function () {
	    var sortable = self.control.dataset.sortable;
	    if (sortable) sortable.enable();
	    return orig_unlock.apply(self, arguments);
	  });
	  self.hook('after', 'setup', function () {
	    var $control = $(self.control).sortable({
	      items: '[data-value]',
	      forcePlaceholderSize: true,
	      disabled: self.isLocked,
	      start: function start(e, ui) {
	        ui.placeholder.css('width', ui.helper.css('width'));
	        $control.css({
	          overflow: 'visible'
	        });
	      },
	      stop: function stop() {
	        $control.css({
	          overflow: 'hidden'
	        });
	        var values = [];
	        $control.children('[data-value]').each(function () {
	          values.push($(this).attr('data-value'));
	        });
	        self.setValue(values);
	      }
	    });
	  });
	});

	return plugin;

})));
//# sourceMappingURL=drag_drop.js.map
