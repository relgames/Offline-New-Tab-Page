/*
	Copyright Jeremiah Megel 2014
	
	This file is part of Offline New Tab Page.
	
	Offline New Tab Page is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	Offline New Tab Page is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License
	along with Offline New Tab Page. If not, see <http://www.gnu.org/licenses/>.
*/

chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		return {cancel: true};
	},
	{urls: ["*://*.google.com/_/chrome/newtab*"]},
	["blocking"]
);

chrome.tabs.onCreated.addListener(function(tab){
	if (tab.url.indexOf("chrome://newtab") === 0) {
		chrome.tabs.update(tab.id, {url:"chrome-search://local-ntp/local-ntp.html"});
	}
});