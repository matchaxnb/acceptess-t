/**
Public Domain
by Chloé Desoutter <chloe.desoutter@gmail.com>
for Acceptess-T
**/
build_quizz = function(questions, quizz_title, quizz_id) {
    var q_c = 0;
    var r = $('<div />', {class: 'quizz', text: quizz_title});
    questions.forEach(function(e) {
        q_c += 1
        var a_c = 0;
        var d = $('<div />', {class: 'question'})
        $('<h2 />', {text: e.title}).appendTo(d)
        var qs = $('<ol>');
        e.answers.forEach(function(a) {
            a_c += 1;
            aa = $('<li />');
            correct_one = (e.right == a_c - 1);
            $('<input />', {
                type: "radio",
                name: quizz_id + '_' + q_c,
                id: quizz_id + '_' + q_c + '_' + a_c,
                class: correct_one ? 'right_answer':'wrong_answer',
                value: a_c})
                .appendTo(aa);
            $('<label />', {for: quizz_id + '_' + q_c + '_' + a_c, text: a})
                .appendTo(aa);
            aa.appendTo(qs);
        });
        qs.appendTo(d);
    d.appendTo(r)
    });
    console.log(r);
    return r;
}

validate_answers = function() {
    $('.reset_quizz').click(function() {
        $('div.question').removeClass('wrong_answer');
        $('div.question').removeClass('right_answer');
    });
    $('input:radio').change(function() {
        if ($(this).hasClass('right_answer')) {
            $(this).closest('div.question').removeClass('wrong_answer');
            $(this).closest('div.question').addClass('right_answer');
        }
        else if ($(this).hasClass('wrong_answer')) {
            $(this).closest('div.question').addClass('wrong_answer');
            $(this).closest('div.question').removeClass('right_answer');
        }
    })
}
