<?php

defined( '_JEXEC' ) or die( 'Restricted access' );

jimport('joomla.form.formfield');

class JFormFieldAsset extends JFormField
{
	protected	$type = 'Asset';
	
	protected function getInput() {
		$doc = JFactory::getDocument();	
		// if (JVERSION<3) {
			// $doc->addScript(JURI::root(true).'/modules/mod_schoolmenu/elements/js/jquery.js');
			$doc->addScript(JURI::root(true).'/modules/mod_schoolmenu/elements/js/script.js');
			$doc->addStylesheet(JURI::root(true).'/modules/mod_schoolmenu/elements/css/style.css');			
		// } else {
			// JHtml::_('jquery.framework');	
			// $doc->addScript(JURI::root(true).'/modules/mod_schoolmenu/elements/js/script_j3.js');			
		// }
		// $doc->addScript(JURI::root(true).'/modules/mod_schoolmenu/elements/js/colorpicker.js');
		// $doc->addStylesheet(JURI::root(true).'/modules/mod_schoolmenu/elements/css/colorpicker.css');
		return null;
	}
}