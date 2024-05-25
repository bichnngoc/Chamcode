$(document).ready(function () {
  $('#folderLink').on('click', function (e) {
    e.preventDefault();
    $('.content__ChuDe-show').toggle();
  });

  $('#folderLink').on('dblclick', function (e) {
    e.preventDefault();
    $('.content__ChuDe-show').hide();
  });
});
