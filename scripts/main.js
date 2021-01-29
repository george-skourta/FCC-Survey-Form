$(".dropdownTrigger").on('click', function(event) {
    var parent, trigger, menu;
   
    parent = $(this).closest("div.sf-dropdown");
    trigger = $(this);
    menu = parent.find("ul.sf-dropdown-menu");

    menu.fadeIn('fast');
    event.stopPropagation();
});

$(document).on('click', function () {
    $(".sf-dropdown-menu").fadeOut('fast');
});

$(".dropdownItem").on('click', function() {
    var value = $(this).text();
    $(".dropdownTrigger").attr("value", value);
    $(".dropdownItem").removeClass("active");
    $(this).addClass("active");
})