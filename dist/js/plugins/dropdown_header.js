/**
* Tom Select v1.0.0-rc.3
* Licensed under the Apache License, Version 2.0 (the "License");
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../../tom-select.js')) :
	typeof define === 'function' && define.amd ? define(['../../tom-select.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.dropdown_header = factory(global.TomSelect));
}(this, (function (TomSelect) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var TomSelect__default = /*#__PURE__*/_interopDefaultLegacy(TomSelect);

	/**
	 * Return a dom element from either a dom query string, jQuery object, a dom element or html string
	 * https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
	 *
	 * @param {any} query .. should be {HTMLElement|string|JQuery}
	 * @return {HTMLElement}
	 */
	function getDom(query) {
	  if (query.jquery) {
	    return query[0];
	  }

	  if (query instanceof HTMLElement) {
	    return query;
	  }

	  if (query.indexOf('<') > -1) {
	    var div = document.createElement('div');
	    div.innerHTML = query.trim(); // Never return a text node of whitespace as the result

	    return div.querySelector(':first-child');
	  }

	  return document.querySelector(query);
	}

	/**
	 * Plugin: "dropdown_header" (Tom Select)
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
	var plugin = TomSelect__default['default'].define('dropdown_header', function (options) {
	  var self = this;
	  options = Object.assign({
	    title: 'Untitled',
	    headerClass: 'dropdown-header',
	    titleRowClass: 'dropdown-header-title',
	    labelClass: 'dropdown-header-label',
	    closeClass: 'dropdown-header-close',
	    html: function html(data) {
	      return '<div class="' + data.headerClass + '">' + '<div class="' + data.titleRowClass + '">' + '<span class="' + data.labelClass + '">' + data.title + '</span>' + '<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' + '</div>' + '</div>';
	    }
	  }, options);
	  self.hook('after', 'setup', function () {
	    var header = getDom(options.html(options));
	    self.dropdown.insertBefore(header, self.dropdown.firstChild);
	  });
	});

	return plugin;

})));
//# sourceMappingURL=dropdown_header.js.map
