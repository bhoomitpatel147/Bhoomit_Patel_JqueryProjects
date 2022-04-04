$(function () {


    getJsonObject();
    $('h1').append(`<p>Type something in the input field to search the table for first names, last names or emails:</p>  
    <input id="search" type="text" placeholder="Search..">
    <br><br>`);

    $("#search").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("tr#data td:first-child").filter(function () {
            return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        }).siblings().css("background-color", "green");
    });

});

function getJsonObject() {
    $.getJSON("character.json", function (data) {
        $('h1').append(`
        <section id="content">
        <h2>Mr.Robot Series Team</h2>
        <div id="team">
        <table id="characters">
        <tr id="title">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Real Name</th>
        <th>Birth Place</th>
        <th>Life Partner</th>
        </tr>
        </table>
        </div>
    </section>
    `);
        $.each(data.characters, function (key, val) {
            $('table').append(`  <tr id="data">
                                <td class="firstNname">${val.firstName}</td>
                                <td class="lastNname">${val.lastName}</td>
                                <td class="realNname">${val.realName}</td>
                                <td class="birthPlace">${val.birthPlace}</td>
                                <td class="partner">${val.partner}</td>
                                </tr>
                                
                                `);
        });
    });
}

