// Function 1: launchBrowser using if-else
function launchBrowser(browserName) {

    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching other browser");
    }
}
// Function 2: runTests using switch
function runTests(testType) {
    
    switch (testType) {
        case "smoke":
            console.log("Smoke test");
            break;

        case "sanity":
            console.log("Sanity test");
            break;

        case "regression":
            console.log("Regression test");
            break;

        default:
            console.log("default Smoke test");
    }
}
// Calling the functions
launchBrowser("chrome");
runTests("regression");