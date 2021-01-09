console.log('client.js');

$(document).ready(function () {
    console.log('jQuery');

    clickListeners();
    getTasks();
}) // end doc ready

// set up all click listeners
function clickListeners(){
    console.log('in clickListeners');
}// end clickListeners

function getTasks(){
    console.log('in getTasks');

    // clear list
    $('#list').empty();

    // update DOM with list from db
    $.ajax({
        type: 'GET',
        url: '/todo-list'
    }).then(function (response) {
        response.forEach((item) => {
            $('#list').append(`
                <tr class="tableRows" data-id="${item.id}">
                    <td>${item.completed}</td>
                    <td>${item.task}</td>
                    <td><button class="deleteBtn">Delete</button></td>
                </tr>
            `);
        })
    });
} // end getTasks