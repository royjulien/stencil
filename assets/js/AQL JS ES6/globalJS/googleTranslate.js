// Google Translation Plug-in
googleTranslateElementInit => {
	"use strict";
	new google.translate.TranslateElement({
		pageLanguage: 'en',
		layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,
		gaTrack: true,
		gaId: 'UA-39564069-1'
	}, 'google_translate_element');
}