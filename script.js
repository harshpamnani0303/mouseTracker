window.addEventListener("mousemove", function (details) {
    var rect = document.querySelector("#rect");


    var xval = gsap.utils.mapRange(0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
        details.clientX)

    var redColor = gsap.utils.mapRange(0,window.innerWidth,255,0,details.clientX)

    
    var yval = gsap.utils.mapRange(0,
        window.innerHeight,
        100 + (rect.getBoundingClientRect().height) / 2,
        window.innerHeight - (100 + rect.getBoundingClientRect().height) / 2,
        details.clientY)

var blueColor =gsap.utils.mapRange(0,window.innerHeight,255,0,details.clientY)

var greenColor = gsap.utils.mapRange(redColor,blueColor,255,0,details.clientY)
    gsap.to('#rect', {
        left: xval,
        top: yval,
        ease: Power4,
        backgroundColor: `rgb(${redColor},${greenColor},${blueColor})`
    });

})