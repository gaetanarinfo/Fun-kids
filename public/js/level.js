var user_id = sessionStorage.getItem("user_id");

$.ajax({
  url: 'https://funkids.site/ajax/ajax-showLevel.php?user_id=' + user_id,
  success: function (data) {
    $('#level').html(data)
  }
})
