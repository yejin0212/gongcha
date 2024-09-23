let fixStart = $(".beverage").offset().top;
let fixEnd = $(".s1 .trigger").offset().top;

const fixBeverage = () => {
    const scr = $(window).scrollTop();
    
    console.log(scr, fixStart, fixEnd);

    if(scr > 0 && scr < fixEnd - fixStart) {
        $(".beverage").css({
            "position" : "fixed",
            "top" : fixStart,
            "bottom": "unset"
        });
        $(".beverage").removeClass("active");
        $(".Swiper1").removeClass("active");
    } else if(scr >= fixEnd - fixStart) {
        $(".beverage").addClass("active");
        $(".Swiper1").addClass("active");
    }
}

window.addEventListener("scroll", () => {
    fixBeverage();
});
window.addEventListener("resize", () => {
    fixStart = $(".beverage").offset().top;
    fixEnd = $(".s1 .trigger").offset().top;
})

fixBeverage();