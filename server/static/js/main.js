window.addEventListener('load', function() {
    const swapSyntax = document.getElementById("swap-syntax");
    const mySyntax = document.getElementById("mySyntax");
    const basicSyntax = document.getElementById("basic-syntax");
    const title = document.getElementById("title-syntax");
    const editor = document.getElementById("editor");
    const buttons = document.getElementsByClassName("snippet")

    swapSyntax.addEventListener('click', () => {
        if (basicSyntax.offsetParent === null) {
            basicSyntax.style.display = 'block';
            mySyntax.style.display = 'none';
            title.innerText = "Basic syntax"
            return
        }
        if (mySyntax.offsetParent === null) {
            mySyntax.style.display = 'block';
            basicSyntax.style.display = 'none';
            title.innerText = "Added syntax"
            return
        }
    });

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            editor.innerHTML = snippets[i];
        });
    }
})

const snippets = [
    `puts \"Hello world\"`,
    `let a = 5;\nlet b = 5;\na + b`,
    `let a = fn(a) {\n\treturn a;\n};\na(42);`,
    `class A {\n\tlet a = 1050;\n\tlet b = fn(c) {\n\t\treturn c;\n\t};\n};\nlet d = new A();\nd.a`,
    `let fibonacci = fn(x) {
\tif (x == 0) {
\t\t0
\t} else {
\t\tif (x == 1) {
\t\t\t1
\t\t} else {
\t\t\tfibonacci(x - 1) + fibonacci(x - 2);
\t\t}
\t}
};
fibonacci(10);
`
]
