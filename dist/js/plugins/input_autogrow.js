/**
* Tom Select v1.0.0-rc.2
* Licensed under the Apache License, Version 2.0 (the "License");
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../../tom-select.js')) :
	typeof define === 'function' && define.amd ? define(['../../tom-select.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.input_autogrow = factory(global.TomSelect));
}(this, (function (TomSelect) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var TomSelect__default = /*#__PURE__*/_interopDefaultLegacy(TomSelect);

	/**
	 * Plugin: "input_autogrow" (Tom Select)
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
	var plugin = TomSelect__default['default'].define('input_autogrow', function (options) {
	  var self = this;
	  self.hook('after', 'setup', function () {
	    var test_input = document.createElement('span');
	    var control = this.control_input;
	    test_input.style.position = 'absolute';
	    test_input.style.top = '-99999px';
	    test_input.style.left = '-99999px';
	    test_input.style.width = 'auto';
	    test_input.style.padding = 0;
	    test_input.style.whiteSpace = 'pre';
	    self.wrapper.appendChild(test_input);
	    var transfer_styles = ['letterSpacing', 'fontSize', 'fontFamily', 'fontWeight', 'textTransform'];

	    for (var i = 0, n = transfer_styles.length; i < n; i++) {
	      var style_name = transfer_styles[i];
	      test_input.style[style_name] = control.style[style_name];
	    }
	    /**
	     * Set the control width
	     *
	     * @param {string} str
	     */


	    var resize = function resize() {
	      test_input.textContent = control.value;
	      control.style.width = test_input.clientWidth + 'px';
	    };

	    control.addEventListener('input', resize);
	    control.addEventListener('keyup', resize);
	    control.addEventListener('blur', resize);
	    control.addEventListener('update', resize);
	  });
	});

	return plugin;

})));
//# sourceMappingURL=input_autogrow.js.map
