// Highr order function that takes a function as an argument
function learnHTML(fn){
    console.log("Learning HTML");
    // fn();
    setTimeout(() => {
        console.log("Completed HTML");
        fn();
    }, 2000);
    
    
}
function learnCSS(){
    console.log("Learning CSS");
    console.log("Completed CSS");
}
// learnHTML();
// learnCSS();
learnHTML(learnCSS);
// learnCSS();