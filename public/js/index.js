$(function () {
  function sumSection() {
    return $(".container").height();
  }
  function setDimensionBar() {
    $(".bar").css({
      "height": $(window).height() / sumSection() * 100 + "%"
    });
  }
  function setSection() {
    $.each($("section"), function (i, element) {
      $(element).css({
        "min-height": $(window).height()
      });
    });
  }

  function addBehaviours() {
    var sections = $("section");
    $.each($(".node"), function (i, element) {
      $(element).on("click", function (e) {
        e.preventDefault();
        var scroll = $(sections[i]).offset().top;
        $('html, body').animate({
          scrollTop: scroll
        }, 500);
      });
    });
  }

  function arrangeNodes() {
    $(".node").remove();
    $.each($("section"), function (i, element) {
      var name = $(element).data("name");
      var node = $("<li class='node'><span>" + name + "</span></li>");
      $(".timeline").append(node);

      $(node).css({
        "top": $(".timeline").height() / $(document).height() * $(element).offset().top
      });
    });
    addBehaviours();
  }

  $(window).on("scroll", function () {
    var top = window.scrollY / sumSection() * 100;
    $(".bar").css({
      "top": top + "%"
    });
  });

  $(window).on("resize", function () {
    setSection();
    arrangeNodes();
    setDimensionBar();
  });

  setTimeout(function () {
    setSection();
    arrangeNodes();
    setDimensionBar();
  }, 200);
});