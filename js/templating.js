window.addEventListener("load", function () {

    var MyWidth = document.getElementById('myWidth'),
        MyHeight = document.getElementById('myHeight'),
        MyPadding = document.getElementById('myPadding'),
        MyBorder = document.getElementById('myBorder'),
        MyColor= document.getElementById('myColor'),
        ColorSelector = document.getElementById('colorSelector'),
        MyResult = document.getElementById('result');


    function Range(event) {

        var MyValue = event.target.value;
            MyName = event.target.getAttribute('name');
            MyResult.style[MyName] = MyValue + 'px';

    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function RandomColor() {

        var ColorArray = [
                getRandomIntInclusive(0, 255).toString(16),
                getRandomIntInclusive(0, 255).toString(16),
                getRandomIntInclusive(0, 255).toString(16)
            ];
            ColorArray.forEach(function(elemt, index){
                if(elemt.length < 2){
                    ColorArray[index] = elemt + elemt;
                }
            });
            return '#' + ColorArray[0] + ColorArray[1] + ColorArray[2];

    } //RandomColor()

    function ColorContainer(event){

        for(var i = 0; i < 20; i ++){
            //console.log(i);
            var SomeColor = document.createElement('div'),
                RandColor = RandomColor();

                SomeColor.style.backgroundColor = RandColor;
                SomeColor.className = 'colorCircle';
                ColorSelector.appendChild(SomeColor);
                SomeColor.dataset.color = RandColor;

                SomeColor.addEventListener('click', function(event) {
                    MyResult.style.backgroundColor = event.target.dataset.color;
                });

        } // for

    } //ColorContainer()

    MyWidth.addEventListener('input', Range);
    MyHeight.addEventListener('input', Range);
    MyPadding.addEventListener('input', Range);
    MyBorder.addEventListener('input', Range);
    MyColor.addEventListener('click', ColorContainer);

}); // window.addEventListener
