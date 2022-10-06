"use strict"
!(function () {})()

const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
//
var btn = $("#button")

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show")
  } else {
    btn.removeClass("show")
  }
})

$("#progressBar").on("click", function (e) {
  e.preventDefault()
  $("html, body").animate({ scrollTop: 0 }, "300")
})

// e.init();
// $("#header").headroom();
// headroom.init();
AOS.init()

// O = function () {
//   var m = $('#arrow-top-c');
//   var e = m.parent().width(),
//     t = e / 2,
//     n = 3;
//   m.parent().attr("viewBox", "0 0 ".concat(e, " ").concat(e)), m.attr("stroke-width", n), m.attr("r", t - (n - 1)), m.attr("cx", t), m.attr("cy", t), g = 2 * t * Math.PI, m[0].style.strokeDasharray = "".concat(g, " ").concat(g), m[0].style.strokeDashoffset = g
// }

// O();

$("input:checkbox").on("click", function () {
  var $box = $(this)
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']"
    $(group).prop("checked", false)
    $box.prop("checked", true)
  } else {
    $box.prop("checked", false)
  }
})

//***ISOTOPE***
// init Isotope
setTimeout(function () {
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "masonry",
    masonry: {
      fitWidth: true, // When enabled, you can center the container with CSS.
    },
  })
  // filter items on button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter")
    $grid.isotope({ filter: filterValue })
  })
}, 200)

// change is-checked class on buttons
$(".btn-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup)
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked")
    $(this).addClass("is-checked")
  })
})

// eren
const filterItemTitle = document.querySelectorAll(".filter-item-title")

if (filterItemTitle.length) {
  filterItemTitle.forEach((obj) => {
    const filterItem = obj.closest(".filter-item")

    if (!obj.nextElementSibling) obj.classList.add("no-after")
    else {
      obj.addEventListener("click", (e) => {
        e.preventDefault()

        if (filterItem.classList.contains("active")) {
          filterItem.classList.remove("active")
        } else {
          filterItem.classList.add("active")
        }
      })
    }
  })
}

const horizontalFilterItem = document.querySelectorAll(
  ".horizontal-filter-item"
)

horizontalFilterItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) item.classList.remove("active")
    else {
      horizontalFilterItem.forEach((itm) => {
        itm.classList.remove("active")
      })
      item.classList.add("active")
    }
  })
})

const $carouselObject = $(".owl-landing")

$carouselObject.owlCarousel({
  loop: true,
  dots: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 4000,
  fluidSpeed: 4000,
  autoplaySpeed: 4000,
  navSpeed: 4000,
  dotsSpeed: 4000,
  mouseDrag: true,
  touchDrag: false,
  freeDrag: false,
  animateOut: "fadeOut",
})
