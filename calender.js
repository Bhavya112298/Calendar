//____________________________________________________________________________________________________________
//______________________get days 30 and 31 and 28_____________________________________________________
var days = { 0: 31, 1: 28, 2: 31, 3: 30, 4: 31, 5: 30, 6: 31, 7: 31, 8: 30, 9: 31, 10: 30, 11: 31 };
var today_enc = "no";
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month_colours = {
    0: "rgb(11, 216, 114)",
    1: "rgb(183, 183, 224)",
    2: "rgb(204, 136, 136)",
    3: "rgb(243, 204, 131)",
    4: "rgb(214, 121, 210)",
    5: "rgb(247, 248, 153)",
    6: "rgb(11, 216, 114)",
    7: "rgb(183, 183, 224)",
    8: "rgb(204, 136, 136)",
    9: "rgb(243, 204, 131)",
    10: "rgb(214, 121, 210)",
    11: "rgb(247, 248, 153)"
}

var m = new Date().getMonth();
var y = new Date().getFullYear();
var d = new Date().getDate();
var date_str = new Date().toDateString();
var dy = new Date().getDay();


function isLeap(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

//_________________________appending dates in html_____________________________________
function appendDates(mon, yea) {
    var count = 0;
    var s = "";

    var zz = days[mon - 1] - new Date(yea, mon, 1).getDay() + 1;
    //alert(zz);
    for (var i = 0; i < new Date(yea, mon, 1).getDay(); i++) {

        s += "<div style=\"color:Darkgrey\">" + zz + "</div>";
        count = count + 1;
        zz = zz + 1;



    }

    for (var i = 1; i <= days[mon]; i++) {


        s += "<div>" + i + "</div>";
        count = count + 1;



    }

    if (isLeap(yea) && m == 1) {
        s += "<div>" + 29 + "</div>";
        count = count + 1;

    }
    //alert(mon + " " + count);
    var compare = 35;
    if (count > 35)
        compare = 42;
    for (var i = 1; i <= compare - count; i++) {
        s += "<div style=\"color:Darkgrey\">" + i + "</div>";
    }




    document.getElementById("boo").innerHTML = s;
    var arr = document.getElementById("boo").children;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].innerHTML == new Date().getDate() && mon == new Date().getMonth() && yea == new Date().getFullYear()) {
            arr[i].style.backgroundColor = month_colours[mon];
        }

    }


}




//___________________________________________________________________________

function setTitle(mon, yea) {

    document.querySelector("h1").innerHTML = months[mon];
    document.querySelector("p").innerHTML = yea;




}


//______________________Prev and Next_____________________________________________________
document.getElementById("prev").addEventListener("click", function() {

    if (m == 0) {
        m = 12;
        y = y - 1;

    }
    m = m - 1;
    document.getElementById("colors").style.backgroundColor = month_colours[m];
    appendDates(m, y);
    setTitle(m, y);
    if (m == new Date().getMonth() && y == new Date().getFullYear())
        document.querySelector("p").innerHTML = new Date().toDateString();

})

document.getElementById("next").addEventListener("click", function() {

    if (m == 11) {
        m = -1;
        y = y + 1;
    }
    m = m + 1;
    document.getElementById("colors").style.backgroundColor = month_colours[m];
    appendDates(m, y);
    setTitle(m, y);
    if (m == new Date().getMonth() && y == new Date().getFullYear())
        document.querySelector("p").innerHTML = new Date().toDateString();
})





//________________--current--_______________________________
function getToday() {

    appendDates(new Date().getMonth(), new Date().getFullYear());

    setTitle(new Date().getMonth());

    document.querySelector("p").innerHTML = new Date().toDateString();


    document.getElementById("colors").style.backgroundColor = month_colours[new Date().getMonth()];
}


getToday();
//____________________________________________________________