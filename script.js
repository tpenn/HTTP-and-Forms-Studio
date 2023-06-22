const actions = {
    "google"	: "https://www.google.com/search",
    "ecosia"	: "https://www.ecosia.org/search",
    "duckDuckGo": "https://duckduckgo.com/",
    "bing"		: "https://www.bing.com/search"
};

let form;

function setSearchEngine() {
    engine = document.querySelector("input[name=searchEngine]:checked").value;
    console.log("setSearchEngine: " + engine);
    action = actions[engine];
    console.log("action: " + action);
    form.setAttribute("action", action);
}

function init() {
    form = document.getElementById("searchForm");
    form.addEventListener("submit", setSearchEngine);
}

window.addEventListener("load", init);
