<?php

defined('_JEXEC') or die;
$menustyle = $params->get('menu-style', '0');
$background = $params->get('bg', '0');
$bgcolor = $params->get('bg-color', '#fff');
$fgcolor = $params -> get('fg-color', '#000');
$bgimage = $params->get('bg-image', 'null');
$imgbrightness = $params->get('bg-image-brightness', ' ');
$imgblur = $params->get('bg-image-blur', ' ');
$fontshadow = $params->get('text-shadow', '0');
$iconshadow = $params->get('drop-shadow', '0');
$blockshadow = $params->get('box-shadow', '0');
$middlemenu = $params->get('five-to-eleven-menu', '0');
$titledisplay = $params->get('titles', 'none');
$dateseparator = $params->get('date-separator', '/'); 
$fontsize = $params->get('font-size', '100');
$fileextension = $params->get('file-extension', '.xlsx');
$dateyear = $params->get('date-year', '0');

if ($dateyear == '0') {
    $datewidth = "width: 8.77%; margin: 0% 12.5%";
}
else {
    $datewidth = "width: 27.77%; margin: 0 3.5%";
}

$titlefont = $fontsize - 0 + 2;

if ($bgimage != "null" && $menustyle == "1" && $background == "1") {
    $bgimage = "url('".JURI::base()."/modules/mod_schoolmenu/assets/images/".$bgimage."')";
}
else {
    $bgimage = "none";
}

$css = "";

if ($menustyle == "0") {
    $fgcolor = "#000";
    $bgcolor = "transparent";
    $fontsize = "14";
    $titlefont = "16";
}
else {
    if ($fontshadow == "1") {
        $css .= ".module-body { text-shadow: 0 0 6px #000; }";
    }
    if ($iconshadow == "1") {
        $css .= ".svg-icon { filter: drop-shadow(0 0 6px #000) !important; }";
    }
    if ($blockshadow == "1") {
        $css .= ".kid-menu, .middle-menu { box-shadow: 0 0 6px #000; }";
    }
}

if ($middlemenu == "1") {
    $css .= ".middle-menu { display: block !important; }";
}

$css .= ".kid-menu::before, .middle-menu::before { background-image: ".$bgimage." !important; background-color: ".$bgcolor." !important; ";

if ($imgblur != " " || $imgbrightness != " ") {
    $css .= "filter:".$imgbrightness.$imgblur."; ";
}

$css .= "} .menu-title { display: ".$titledisplay." !important; font-size: ".$titlefont."px; } .wday-div, .date-div { font-size: ".$fontsize."px } .date-div { ".$datewidth." } .kid-menu, .middle-menu { color: ".$fgcolor." !important; } .svg-icon, .svg-icon:hover, .svg-icon:visited { color: ".$fgcolor." !important; background: transparent !important; }";

$document = JFactory::getDocument();
$document->addStyledeclaration($css);
$document->addStyleSheet(JURI::base().'/modules/mod_schoolmenu/assets/css/style.css', 'text/css' );
$document->addScript(JURI::base().'/modules/mod_schoolmenu/assets/js/script.js');
require_once dirname(__FILE__).'/helper.php';
$menu = modSchoolMenuHelper::getMenu($params);
require JModuleHelper::getLayoutPath('mod_schoolmenu');