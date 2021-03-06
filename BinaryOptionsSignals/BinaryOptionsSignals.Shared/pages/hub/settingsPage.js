﻿(function () {
    "use strict";

    var ui = WinJS.UI;

    ui.Pages.define("/pages/settings.html", {

        processed: function (element) {
            return WinJS.Resources.processAll(element);
        },

        // Эта функция вызывается для инициализации страницы.
        init: function (element, options) {
            // this.itemInvoked = ui.eventHandler(this._itemInvoked.bind(this));
        },

        // Эта функция вызывается каждый раз, когда пользователь переходит на данную страницу.
        ready: function (element, options) {
            document.getElementById("cmdSettingsSave").addEventListener("click", cmdSettingsSave, false);
            document.getElementById("languageSelector").value = WinJS.Application.getCurrentLanguage();
            document.getElementById("useLocalTimeCheckbox").checked = WinJS.Application.getUseLocalTime();
        },

        unload: function () {
        },

        // Эта функция обновляет макет страницы в ответ на изменения макета.
        updateLayout: function (element) {
            /// <param name="element" domElement="true" />
            //TODO: ответ на изменения макета.
        },

    });

    function cmdSettingsSave() {
        var language = document.getElementById("languageSelector").value;
        var useLocalTime = document.getElementById("useLocalTimeCheckbox").checked;
        WinJS.Application.setCurrentLanguage(language);
        WinJS.Application.setUseLocalTime(useLocalTime);
        WinJS.Navigation.navigate("/pages/hub/hub.html", {refresh: true});
    }
})();