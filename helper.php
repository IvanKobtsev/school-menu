<?php

class ModSchoolMenuHelper
{ 
    public static function getMenu($params)
    {
        // if (file_exists(__DIR__."/assets/php/simplexlsx.example.php")) {
        //     echo "good ";
        // }
        // else {
        //     echo "error ";
        // }
        // require "/assets/php/simplexlsx.example.php";
        $fileextension = $params->get('file-extension', '.xlsx');
        $dateseparator = $params->get('date-separator', '/');
        $showyear = $params->get('date-year', '0');
        // function debug_to_console($data) {
        //     $output = $data;
        //     if (is_array($output))
        //         $output = implode(',', $output);
        
        //     echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
        // }
        function doesUrlExists($urle) {
            $ch = curl_init($urle);
            curl_setopt($ch, CURLOPT_NOBODY, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_exec($ch);
            $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        
            if ($code == 200) {
                $status = true;
            } else {
                $status = false;
            }
            curl_close($ch);
            return $status;
        }

        function getWeekDay ($day) {
            switch (strftime("%w", $day)) {
                default:
                    return "Не определено"; 
                break;
                case 0:
                    return "Воскресенье";
                break;
                case 1:
                    return "Понедельник";
                break;
                case 2:
                    return "Вторник";
                break;
                case 3:
                    return "Среда";
                break;
                case 4:
                    return "Четверг";
                break;
                case 5:
                    return "Пятница";
                break;
                case 6:
                    return "Суббота";
                break;
            }
        }
        
        $arrowdown = "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='arrow-circle-down' class='svg-icon active-svg svg-inline--fa fa-arrow-circle-down fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z'></path></svg>";
        $times = "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='times-circle' class='menu-icon svg-icon inactive-svg svg-inline--fa fa-times-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'></path></svg>";
        $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'];
        $wurl = $url."/modules/mod_schoolmenu/assets/php/open_table.php";
        // $url .= '/images/food/';
        $url .= '/food/';
        $files = [];
        $dates = [];
        $lastdates = [mktime(0, 0, 0, date("m"), date("d"), date("Y")), mktime(0, 0, 0, date("m"), date("d")-1, date("Y")), mktime(0, 0, 0, date("m"), date("d")-2, date("Y"))];
        for ($i = 0; $i < 3; $i++) {
            $files[$i] = strftime("%Y", $lastdates[$i])."-".strftime("%m", $lastdates[$i])."-".strftime("%d", $lastdates[$i])."-sm".$fileextension;
        }
        for ($i = 0; $i < 3; $i++) {
            $files[$i+3] = strftime("%Y", $lastdates[$i])."-".strftime("%m", $lastdates[$i])."-".strftime("%d", $lastdates[$i])."-mm".$fileextension;
        }
        if ($showyear == '0') {
            for ($i = 0; $i < 3; $i++) {
                $dates[$i] = strftime("%d", $lastdates[$i]).$dateseparator.strftime("%m", $lastdates[$i]);
            }
        }
        else {
            for ($i = 0; $i < 3; $i++) {
                $dates[$i] = strftime("%d", $lastdates[$i]).$dateseparator.strftime("%m", $lastdates[$i]).$dateseparator.strftime("%Y", $lastdates[$i]);
            }
        }
        $result = "<div class='module-body'>";
        if (date("m") < 6 || date("m") > 8) {
            $result .= "<ul class='kid-menu'><div class='menu-title'>Меню 1-4 классов</div>";
            for ($i = 0; $i < 3; $i++) {
                if (doesUrlExists($url.$files[$i])) {
                    $result .= "<li class='li-menu'><a class='link-menu menu-icon' data-day='".$i."' title='Скачать меню на этот день' href='".$wurl."?file=".$files[$i]."' target='_blank'>".$arrowdown."</a><div class='wday-div'>".getWeekDay($lastdates[$i])."</div><div class='date-div'>".$dates[$i]."</div></li>";
                }
                else {
                    $result .= "<li class='li-menu' title='В этот день школьная столовая не работает'>".$times."<div class='wday-div wday-div_inactive'>".getWeekDay($lastdates[$i])."</div><div class='date-div date-div_inactive'>".$dates[$i]."</div></li>";
                }
            }
            $result .= "</ul><ul class='middle-menu'><div class='menu-title'>Меню 5-11 классов</div>";
            for ($i = 3; $i < 6; $i++) {
                if (doesUrlExists($url.$files[$i])) {
                    $result .= "<li class='li-menu'><a class='link-menu menu-icon' data-day='".$i."' href='".$wurl."?file=".$files[$i]."' target='_blank'>".$arrowdown."</a><div class='wday-div'>".getWeekDay($lastdates[$i-3])."</div><div class='date-div'>".$dates[$i-3]."</div></li>";
                }
                else {
                    $result .= "<li class='li-menu' title='В этот день школьная столовая не работает'>".$times."<div class='wday-div wday-div_inactive'>".getWeekDay($lastdates[$i-3])."</div><div class='date-div date-div_inactive'>".$dates[$i-3]."</div></li>";
                }
            }
            $result .= "</ul>";
        }
        else {
            $result = "<div class='no-menu'>Во время летних каникул школьное меню не обновляется.</div>";
        }
        $result .= "</div>";
        return $result;
    }
}