$(function() {
    console.log( "ready!" );

    let correct = 0;
    let wrong = 0;
    let intervalId;
    var number = 60;

    // ============  Function to count down from 60 ======================================
    function decrement() {
        
              number--;
        
              $("#show-number").html("<h2> Time: " + number + "</h2>");
        
              if (number === 0) {
        
                stop();
        
                alert("Time Up!");
              }
            }

    function startClock() { 
        intervalId = setInterval(decrement, 1000);
     }

    //  =================   Click start button to show questions ==================================
    $('.start-button').on('click', function() {
        var questionBox = document.getElementById("questions");
        questionBox.style.display = "block";
        startClock();
        console.log(number);

    })

    // ===================  Check each input for each question to see if value is correct or incorrect =====================
    $('#one input').on('change', function() {
        // alert($('input[name=one]:checked', '#one').val());
        if ($('input[name=one]:checked', '#one').val() === "correct") {
            correct++;
            console.log(correct);
            console.log(wrong);
        } else {
            wrong++;
            console.log(correct);
            console.log(wrong);
        }
     });














});