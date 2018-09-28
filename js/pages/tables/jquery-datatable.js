/**
 *  For more examples check website
 *
 *  SERVER SIDE/AJAX => https://www.datatables.net/examples/server_side/simple.html
 *
 *  Search links => https://www.google.com/search?q=hhow+to+manage+thousands+of+records+in+datatable&ie=utf-8&oe=utf-8&client=firefox-b-ab
 */

$(function () {
    $('.js-basic-example').DataTable({
        responsive: true
    });

    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });

    $('#ajax-example').DataTable({
        processing: true,
        serverSide: true,
        ajax: "ajax.json"
    });
});