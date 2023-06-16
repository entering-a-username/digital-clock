(function() {
    function calculateTime() {
        let date: Date = new Date();
        let dayNumber: number = date.getDay();
        let hour: number = date.getHours();
        let minute: number = date.getMinutes();
        let ampm: string = hour >= 12 ? 'PM' : 'AM';
        let dayNames: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

        hour = hour % 12;
        hour = hour ? hour : '12';
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;

        document.getElementById("dayID")?.innerHTML = dayNames[dayNumber];
        document.getElementById("hourID")?.innerHTML = hour;
        document.getElementById("minuteID")?.innerHTML = minute;
        document.getElementById("ampmID")?.innerHTML = ampm;


        setTimeout(calculateTime, 200);

    }

    window.addEventListener("load", calculateTime);


})();