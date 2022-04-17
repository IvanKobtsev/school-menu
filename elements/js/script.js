window.onload = function() {
    let menustyle = document.getElementById("jform_params_menu_style").value,
        background = document.getElementById("jform_params_bg").value,
        bgcolor = document.getElementById("jform_params_bg_color").value,
        fgcolor = document.getElementById("jform_params_fg_color").value,
        bgimage = document.getElementById("jform_params_bg_image").value,
        imgbrightness = document.getElementById("jform_params_bg_image_brightness").value,
        imgblur = document.getElementById("jform_params_bg_image_blur").value,
        fontshadow = document.getElementById("jform_params_text_shadow").value,
        iconshadow = document.getElementById("jform_params_drop_shadow").value,
        blockshadow = document.getElementById("jform_params_box_shadow").value,
        middlemenu = document.getElementById("jform_params_five_to_eleven_menu").value,
        titledisplay = document.getElementById("jform_params_titles").value,
        dateseparator = document.getElementById("jform_params_date_separator").value,
        fontsize = document.getElementById("jform_params_font_size").value,
        dateyear = document.getElementById("jform_params_date_year").value,
        date = new Date(),
        year = dateSpanWidth = "",
        jv3 = false;

    if (document.querySelector("fieldset.panelform ul.adminformlist li:nth-child(17)") == null) {
        jv3 = true;
    }

    function changeOutput() {
        console.log("ASDIOASHASIOUDHASIOUHD");
        menustyle = document.getElementById("jform_params_menu_style").value;
        background = document.getElementById("jform_params_bg").value;
        bgcolor = document.getElementById("jform_params_bg_color").value;
        fgcolor = document.getElementById("jform_params_fg_color").value;
        bgimage = document.getElementById("jform_params_bg_image").value;
        imgbrightness = document.getElementById("jform_params_bg_image_brightness").value;
        imgblur = document.getElementById("jform_params_bg_image_blur").value;
        fontshadow = document.getElementById("jform_params_text_shadow").value;
        iconshadow = document.getElementById("jform_params_drop_shadow").value;
        blockshadow = document.getElementById("jform_params_box_shadow").value;
        middlemenu = document.getElementById("jform_params_five_to_eleven_menu").value;
        titledisplay = document.getElementById("jform_params_titles").value;
        dateseparator = document.getElementById("jform_params_date_separator").value;
        fontsize = document.getElementById("jform_params_font_size").value;
        dateyear = document.getElementById("jform_params_date_year").value;
        if (dateyear == "0") {
            year = "";
            dateSpanWidth = "width: 8.77%; margin: 0% 12.5%;";
        } else {
            year = date.getFullYear();
            year = dateseparator + year;
            dateSpanWidth = "width: 27.77%; margin: 0 3.5%;";
        }

        let titlefont = fontsize - 0 + 2,
            filter = "",
            displayMiddle = "";

        if (menustyle == "1" && background == "1") {
            bgimage = "url('" + document.location.protocol + "//" + document.location.host + "/modules/mod_schoolmenu/assets/images/" + bgimage + "')";
        } else {
            bgimage = "none";
        }

        if (menustyle == "0") {
            fgcolor = "#000";
            bgcolor = "transparent";
            fontsize = "14";
            titlefont = "16";
            iconshadow = "";
            blockshadow = "";
            document.querySelector(".output-block").style = "";
        } else {
            if (fontshadow == "1") {
                document.querySelector(".output-block").style = "text-shadow: 0 0 6px #000 !important;";
            } else {
                document.querySelector(".output-block").style = "";
            }
            if (iconshadow == "1") {
                iconshadow = " filter: drop-shadow(0 0 6px #000) !important;";
            } else {
                iconshadow = "";
            }
            if (blockshadow == "1") {
                blockshadow = " box-shadow: 0 0 6px #000;";
            } else {
                blockshadow = "";
            }
            if (imgblur != " " || imgbrightness != " ") {
                filter = "filter:" + imgbrightness + imgblur + "; ";
            }
        }
        if (middlemenu == "1") {
            displayMiddle = " display: block;";
        }
        document.querySelector(".kid-menu").style = "color: " + fgcolor + " !important;" + blockshadow;
        document.querySelector(".middle-menu").style = "color: " + fgcolor + " !important;" + blockshadow + displayMiddle;
        if (background == "2") {
            document.querySelector(".bg-kid").style = document.querySelector(".bg-middle").style = "background: transparent;";
        } else {
            document.querySelector(".bg-kid").style = document.querySelector(".bg-middle").style = "background-image: " + bgimage + " !important; background-color: " + bgcolor + " !important; " + filter;
        }
        document.querySelectorAll(".menu-title").forEach(item => item.style = "display: " + titledisplay + " !important; font-size: " + titlefont + "px;");
        document.querySelectorAll(".wday-div").forEach(item => item.style = "font-size: " + fontsize + "px");
        document.querySelectorAll(".date-div").forEach(item => item.style = "font-size: " + fontsize + "px; " + dateSpanWidth);
        document.querySelectorAll(".svg-icon").forEach(item => item.style = "color: " + fgcolor + " !important; background: transparent !important;" + iconshadow);
        document.querySelectorAll(".date-div").forEach((item, i) => {
            if (i < 3) {
                item.innerText = 18 - i + dateseparator + "01" + year;
            } else {
                i -= 3;
                item.innerText = 18 - i + dateseparator + "01" + year;
            }
        });
    }

    let translatedTitles = ["Вид меню", "Вид фона", "Цвет заднего плана", "Цвет переднего плана", "Фоновая картинка", "Затемнение фоновой картинки", "Размытие фоновой картинки", "Тень для текста", "Тень для иконок", "Тень для блоков меню", "Наименования", "Меню 5-11 классов", "Разделитель даты", "Указывать полную дату (с годом)", "Размер шрифта основного текста", "Расширение файлов школьного меню"];



    if (!jv3) {
        document.querySelectorAll(".panel fieldset.panelform>ul>li>label").forEach((item, i) => {
            item.innerHTML = translatedTitles[i];
        });
        document.querySelector("fieldset.panelform ul.adminformlist li:nth-child(17)").style = "display: none !important;";
    } else {
        document.querySelectorAll("#options-basic-options .control-label>label").forEach((item, i) => {
            if (i < 16) {
                item.innerHTML = translatedTitles[i];
            }
        });
    }

    let outputBlock = document.createElement("div");
    outputBlock.className = "output-block module-body";
    outputBlock.innerHTML = `<div class="headering">Ориентировочный вид модуля<br>(с текущими настройками)</div>\
    <div class="kid-menu">\
    <div class="bg-kid"></div>\
    <span class="menu-title">Меню 1-4 классов</span>\
    <div class="li-menu">\
    <a class="link-menu menu-icon" href="#">\
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-down" class="svg-icon active-svg svg-inline--fa fa-arrow-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path></svg>\
    </a>\
    <span class="wday-div">Вторник</span>\
    <span class="date-div">11/01/2022</span>\
    </div>\
    <div class="li-menu">\
    <a class="link-menu menu-icon" href="#">\
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-down" class="svg-icon active-svg svg-inline--fa fa-arrow-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path></svg>\
    </a>\
    <span class="wday-div">Понедельник</span>\
    <span class="date-div">10/01/2022</span>\
    </div>\
    <div class="li-menu" title="В этот день школьная столовая не работает">\
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="menu-icon svg-icon inactive-svg svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>\
    <span class="wday-div wday-div_inactive">Воскресенье</span>\
    <span class="date-div date-div_inactive">09/01/2022</span>\
    </div></div>\
    <div class="middle-menu">\
    <div class="bg-middle"></div>\
    <span class="menu-title">Меню 5-11 классов</span>\
    <div class="li-menu"><a class="link-menu menu-icon" href="#">\
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-down" class="svg-icon active-svg svg-inline--fa fa-arrow-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path></svg>\
    </a>\
    <span class="wday-div">Вторник</span>\
    <span class="date-div">11/01/2022</span>\
    </div>\
    <div class="li-menu">\
    <a class="link-menu menu-icon" href="#">\
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-down" class="svg-icon active-svg svg-inline--fa fa-arrow-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path></svg>\
    </a>\
    <span class="wday-div">Понедельник</span>\
    <span class="date-div">10/01/2022</span>\
    </div>\
    <div class="li-menu" title="В этот день школьная столовая не работает">\
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="menu-icon svg-icon inactive-svg svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>\
    <span class="wday-div wday-div_inactive">Воскресенье</span>\
    <span class="date-div date-div_inactive">09/01/2022</span>\
    </div></div>`;

    if (!jv3) {
        document.querySelector("fieldset.panelform ul.adminformlist li:nth-child(2)").insertAdjacentElement("beforebegin", outputBlock);
        document.querySelectorAll("fieldset.panelform select").forEach(item => item.addEventListener("change", changeOutput));
    } else {
        document.querySelector("#options-basic-options:nth-child(2)").insertAdjacentElement("beforebegin", outputBlock);
        document.querySelectorAll("#options-basic-options .chzn-results .active-result").forEach(item => item.addEventListener("click", changeOutput));
    }

    // document.querySelectorAll("fieldset.panelform input").forEach(item => item.addEventListener("input", ???));
    changeOutput();

};