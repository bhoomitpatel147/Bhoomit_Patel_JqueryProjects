function init() {


  //  getJsonObject();
    // $('h1').append(`<p>Type something in the input field to search the table for first names, last names or emails:</p>  
    // <input id="search" type="text" placeholder="Search..">
    // <br><br>`);

    // $("#search").on("keyup", function () {
    //     let value = $(this).val().toLowerCase();
    //     $("tr#data td:first-child").filter(function () {
    //         return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

    //     }).siblings().css("background-color", "green");
    // });

       getJsonObject();
    var compare = {
        name: function (a, b) {
            console.log("processing the words", b, ", ", a);
            if (a < b) {
                return -1;
            }
            else if (b < a) {
                return 1
            }
            else //they're equal
            {
                return 0;
            }
        },  
        compareNumbersAscending: function (a, b) {
            // b is the first value being compared, a is the second
            console.log("processing the numbers", b, ", ", a);
            return parseInt(a) - parseInt(b);
        },
        compareNumbersDescending: function (a, b) {
            // b is the first value being compared, a is the second
            console.log("processing the numbers", b, ", ", a);
            return b - a;
        },
        compareNumbersRandom: function (a, b) {
            return 0.5 - Math.random(); // Math.random() returns a value between 0 and 1
        },
        compareDates: function (a, b) {
            var dateA = new Date(a);
            var dateB = new Date(b);
            return dateA - dateB;
        }
    };
    $(document).on('click','button', function () {
    $('button').hide();
    $('table').each(function () {
        var $table = $(this); // This table
        console.log($table);
        var $tbody = $table.find('tbody'); // Table body
        var $controls = $table.find('th'); // Table headers
        var rows = $tbody.find('tr').toArray(); // Array of rows
        $controls.on('click', function () { // Event handler
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
                // $header.siblings().removeAttr('class');
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


}$(init);


function getJsonObject() {
    $.getJSON("character.json", function (data) {
       $('body').append(`    <section id="content">
       <h2 id="check">Mr.Robot Series Team</h2>
       <button style="background-color: antiquewhite; padding: 20px; cursor: pointer;font-size: 1.5em;font-weight: bolder;">Click me first for sorting</button></br></br>
       <div id="team">
       <table id="characters" class="sorting">
       <thead>
       <tr>
       <th data-sortbythis="name"><a href="#" id="fName"> First Name</a></th>
       <th data-sortbythis="name"><a href="#" id="lName">Last Name</a></th>
       <th data-sortbythis="name"><a href="#" id="rName">Real Name</a></th>
       <th data-sortbythis="name"><a href="#" id="birthPlace">Birth Place</a></th>
       <th data-sortbythis="name"><a href="#" id="partner">Life Partner</a></th>
       <th data-sortbythis="compareDates"><a href="#" id="dob">Date Of Birth</a></th>
       </tr>
       </thead>
       <tbody>
       </tbody>
       </table>
       </div>
   </section>`);
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

