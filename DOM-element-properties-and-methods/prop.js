const head = document.querySelector("h2");
console.log(head.textContent);
// set the textcontent property on that element
head.textContent = "hi ";
console.log(head.textContent);
console.log(head.innerText);

console.log(head.innerHTML);
console.log(head.outerHTML);

head.insertAdjacentText("afterbegin", "hello ");
head.insertAdjacentText("afterend", "hello ");
