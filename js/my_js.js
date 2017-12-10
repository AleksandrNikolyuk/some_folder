function load(){

var MyButton = document.getElementById('MyButton'),
    Result = document.getElementById('result'),
    MyInput = document.getElementById('x');
// console.log(MyButton, Result, MyInput);

    function SomeStuffClick(event) {
        console.log(event);

    }
    function SomeStuffContext(event) {
        console.log(event.type);
    }


    MyInput.addEventListener('input', function(event){
        console.log(event.target.__proto__);
        Result.innerText=event.target.value;
    });
    MyButton.addEventListener('contextmenu', SomeStuffContext);
    MyButton.addEventListener('click', SomeStuffClick);

}
load();
