$(document).ready(function () {

    /********** Part 1: Form 1 validation  **********/
    //Hide the error message to start.
    $('#error').hide();

    //Form 1 submission
    $('#form1').submit(function (e) {
        //prevent default
        e.preventDefault();

        //Get the form fields
        firstName1 = $('#firstName1').val();
        lastName1 = $('#lastName1').val();

        //Validate no a
        if (firstName1.indexOf('a') > -1 || lastName1.indexOf('a') > -1) {
            console.log('You can\'t put an a in here');
        }
    });

    //Prevent numbers from being entered and show error message if a is entered
    function preventNumbersAndA(e) {
        var input = (e.key);
        //Prevent numbers
        if (isNaN(input) === false) {
            e.preventDefault();
        } else if (input.indexOf('a') > -1) {
            $('#error').show();
            console.log('NO a');
        };
    };

    $(document).ready(function () {
        $('#form1').keypress(function (e) {
            preventNumbersAndA(e);
        });
    });

    /***********Part 2: Date object ************/

    const jan14 = new Date('01/14/2018');
    const jan14String = jan14.toString();
    document.getElementById('date-block-output').innerHTML = jan14String;


    /************ Part 3: DOM traverse *************/
    //Pretty sure this is not the best solution.
    $('#form2').submit(function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).parent().html('<h3>Thanks for submitting the form!</h3>');
    });

    /************* Part 4: AJAX  **************/

    $.get('http://jsonplaceholder.typicode.com/post/1/comments', function (resp) {
        let jsonoutput = JSON.stringify(resp);
        console.log(jsonoutput);

        $('#json-block-output').html(toHTML(resp));
        
        function toHTML(data) {
            html = '';
            for (var i = 0; i < data.length; i++) {
                let post = data[i];
                let postHTML = `
                    <h3>${post.name}</h3>
                    <p>${post.body}</p>
                    <hr>
                `
                html += postHTML;
            }
            return html;
        }
    });

});