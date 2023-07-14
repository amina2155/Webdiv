const wdComponentCode = new Map([
    //wd-component-containers
    ["division", `<div class="wd-component wd-div" style="width: 5rem; height: 3rem;background-color:transparent; border: 0.09rem solid #ccc; border-radius:0rem;"></div>`],
    ["form", `<form class="wd-component wd-form" action="" style="width: 5rem; height: 3rem; border: 0.09rem solid #ccc; background-color:#fff;"></form>`],
    ["header", `<header class="wd-component wd-header" style="width: 5rem; height: 5rem; border: 0.09rem solid #ccc; text-align: center;"></header>`],
    ["footer", `<footer class="wd-component wd-footer" style="width: 5rem; height: 5rem; border: 0.09rem solid #ccc; text-align: center;"></footer>`],
    ["aside", `<aside class="wd-component wd-aside" style="width: 5rem; height: 5rem; border: 0.09rem solid #ccc;"></aside>`],
    ["article", `<article class="wd-component wd-article" style="width: 5rem; height: 5rem;background-color:transparent;border: 0.09rem solid #ccc; border-radius:0rem;"></article>`],
    ["section", `<section class="wd-component wd-section" style="width: 5rem; height: 5rem; background-color:transparent;border: 0.09rem solid #ccc; border-radius:0rem;"></section>`],
    ["navigation", `<nav class="wd-component wd-nav" style="width: 5rem; height: 5rem; background-color:#fff; border: 0.09rem solid #000; border-radius:0rem;"></nav>`],

    //wd-component-graphics
    ["icon", `<i class="fa-brands fa-html5 wd-component wd-icon" style="width: 5rem; height: 5rem; border: 0.09rem solid #ccc;"></i>`],
    ["image", `<img class="wd-component wd-img" src="" alt="" style="width: 5rem; height: 5rem; border:none;">`],
    
    //wd-component-texts
    ["header-1", `<h1 class="wd-component wd-h1" style="width: 5rem; height: 5rem;background-color:transparent; border: none; font-family: default; color: #000;  text-align: left;">heading1</h1>`],
    ["header-2", `<h2 class="wd-component wd-h2" style="width: 5rem; height: 5rem;background-color:transparent; border: none; font-family: default; color: #000;  text-align: left;">heading1</h2>`],
    ["header-3", `<h3 class="wd-component wd-h3"style="width: 5rem; height: 5rem;background-color:transparent; border: none; font-family: default; color: #000;  text-align: left;">heading1</h3>`],
    ["header-4", `<h4 class="wd-component wd-h4"style="width: 5rem; height: 5rem;background-color:transparent; border: none; font-family: default; color: #000;  text-align: left;">heading1</h4>`],
    ["header-5", `<h5 class="wd-component wd-h5"style="width: 5rem; height: 5rem;background-color:transparent; border: none; font-family: default; color: #000;  text-align: left;">heading1</h5>`],
    ["header-6", `<h6 class="wd-component wd-h6"style="width: 5rem; height: 5rem;background-color:transparent; border: none; font-family: default; color: #000;  text-align: left;">heading1</h6>`],
    ["paragraph", `<p class="wd-component wd-paragraph" style="width: 5rem; height: 5rem; background-color: transparent border: none; font-size: 1rem; font-style: normal; font-family: default; color: #000; font-weight: normal; text-align: left; text-decoration: none;">paragraph</p>`],
    ["hyperlink", `<a href="" target="_blank" class = "wd-component wd-hyperlink" style="width: 5rem; height: 5rem; background-color: transparent border: none; font-size: 1rem; font-style: normal; font-family: default; color: #000; font-weight: normal; text-align: left; text-decoration: none;">hyperlink</a>`],
    ["label", `<label class="wd-component wd-input-label" for="value" style="width: 5rem; height: 5rem; background-color: transparent border: none; font-size: 1rem; font-style: normal; font-family: default; color: #000; font-weight: normal; text-align: left; text-decoration: none;">label:</label>`],

    //wd-component-inputs
    ["textarea", `<textarea class="wd-component wd-textarea" style="background-color:transparent; width: 5rem; height: 2rem ;border: 0.09rem solid #ccc; border-radius: 0rem; font-size: 1rem; font-style: normal; font-family: default; color: #000; font-weight: normal; text-align: left; text-decoration: none; resize: vertical;">Textarea</textarea>`],
    ["search-input", `<input type="search" class="wd-component wd-input-search" value="Search something" style=".wd-input-search{color:#000; background-color:rgba(255,255,255,1); width: 3rem; height: 2rem ; border: 0.09rem solid #ccc; border-radius: 0rem; text-align: left; font-size: 0.85rem; font-weight: normal; font-style: none; font-family:default;"></input>`],
    ["text-input", `<input type="text" class="wd-component wd-input-text" name="name" value="Input text" style="background-color:transparent; width: 3rem; height: 2rem ;border: 0.09rem solid #ccc; border-radius: 0rem; font-size: 1rem; font-style: normal; font-family: default; color: #000; font-weight: normal; text-align: left; text-decoration: none;"></input>`],
    ["email-input", `<input type="email" class="wd-component wd-input-email" name="email" value="Input Email" style="color:#000; background-color:rgba(255,255,255,1); width: 3rem; height: 2rem ; border: 0.09rem solid #ccc; border-radius: 0rem; text-align: left; font-size: 1rem; font-weight: normal; font-style: none; font-family:default;"></input>`],
    ["password-input", `<input type="password" class="wd-component wd-input-password" value="Input password" style="background-color:transparent; width: 3rem; height: 2rem ; border: 0.09rem solid #ccc; border-radius: 0rem; font-size: 1rem;"></input>`],
    ["date-input", `<input type="date" class="wd-component wd-input-date" value="Input Date" style="color:#000; background-color:rgba(255,255,255,1); width: 3rem; height: 2rem ; border: 0.09rem solid #ccc; border-radius: 0rem; text-align: left; font-size: 1rem; font-weight: normal; font-style: none; font-family:default;"></input>`],
    ["number-input", `<input type="number" class="wd-component wd-input-number" name="number" min="1" max="5" style="color:#000; background-color:rgba(255,255,255,1); width: 3rem; height: 2rem ; border: 0.09rem solid #ccc; border-radius: 0rem; text-align: left; font-size: 1rem; font-weight: normal; font-style: none; font-family:default;"></input>`],
    ["radio-input", `<input type="radio" class="wd-component wd-input-radio" name="name" value="option"><label  class="wd-component wd-input-radio-label" style = "color:#000; width: 3rem; height: 2rem ; background-color:rgba(255,255,255,1); font-size: 1rem; font-weight: normal; font-style: none; font-family:default; text-align:left; text-decoration:none;" for="option">option</label><br>`],
    ["checkbox-input", `<input type="checkbox" class="wd-component wd-input-checkbox"  name="name"><label  class="wd-component wd-input-checkbox-label style = "color:#000; width: 3rem; height: 2rem ;background-color:rgba(255,255,255,1); font-size: 1rem; font-weight: normal; font-style: none; font-family:default; text-align:left; text-decoration:none;" for="option">option</label><br>`],

    //wd-component-lists
    ["ordered-list", `<ol class="wd-component wd-ol" style="width: 3rem; height: 2rem ;background-color:transparent; border: none;  font-family: default; color: #000;  text-align: left;"><li>ordered-list</li></ol>`],
    ["unordered-list", `<ul class="wd-component wd-ul" style="width: 3rem; height: 2rem ;background-color:transparent; border: none;  font-family: default; color: #000;  text-align: left;"><li>unordered-list</li></ul>`],
    ["list-item", `<li class="wd-component wd-list-item" style="width: 3rem; height: 2rem ;background-color:transparent; border: none;  font-family: default; color: #000;  text-align: left;">list-item</li>`],

    //wd-component-buttons
    ["button", `<button class="wd-component wd-button" style="background-color: #e9e9ed; width: 2rem;height: 1.4rem;border-radius: 0.25rem;padding: 0.1rem 0.3rem;border: 0.09rem solid #8f8f9d;color: #000;text-align: center;display: inline-block;font-size: 0.85rem; font-weight: normal;font-style: none;font-family:default;box-shadow:0 0 0 0; opacity:1;">Button</button>`],
    ["form-submit-button", `<input type="submit" class="wd-component wd-input-button-submit" value="Submit" style="background-color: #e9e9ed; width: 2rem;height: 1.4rem;border-radius: 0.25rem;padding: 0.1rem 0.3rem;border: 0.09rem solid #8f8f9d;color: #000;text-align: center;display: inline-block;font-size: 0.85rem; font-weight: normal;font-style: none;font-family:default;box-shadow:0 0 0 0; opacity:1;"></input>`],
    ["form-reset-button", `<input type="reset" class="wd-component wd-input-button-reset" value="Reset" style="background-color: #e9e9ed; width: 2rem;height: 1.4rem;border-radius: 0.25rem;padding: 0.1rem 0.3rem;border: 0.09rem solid #8f8f9d;color: #000;text-align: center;display: inline-block;font-size: 0.85rem; font-weight: normal;font-style: none;font-family:default;box-shadow:0 0 0 0; opacity:1;"></input>`],

    //wd-component-options
    ["select", `<select class="wd-component wd-input-select" name="option" value="option" style="color:#000; background-color:rgba(255,255,255,1); width: 3rem; height: 1rem ; border: 0.09rem solid #ccc; border-radius: 0rem; text-align: left; font-size: 0.85rem; font-weight: normal; font-style: none; font-family:default;"></select>`],
    ["option", `<option value="option1" class="wd-component wd-select-option-item" style ="color:#000; background-color:rgba(255,255,255,1); width: 3rem; height: 1rem ; border: 0.09rem solid #ccc; border-radius: 0rem; text-align: left; font-size: 0.85rem; font-weight: normal; font-style: none; font-family:default;">option1</option>`]
]);