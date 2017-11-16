$(function() {
    console.log( "ready!" );

    let correct = 0;
    let wrong = 0;

    $('.start-button').on('click', function() {
        var questionBox = document.getElementById("questions");
        questionBox.style.display = "block";
        // if (questionBox.style.display === "none") {
        //     questionBox.style.display = "block";
        // } else {
        //     questionBox.style.display = "none";
        // }
    })


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