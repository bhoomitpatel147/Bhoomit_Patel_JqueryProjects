$(function () {


    getJsonObject();
    // $('h1').append(`<p>Type something in the input field to search the table for first names, last names or emails:</p>  
    // <input id="search" type="text" placeholder="Search..">
    // <br><br>`);

    // $("#search").on("keyup", function () {
    //     let value = $(this).val().toLowerCase();
    //     $("tr#data td:first-child").filter(function () {
    //         return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

    //     }).siblings().css("background-color", "green");
    // });

    
    $('#fuck').on('click', function () {
        console.log('fuckfuck');
    }); 
   
    $('table').each(function () {
        var $table = $(this); // This table
        console.log($table);
        var $tbody = $table.find('tbody'); // Table body
        var $controls = $table.find('th'); // Table headers
        var rows = $tbody.find('tr').toArray(); // Array of rows
        $controls.on('click', function () { // Event handler
            console.log("fuck");
            var $header = $(this); // Get header
            var order = $header.data('sortbythis'); // either name or compareNumbersAscending
            var column; // Used later
            if ($header.is('.ascending') || $header.is('.descending')) { // Toggle to other class
                $header.toggleClass('ascending descending');
                // Reverse the array
                $tbody.append(rows.reverse());
            } else { //not sorted yet, we need to sort
                $header.addClass('ascending'); // Add class to header
                // Remove asc or desc from all other headers
                $header.siblings().removeClass('ascending descending'); // If compare object has method of that name
                console.log("check if has property");
                if (compare.hasOwnProperty(order)) {
                    console.log("has property");
                    column = $controls.index(this); // Column's index no
                    rows.sort(function (a, b) { // Call sort() on rows
                        a = $(a).find('td').eq(column).text();// Text of column row a
                        b = $(b).find('td').eq(column).text();// Text of column row b
                        return compare[order](a, b); // Call compare method
                    });
                    $tbody.append(rows);
                }
            }
        });
    });



});

function getJsonObject() {
    $.getJSON("character.json", function (data) {
        $('body').append(`
        <section id="content">
        <h2 id="fuck">Mr.Robot Series Team</h2>
        <div id="team">
        <table id="characters" class="sorting">
        <thead>
        <tr id="title">
        <th data-sortbythis="firstName" id="fName">First Name</th>
        <th><a href="#" id="lName">Last Name</a></th>
        <th><a href="#" id="rName">Real Name</a></th>
        <th><a href="#" id="birthPlace">Birth Place</a></th>
        <th><a href="#" id="partner">Life Partner</a></th>
        <th><a href="#" id="dob">Date Of Birth</a></th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
        </div>
    </section>
    `);
        $.each(data.characters, function (key, val) {
            $('tbody').append(`  <tr id="data">
                                <td class="firstNname">${val.firstName}</td>
                                <td class="lastNname">${val.lastName}</td>
                                <td class="realNname">${val.realName}</td>
                                <td class="birthPlace">${val.birthPlace}</td>
                                <td class="partner">${val.partner}</td>
                                <td class="DOB">${val.DOB}</td>
                                </tr>
                                
                                `);
        });
    });
}

