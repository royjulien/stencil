// Product Tab - ES6 Version
console.log("Tabs Activated");
console.log("Lemur");
let tabContainers = document.querySelectorAll('.product-overview');
console.log(tabContainers);

/*
const clickTab = document.querySelectorAll('.tabNavigation li');
console.log(clickTab);
*/

let initHide = () => {
        for (let i = 1; i < tabContainers.length; i++) {
            tabContainers[i].style.display = "none";
        }
    }

let hideAllContainers = () => {
    for (let i = 0; i < tabContainers.length; i++) {
        tabContainers[i].style.display = "none";
        console.log(123);

        // Well there we go, you had errors NOOB
        // =D
    }
}
