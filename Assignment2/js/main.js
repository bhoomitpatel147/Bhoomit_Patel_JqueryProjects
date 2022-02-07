// WEB303 Assignment 2
// Bhoomit Kiritbhai Patel
// 0780326

$(function () {
    let xhr = new XMLHttpRequest;

    let content = document.getElementById('content');


    $('#prospect').click(function () {
        if (content.innerHTML) {
            $('#content').hide().empty();
        }
        xhr.open('GET', 'prospect.html', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                content.innerHTML = xhr.responseText;
                $('#content').slideDown(2000);
            }
        }
        xhr.send("search=arduino");

    });

    $('#convert').click(function () {
        if (content.innerHTML) {
            $('#content').hide().empty();
        }
        xhr.open('GET', 'convert.html', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                content.innerHTML = xhr.responseText;
                $('#content').slideDown(2000).css("font- size", '2em');
            }
        }
        xhr.send("search=arduino");

    });

    $('#retain').click(function () {
        if (content.innerHTML) {
            $('#content').hide().empty();
        }
        xhr.open('GET', 'retain.html', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                content.innerHTML = xhr.responseText;
                $('#content').slideDown(2000);
            }
        }
        xhr.send("search=arduino");

    });




});




