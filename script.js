(function () {
    window.addEventListener("load", calculateTime);


    function calculateTime() {
        const date = new Date();
        const dayNumber = date.getDay();
        let hour = date.getHours();
        let minute = date.getMinutes();
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        
        // hour logic
        hour = hour % 12;
        hour = hour ? hour : '12';
        hour = hour < 10 ? '0' + hour : hour;
        
        // minute logic
        minute = minute < 10 ? '0' + minute : minute;

        document.getElementById("dayID").innerHTML = dayNames[dayNumber];
        document.getElementById("hourID").innerHTML = hour;
        document.getElementById("minuteID").innerHTML = minute;
        document.getElementById("ampmID").innerHTML = ampm;
        
        setTimeout(calculateTime, 200);
    }
    
})();
