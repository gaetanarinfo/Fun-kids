function createTable() {

    var $tbl = $('.tbl'),
        id = parseInt($('#level_difficulte').val()),
        rowClass = parseInt($('#level_row').val()),
        row = parseInt($('#level_row').val());

    for (var r = 0; r < row; r++) {

        var $row = $('<tr>')

        $row.attr('class', rowClass--)

        for (var c = 0; c < row; c++) {

            var $column = $('<td>')

            $column.css({
                'width': '85px',
                'height': '85px'
            })

            $column.attr('id', 'case_' + id--)

            $column.attr('data-case', id + 1)

            // Level choice
            $column.attr('data-case') % 2 == 0 ? $column.css('backgroundColor', 'rgba(255, 255, 255, 0.75)') : $column.css('backgroundColor', 'rgba(0, 0, 0, 0.28)');
            $column.attr('data-case') % 2 == 0 ? $column.css('color', '#131515') : '';

            $row.each(function () {
                $(this).attr('class') % 2 === 0 ? $row.append($column) : $row.prepend($column)
            })

            $column.html(id + 1).addClass('cell');

        }

        $tbl.append($row)
    }
}

createTable()

var arrayTable = new Array();

$('#addItemForm').submit(function (e) {

    e.preventDefault();

    var caseSelected = $('#caseSelected').val(),
        caseDSelected = $('#caseDSelected').val(),
        itemSelected = $('#itemSelected').val(),
        topSelected = $('#topSelected').val(),
        leftSelected = $('#leftSelected').val(),
        rotate = $('#rotateSelected').val(),
        position = $('#positionSelected').val();

    item = new Object();
    item.name = itemSelected;
    item.cases = caseSelected;
    item.piege = caseDSelected;
    item.top = topSelected;
    item.left = leftSelected;
    item.rotate = rotate;
    item.position = position;

    arrayTable.push(item);

    $('#case_' + caseSelected).attr('data-case', caseSelected);
    $('#case_' + caseSelected).append('<div data-case="' + caseDSelected + '" data-piege="' + itemSelected + '" class="' + itemSelected + '"></div>');

    $.ajax({
        url: 'ajax/ajax-addItems.php',
        type: 'POST',
        data: {
            array: arrayTable
        },
        success: function (data) {

            $('#visualiserBtn').removeClass('d-none');

        }
    })

})

$('#addJsonForm').submit(function (e) {

    e.preventDefault();

    var urlJson = $('#fileJson').val(),
        button = $('#btnJson');

    $.getJSON(urlJson, function (data) {

        jQuery.each(data, function (key) {

            var piege = parseInt(data[key].piege);
            var name = data[key].name;
            var cases = parseInt(data[key].cases);
            var width = parseInt(data[key].width);
            var height = parseInt(data[key].height);
            var top = parseInt(data[key].top);
            var left = parseInt(data[key].left);
            var rotate = parseInt(data[key].rotate);
            var position = data[key].position;

            $('#case_' + cases).append('<div data-case="' + piege + '" data-piege="' + name + '" class="' + name + '"></div>');

            item = new Object();
            item.name = name;
            item.cases = cases;
            item.piege = piege;
            item.top = top;
            item.left = left;
            item.rotate = rotate;
            item.position = position;
        
            arrayTable.push(item);

        });

        button.addClass('disabled');

    }).fail(function (error) {
        console.log(error);
    });

});

$(document).on('change', '#selectGrid', function (e) {

    var value = $(this).val();
    var rows = $(this).find(':selected').data('rows');

    var $tbl = $('.tbl'),
        id = parseInt(value),
        rowClass = parseInt(rows),
        row = parseInt(rows);

    $tbl.html('');

    for (var r = 0; r < row; r++) {

        var $row = $('<tr>')

        $row.attr('class', rowClass--)

        for (var c = 0; c < row; c++) {

            var $column = $('<td>')

            $column.css({
                'width': '85px',
                'height': '85px'
            })

            $column.attr('id', 'case_' + id--)

            $column.attr('data-case', id + 1)

            // Level choice
            $column.attr('data-case') % 2 == 0 ? $column.css('backgroundColor', 'rgba(255, 255, 255, 0.75)') : $column.css('backgroundColor', 'rgba(0, 0, 0, 0.28)');
            $column.attr('data-case') % 2 == 0 ? $column.css('color', '#131515') : '';

            $row.each(function () {
                $(this).attr('class') % 2 === 0 ? $row.append($column) : $row.prepend($column)
            })

            $column.html(id + 1).addClass('cell');

        }

        $tbl.append($row)
    }

});

$('#addLevelForm').submit(function (e) {

    e.preventDefault();

    var levelAdd = $('#levelAdd').val(),
        difficulteAdd = $('#difficulteAdd').val(),
        selectAddGrid = $('#selectAddGrid').val(),
        selectAddRow = $('#selectAddGrid').find(':selected').data('rows');

    $.ajax({
        url: 'ajax/ajax-addLevel.php',
        type: 'POST',
        data: {
            level: levelAdd,
            difficulte: difficulteAdd,
            grid: selectAddGrid,
            row: selectAddRow
        },
        success: function (data) {}
    })

});