// WEB303 Assignment 2


$(function () {
    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'prospect.html', true);
    //xhr.open('GET', 'convert.html', true);
    //xhr.open('GET', 'retain.html', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            //let prospect = document.getElementById('prospect');
            //let convert = document.getElementById('convert');
            //let retain = document.getElementById('retain');

            $('#prospect').click(function () {
                let content = document.getElementById('content');
                alert("Done");
                content.innerHTML = xhr.responseText;
            });

        }
    };
    xhr.send("search=arduino");

});














// $('#prospect').click(function () {
    //     $('#content').load('prospect.html');
    // });