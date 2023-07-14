let resizeBar = document.getElementById("resize-bar");
let outputArea = document.getElementById("output-area");
let codeArea = document.getElementById("code-area");


function editorResize()
{
    let curX , prevOutW;
    function resize_mouseDownHandler(e)
    {
        if(codeArea.style.display != "none")
        {

            curX = e.clientX;
    
            prevOutW = parseInt(window.getComputedStyle(outputArea).width, 10);
    
            document.addEventListener("mousemove", resize_mouseMoveHandler);
            document.addEventListener("mouseup", resize_mouseUpHandler);
        }
    }

    function resize_mouseMoveHandler(e)
    {
        if(codeArea.style.display != "none")
        {
            let bodyW =  parseInt(window.getComputedStyle(document.body).width, 10);
            let currOutWP = 100 * (prevOutW + e.clientX - curX) / bodyW ;
            
            if(currOutWP >= 10 && currOutWP <= 90)
            {
                outputArea.style.width = `${currOutWP}%`;
                codeArea.style.width = `calc(100% - ${currOutWP}% - 1rem)`;
            }
        }
    }

    function resize_mouseUpHandler()
    {
        if(codeArea.style.display != "none")
        {

            document.removeEventListener("mouseup", resize_mouseUpHandler);
            document.removeEventListener("mousemove", resize_mouseMoveHandler);
        }
    }

    if(codeArea.style.display != "none")
    {

        resizeBar.addEventListener("mousedown", resize_mouseDownHandler);
    }
}
        editorResize();

let resizeButton = document.getElementById("resize-button");

resizeButton.onclick = function collapseCodeArea()
{
    if(codeArea.style.display == "none")
    {
        codeArea.style.display = "block";
        codeArea.style.width = "30%";
        resizeBar.style.cursor = "col-resize";
        resizeButton.firstElementChild.style.display = "block";
        resizeButton.lastElementChild.style.display = "none";
    }
    else{
        outputArea.style.width = "100%";
        codeArea.style.display = "none";
        resizeBar.style.cursor = "auto";
        resizeButton.lastElementChild.style.display = "block";
        resizeButton.firstElementChild.style.display = "none";
    }
   
}



