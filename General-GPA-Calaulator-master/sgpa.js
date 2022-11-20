function grade() {
    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();
    var point = new Array();

    // grades and points
    gr = ["S", "A", "B", "C", "D", "E", "F", "NA"]
    pt = [10,9,8,7,6,5,0,0]

    // user input
    ingr =
        [document.getElementById("myInput1").value, document.getElementById("myInput2").value,
        document.getElementById("myInput3").value, document.getElementById("myInput4").value,
        document.getElementById("myInput5").value, document.getElementById("myInput6").value,
        document.getElementById("myInput7").value, document.getElementById("myInput8").value,
        document.getElementById("myInput9").value]
    //user credit
    incr =
        [document.getElementById("myCredit1").value, document.getElementById("myCredit2").value,
        document.getElementById("myCredit3").value, document.getElementById("myCredit4").value,
        document.getElementById("myCredit5").value, document.getElementById("myCredit6").value,
        document.getElementById("myCredit7").value, document.getElementById("myCredit8").value,
        document.getElementById("myCredit9").value]

    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            break;


        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }
            else if (ingr[x] == gr[9] || ingr[x] == gr[10]) {
                alert("Error- For Grade F/NA GPA= Incomplete")
                var msg = "Incomplete"
                document.getElementById("demo").innerHTML = msg;
                return 0;

            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo").innerHTML = gpa.toFixed(2);
}