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
        
                // alert("Time Up!");
                calculate();
              }
            }

    function startClock() { 
        intervalId = setInterval(decrement, 1000);
     }

     function stop() {
              clearInterval(intervalId);
            }
        

    //  =================   Click start button to show questions ==================================
    $('.start-button').on('click', function() {
        var questionBox = document.getElementById("questions");
        questionBox.style.display = "block";
        startClock();
        console.log(number);

    })

    // ===========   Run calculate when submit button is clicked ==========================
    $("#submit").on('click', calculate);

    // ================= Function to calculate and show the number correct and wrong from selected answers =============
    function calculate() { 
        if ($('input[name=one]:checked', '#one').val() === "correct") {
            correct++;
            console.log(correct);
        } else if ($('input[name=one]:checked', '#one').val() === "wrong") {
            wrong++;
            console.log(wrong);
        }

        if ($('input[name=two]:checked', '#two').val() === "correct") {
            correct++;
            console.log(correct);
        } else if ($('input[name=two]:checked', '#two').val() === "wrong") {
            wrong++;
            console.log(wrong);
        }

        if ($('input[type=radio]:checked', '#three').val() === "correct") {
            correct++;
            console.log(correct);
        } else if ($('input[type=radio]:checked', '#three').val() === "wrong") {
            wrong++;
            console.log(wrong);
        }

        if ($('input[type=radio]:checked', '#four').val() === "correct") {
            correct++;
            console.log(correct);
        } else if ($('input[type=radio]:checked', '#four').val() === "wrong") {
            wrong++;
            console.log(wrong);
        }

        if ($('input[type=radio]:checked', '#five').val() === "correct") {
            correct++;
            console.log(correct);
        } else if ($('input[type=radio]:checked', '#five').val() === "wrong") {
            wrong++;
            console.log(wrong);
        }

        if ($('input[type=radio]:checked', '#six').val() === "correct") {
            correct++;
            console.log(correct);
        } else if ($('input[type=radio]:checked', '#six').val() === "wrong") {
            wrong++;
            console.log(wrong);
        }

        if ($('input[type=radio]:checked', '#seven').val() === "correct") {
            correct++;
            console.log(correct);
        } else if ($('input[type=radio]:checked', '#seven').val() === "wrong") {
            wrong++;
            console.log(wrong);
        }

        if ($('input[type=radio]:checked', '#eight').val() === "correct") {
            correct++;
            console.log(correct);
        } else if ($('input[type=radio]:checked', '#eight').val() === "wrong") {
            wrong++;
            console.log(wrong);
        }

        
        stop();

        $('#questions').empty();

        $('#correct-answers').append('Correct Answers:' + correct + '<br>');
        $('#correct-answers').append('Wrong Answers:' + wrong);

        console.log(correct, wrong);
     };


      











});