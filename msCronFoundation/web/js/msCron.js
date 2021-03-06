/*
 =========================================================
 msCronjs
 https://github.com/onterumahendra/CronScheduler-Foundation
 Copyright (c) 2016 MSquare Solutions
 =========================================================
 */
/*
 * Contributions:
 *  - Onteru Mahendra (msbrother445@gmail.com)
 *  - Padala Mallikarjuna (mallikarjuna.909@gmail.com)
 */


(function ($) {

    $.fn.msCron = function (options) {
        if (typeof options === "undefined") {
            options = {
                getCron: "",
                setCron: "",
                activeTab: "MINUTES"
            };
        }
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            getCron: "",
            setCron: "",
            activeTab: ""
        }, options);

        var mainDiv = $("<div/>", {id: "CronGenMainDiv"});
        var topMenu = $("<ul/>", {"class": "tabs", id: "msCronTabs", "data-tabs": ""});
        $('<li/>', {'class': 'tabs-title is-active'}).html($('<a id="msMinutesTab"  href="#Minutes" aria-selected="true">Minutes</a>')).appendTo(topMenu);
        $('<li/>', {'class': 'tabs-title'}).html($('<a id="msHourlyTab"  href="#Hourly">Hourly</a>')).appendTo(topMenu);
        $('<li/>', {'class': 'tabs-title'}).html($('<a id="msDailyTab"  href="#Daily">Daily</a>')).appendTo(topMenu);
        $('<li/>', {'class': 'tabs-title'}).html($('<a id="msWeeklyTab"  href="#Weekly">Weekly</a>')).appendTo(topMenu);
        $('<li/>', {'class': 'tabs-title'}).html($('<a id="msMonthlyTab"  href="#Monthly">Monthly</a>')).appendTo(topMenu);
        $('<li/>', {'class': 'tabs-title'}).html($('<a id="msYearlyTab"  href="#Yearly">Yearly</a>')).appendTo(topMenu);
        $(topMenu).appendTo(mainDiv);
        var tabContent = $("<div/>", {"class": "tabs-content", "data-tabs-content": "msCronTabs"});
        //creating the minutesTab
        var minutesTab = $("<div/>", {"class": "tabs-panel is-active", id: "Minutes"});
        var minutesTabSection = $("<div/>", {"style": "padding:15px"});
        $(minutesTabSection).append("Every&nbsp;");
        $("<input/>", {id: "MinutesInput", type: "text", value: "1", style: "width: 40px;display:inline"}).appendTo(minutesTabSection);
        $(minutesTabSection).append("&nbsp;minute(s)");
        $(minutesTabSection).appendTo(minutesTab);
        $(minutesTab).appendTo(tabContent);
        //creating the hourlyTab
        var hourlyTab = $("<div/>", {"class": "tabs-panel", id: "Hourly"});
        var hourlyOption1 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "1", name: "HourlyRadio", checked: "checked"}).appendTo(hourlyOption1);
        $(hourlyOption1).append("&nbsp;Every&nbsp;");
        $("<input/>", {id: "HoursInput", type: "text", value: "1", style: "width: 40px;display:inline"}).appendTo(hourlyOption1);
        $(hourlyOption1).append("&nbsp;hour(s)");
        $(hourlyOption1).appendTo(hourlyTab);
        var hourlyOption2 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "2", name: "HourlyRadio"}).appendTo(hourlyOption2);
        $(hourlyOption2).append("&nbsp;At&nbsp;");
        $(hourlyOption2).append('<select id="AtHours" class="hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(hourlyOption2).append('<select id="AtMinutes" class="minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(hourlyOption2).appendTo(hourlyTab);
        $(hourlyTab).appendTo(tabContent);
        //creating the dailyTab
        var dailyTab = $("<div/>", {"class": "tabs-panel", id: "Daily"});
        var dailyOption1 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "1", name: "DailyRadio", checked: "checked"}).appendTo(dailyOption1);
        $(dailyOption1).append("&nbsp;Every&nbsp;");
        $("<input/>", {id: "DaysInput", type: "text", value: "1", style: "width: 40px;display:inline"}).appendTo(dailyOption1);
        $(dailyOption1).append("&nbsp;day(s)");
        $(dailyOption1).appendTo(dailyTab);
        var dailyOption2 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "2", name: "DailyRadio"}).appendTo(dailyOption2);
        $(dailyOption2).append("&nbsp;Every week day&nbsp;");
        $(dailyOption2).appendTo(dailyTab);
        $(dailyTab).append("Start time&nbsp;");
        $(dailyTab).append('<select id="DailyHours" class="hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(dailyTab).append('<select id="DailyMinutes" class="minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(dailyTab).appendTo(tabContent);
        //creating the weeklyTab
        var weeklyTab = $("<div/>", {"class": "tabs-panel", id: "Weekly"});
        var weeklyWell = $("<fieldset/>");

        $("<input/>", {type: "checkbox", id: "mondayCheckBox", value: "MON"}).appendTo(weeklyWell);
        $("<label/>", {"class": "checkbox-inline", "for": "mondayCheckBox"}).html("Monday").appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", id: "tuedayCheckBox", value: "TUE"}).appendTo(weeklyWell);
        $("<label/>", {"class": "checkbox-inline", "for": "tuedayCheckBox"}).html("Tuesday").appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", id: "weddayCheckBox", value: "WED"}).appendTo(weeklyWell);
        $("<label/>", {"class": "checkbox-inline", "for": "weddayCheckBox"}).html("Wednesday").appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", id: "thudayCheckBox", value: "THU"}).appendTo(weeklyWell);
        $("<label/>", {"class": "checkbox-inline", "for": "thudayCheckBox"}).html("Thursday").appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", id: "fridayCheckBox", value: "FRI"}).appendTo(weeklyWell);
        $("<label/>", {"class": "checkbox-inline", "for": "fridayCheckBox"}).html("Friday").appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", id: "satdayCheckBox", value: "SAT"}).appendTo(weeklyWell);
        $("<label/>", {"class": "checkbox-inline", "for": "satdayCheckBox"}).html("Saturday").appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", id: "sundayCheckBox", value: "SUN"}).appendTo(weeklyWell);
        $("<label/>", {"class": "checkbox-inline", "for": "sundayCheckBox"}).html("Sunday").appendTo(weeklyWell);
        //Hack to fix the well box
        $(weeklyWell).appendTo(weeklyTab);
        $(weeklyTab).append("Start time&nbsp;");
        $(weeklyTab).append('<select id="WeeklyHours" class="hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(weeklyTab).append('<select id="WeeklyMinutes" class="minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(weeklyTab).appendTo(tabContent);
        //creating the monthlyTab
        var monthlyTab = $("<div/>", {"class": "tabs-panel", id: "Monthly"});
        var monthlyOption1 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "1", name: "MonthlyRadio", checked: "checked"}).appendTo(monthlyOption1);
        $(monthlyOption1).append("&nbsp;Day&nbsp");
        $("<input/>", {id: "DayOfMOnthInput", type: "text", value: "1", style: "width: 40px;display:inline"}).appendTo(monthlyOption1);
        $(monthlyOption1).append("&nbsp;of every&nbsp;");
        $("<input/>", {id: "MonthInput", type: "text", value: "1", style: "width: 40px;display:inline;"}).appendTo(monthlyOption1);
        $(monthlyOption1).append("&nbsp;month(s)");
        $(monthlyOption1).appendTo(monthlyTab);
        var monthlyOption2 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "2", name: "MonthlyRadio"}).appendTo(monthlyOption2);
        $(monthlyOption2).append("&nbsp;");
        $(monthlyOption2).append('<select id="WeekDay" class="day-order-in-month" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(monthlyOption2).append('<select id="DayInWeekOrder" class="week-days" style="width: 100px;display:inline"></select>');
        $(monthlyOption2).append("&nbsp;of every&nbsp;");
        $("<input/>", {id: "EveryMonthInput", type: "text", value: "1", style: "width: 40px;display:inline;"}).appendTo(monthlyOption2);
        $(monthlyOption2).append("&nbsp;month(s)");
        $(monthlyOption2).appendTo(monthlyTab);
        $(monthlyTab).append("Start time&nbsp;");
        $(monthlyTab).append('<select id="MonthlyHours" class="hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(monthlyTab).append('<select id="MonthlyMinutes" class="minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(monthlyTab).appendTo(tabContent);
        //creating the yearlyTab
        var yearlyTab = $("<div/>", {"class": "tabs-panel", id: "Yearly"});
        var yearlyOption1 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "1", name: "YearlyRadio", checked: "checked"}).appendTo(yearlyOption1);
        $(yearlyOption1).append("&nbsp;Every&nbsp");
        $(yearlyOption1).append('<select id="MonthsOfYear" class="months" style="width: 150px;display:inline"></select>');
        $(yearlyOption1).append("&nbsp;in day&nbsp;");
        $("<input/>", {id: "YearInput", type: "text", value: "1", style: "width: 40px;display:inline;"}).appendTo(yearlyOption1);
        $(yearlyOption1).appendTo(yearlyTab);
        var yearlyOption2 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "2", name: "YearlyRadio"}).appendTo(yearlyOption2);
        $(yearlyOption2).append("&nbsp;The&nbsp;");
        $(yearlyOption2).append('<select id="DayOrderInYear" class="day-order-in-month" style="width: 90px;display:inline;margin-right:5px;"></select>');
        $(yearlyOption2).append('<select id="DayWeekForYear" class="week-days" style="width: 100px;display:inline"></select>');
        $(yearlyOption2).append("&nbsp;of&nbsp;");
        $(yearlyOption2).append('<select id="MonthsOfYear2" class="months" style="width: 110px;display:inline"></select>');
        $(yearlyOption2).appendTo(yearlyTab);
        $(yearlyTab).append("Start time&nbsp;");
        $(yearlyTab).append('<select id="YearlyHours" class="hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(yearlyTab).append('<select id="YearlyMinutes" class="minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(yearlyTab).appendTo(tabContent);
        $(tabContent).appendTo(mainDiv);
        $(this).html(mainDiv);

        fillDataOfMinutesAndHoursSelectOptions();
        fillDayWeekInMonth();
        fillInWeekDays();
        fillInMonths();

        $("#CronGenMainDiv select,input").change(function (e) {
            generate();
        });
        $("#CronGenMainDiv input").focus(function (e) {
            generate();
        });
        if (options.setCron !== "") {
            populateCron(options.activeTab, options.setCron);
        } else {
            generate();
        }

        function fillInMonths() {
            var days = [
                {text: "January", val: "1"},
                {text: "February", val: "2"},
                {text: "March", val: "3"},
                {text: "April", val: "4"},
                {text: "May", val: "5"},
                {text: "June", val: "6"},
                {text: "July", val: "7"},
                {text: "August", val: "8"},
                {text: "September", val: "9"},
                {text: "October", val: "10"},
                {text: "Novermber", val: "11"},
                {text: "December", val: "12"}
            ];
            $(".months").each(function () {
                fillOptions(this, days);
            });
        }

        function fillOptions(elements, options) {
            for (var i = 0; i < options.length; i++)
                $(elements).append("<option value='" + options[i].val + "'>" + options[i].text + "</option>");
        }

        function fillDataOfMinutesAndHoursSelectOptions() {
            for (var i = 0; i < 60; i++) {
                if (i < 24) {
                    $(".hours").each(function () {
                        $(this).append(timeSelectOption(i));
                    });
                }
                $(".minutes").each(function () {
                    $(this).append(timeSelectOption(i));
                });
            }
        }

        function fillInWeekDays() {
            var days = [
                {text: "Monday", val: "MON"},
                {text: "Tuesday", val: "TUE"},
                {text: "Wednesday", val: "WED"},
                {text: "Thursday", val: "THU"},
                {text: "Friday", val: "FRI"},
                {text: "Saturday", val: "SAT"},
                {text: "Sunday", val: "SUN"}
            ];
            $(".week-days").each(function () {
                fillOptions(this, days);
            });
        }

        function fillDayWeekInMonth() {
            var days = [
                {text: "First", val: "1"},
                {text: "Second", val: "2"},
                {text: "Third", val: "3"},
                {text: "Fourth", val: "4"}
            ];
            $(".day-order-in-month").each(function () {
                fillOptions(this, days);
            });
        }

        function displayTimeUnit(unit) {
            if (unit.toString().length == 1)
                return "0" + unit;
            return unit;
        }

        function timeSelectOption(i) {
            return "<option value='" + i + "'>" + displayTimeUnit(i) + "</option>";
        }

        function generate() {

            var activeTab = $("ul#msCronTabs li.is-active a").prop("id");
            var results = "", activeTab;
            switch (activeTab) {
                case "msMinutesTab":
                    results = "0 0/" + $("#MinutesInput").val() + " * 1/1 * ? *";
                    activeTab = "MINUTES";
                    break;
                case "msHourlyTab":
                    switch ($("input:radio[name=HourlyRadio]:checked").val()) {
                        case "1":
                            results = "0 0 0/" + $("#HoursInput").val() + " 1/1 * ? *";
                            break;
                        case "2":
                            results = "0 " + Number($("#AtMinutes").val()) + " " + Number($("#AtHours").val()) + " 1/1 * ? *";
                            break;
                    }
                    activeTab = "HOURLY";
                    break;
                case "msDailyTab":
                    switch ($("input:radio[name=DailyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($("#DailyMinutes").val()) + " " + Number($("#DailyHours").val()) + " 1/" + $("#DaysInput").val() + " * ? *";
                            break;
                        case "2":
                            results = "0 " + Number($("#DailyMinutes").val()) + " " + Number($("#DailyHours").val()) + " ? * MON-FRI *";
                            break;
                    }
                    activeTab = "DAILY";
                    break;
                case "msWeeklyTab":
                    var selectedDays = "";
                    $("#Weekly input:checkbox:checked").each(function () {
                        selectedDays += $(this).val() + ",";
                    });
                    if (selectedDays.length > 0)
                        selectedDays = selectedDays.substr(0, selectedDays.length - 1);
                    results = "0 " + Number($("#WeeklyMinutes").val()) + " " + Number($("#WeeklyHours").val()) + " ? * " + selectedDays + " *";
                    activeTab = "WEEKLY";
                    break;
                case "msMonthlyTab":
                    switch ($("input:radio[name=MonthlyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($("#MonthlyMinutes").val()) + " " + Number($("#MonthlyHours").val()) + " " + $("#DayOfMOnthInput").val() + " 1/" + $("#MonthInput").val() + " ? *";
                            break;
                        case "2":
                            results = "0 " + Number($("#MonthlyMinutes").val()) + " " + Number($("#MonthlyHours").val()) + " ? 1/" + Number($("#EveryMonthInput").val()) + " " + $("#DayInWeekOrder").val() + "#" + $("#WeekDay").val() + " *";
                            break;
                    }
                    activeTab = "MONTHLY";
                    break;
                case "msYearlyTab":
                    switch ($("input:radio[name=YearlyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($("#YearlyMinutes").val()) + " " + Number($("#YearlyHours").val()) + " " + $("#YearInput").val() + " " + $("#MonthsOfYear").val() + " ? *";
                            break;
                        case "2":
                            results = "0 " + Number($("#YearlyMinutes").val()) + " " + Number($("#YearlyHours").val()) + " ? " + $("#MonthsOfYear2").val() + " " + $("#DayWeekForYear").val() + "#" + $("#DayOrderInYear").val() + " *";
                            break;
                    }
                    activeTab = "YEARLY";
                    break;
            }
            options.getCron = results;
            options.activeTab = activeTab;

        }

        function populateCron(actTab, expression) {
            validExp = expression.replace(/ +(?= )/g, '').trim();
            var validExp = validExp.split(" ");
            if (validExp.length === 7) {
                $("#msCronTabs li,#CronGenMainDiv .tabs-content .tabs-panel").removeClass("is-active");
                $("#msCronTabs li a").attr("aria-selected",false)
                switch (actTab) {
                    case "MINUTES":
                        $('#msCronTabs a[href="#Minutes"]').attr("aria-selected",true).parent().addClass("is-active");
                        $("#Daily").addClass("is-active");
                        expression = expression.match(/\d+/g);
                        $("#MinutesInput").val(expression[2]);
                        break
                    case "HOURLY":
                        $('#msCronTabs a[href="#Hourly"]').attr("aria-selected",true).parent().addClass("is-active");
                        $("#Hourly").addClass("is-active");
                        expression = expression.match(/\d+/g);
                        if (expression.length === 6) {
                            $("#HoursInput").val(expression[3]);
                            $("input:radio[name=HourlyRadio][value=1]").prop("checked", true);
                        } else {
                            $("#AtMinutes ").val(expression[1]);
                            $("#AtHours ").val(expression[2]);
                            $("input:radio[name=HourlyRadio][value=2]").prop("checked", true);
                        }
                        break
                    case "DAILY":
                        $('#msCronTabs a[href="#Daily"]').attr("aria-selected",true).parent().addClass("is-active");
                        $("#Daily").addClass("is-active");
                        expression = expression.match(/\d+/g);
                        if (expression.length === 5) {
                            $("#DaysInput").val(expression[4]);
                            $("input:radio[name=DailyRadio][value=1]").prop("checked", true);
                        } else {

                            $("input:radio[name=DailyRadio][value=2]").prop("checked", true);
                        }
                        $("#DailyHours ").val(expression[2]);
                        $("#DailyMinutes ").val(expression[1]);

                        break
                    case "WEEKLY":
                        $('#msCronTabs a[href="#Weekly"]').attr("aria-selected",true).parent().addClass("is-active");
                        $("#Weekly").addClass("is-active");
                        var weekdays = expression;
                        expression = expression.match(/\d+/g);
                        $("#WeeklyMinutes").val(expression[1]);
                        $("#WeeklyHours").val(expression[2]);
                        $("#Weekly input:checkbox").each(function () {
                            if (weekdays.indexOf($(this).val()) >= 0) {
                                $(this).prop('checked', true);
                            }
                        });
                        break
                    case "MONTHLY":
                        $('#msCronTabs a[href="#Monthly"]').attr("aria-selected",true).parent().addClass("is-active");
                        $("#Monthly").addClass("is-active");
                        if (expression.indexOf('#') !== -1) {
                            $("input:radio[name=MonthlyRadio][value=2]").prop("checked", true);
                            $("#DayInWeekOrder").val(expression.substring(expression.indexOf('#'), expression.indexOf('#') - 3));
                            expression = expression.match(/\d+/g);
                            $("#WeekDay").val(expression[5]);
                            $("#EveryMonthInput").val(expression[4]);
                        } else {
                            expression = expression.match(/\d+/g);
                            $("#DayOfMOnthInput").val(expression[3]);
                            $("#MonthInput").val(expression[5]);
                            $("input:radio[name=MonthlyRadio][value=1]").prop("checked", true);
                        }
                        $("#MonthlyHours").val(expression[1]);
                        $("#MonthlyMinutes").val(expression[2]);


                        break
                    case "YEARLY":
                        $('#msCronTabs a[href="#Yearly"]').attr("aria-selected",true).parent().addClass("is-active");
                        $("#Yearly").addClass("is-active");
                        if (expression.indexOf('#') !== -1) {
                            $("input:radio[name=YearlyRadio][value=2]").prop("checked", true);
                            $("#DayWeekForYear").val(expression.substring(expression.indexOf('#'), expression.indexOf('#') - 3));
                            expression = expression.match(/\d+/g);
                            $("#DayOrderInYear").val(expression[4]);
                            $("#MonthsOfYear2").val(expression[3]);
                        } else {
                            expression = expression.match(/\d+/g);
                            $("#MonthsOfYear").val(expression[4]);
                            $("#YearInput").val(expression[3]);
                            $("input:radio[name=YearlyRadio][value=1]").prop("checked", true);
                        }
                        $("#YearlyHours").val(expression[2]);
                        $("#YearlyMinutes").val(expression[1]);

                        break
                }
            } else {
                alert("Invalid Cron Expression..!");
            }

        }
        function findSlash(str) {
            str.indexOf('/') === -1 ? false : true;
        }
        function findOneSlash(str) {
            str.indexOf('1/1') === -1 ? false : true;
        }


        return options;
    };
}(jQuery));