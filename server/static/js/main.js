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
    `let a = fn(a) {\n\treturn a;\n};\na(10);`,
    `class A {\n\tlet a = 10;\n\tlet b = fn(c) {\n\t\treturn c;\n\t};\n};\nlet d = A();\nd.a;\nd.b(8)`,
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
`
]
