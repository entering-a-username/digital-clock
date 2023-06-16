(function () {
    function calculateTime() {
        var _a, _b, _c, _d;
        var date = new Date();
        var dayNumber = date.getDay();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var ampm = hour >= 12 ? 'PM' : 'AM';
        var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        hour = hour % 12;
        hour = hour ? hour : '12';
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        (_a = document.getElementById("dayID")) === null || _a === void 0 ? void 0 : _a.innerHTML = dayNames[dayNumber];
        (_b = document.getElementById("hourID")) === null || _b === void 0 ? void 0 : _b.innerHTML = hour;
        (_c = document.getElementById("minuteID")) === null || _c === void 0 ? void 0 : _c.innerHTML = minute;
        (_d = document.getElementById("ampmID")) === null || _d === void 0 ? void 0 : _d.innerHTML = ampm;
        setTimeout(calculateTime, 200);
    }
    window.addEventListener("load", calculateTime);
})();
