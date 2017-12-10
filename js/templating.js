window.addEventListener("load", function () {

    var MyWidth = document.getElementById('myWidth'),
        MyHeight = document.getElementById('myHeight'),
        MyPadding = document.getElementById('myPadding'),
        MyBorder = document.getElementById('myBorder'),
        MyColor= document.getElementById('myColor'),
        ColorSelector = document.getElementById('colorSelector'),
        MyResult = document.getElementById('result');
        //console.log(MyWidth, MyHeight, MyPadding, MyBorder, MyColor, MyResult);


    function Range(event){
        // console.log(event);
        var MyValue = event.target.value;
            MyName = event.target.getAttribute('name');
            // console.log(MyValue, MyName);

            MyResult.style[MyName] = MyValue + 'px';
            // console.log(MyResult.style);

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
            // console.log(ColorArray);

            ColorArray.forEach(function(elemt, index){
                if(elemt.length < 2){
                    ColorArray[index] = elemt + elemt;
                }
            });

            // console.log(ColorArray);


            return '#' + ColorArray[0] + ColorArray[1] + ColorArray[2];
        //console.log(Color);

    }

    function ColorContainer(event){

        for(var i = 0; i < 20; i ++){
            //console.log(i);
            var SomeColor = document.createElement('div');

                MySome = event.target.value;
                MySomeName = event.target.getAttribute('name');

                SomeColor.style.backgroundColor = RandomColor();
                SomeColor.className = 'colorCircle';
                ColorSelector.appendChild(SomeColor);
                console.log(event);

                MyResult.style[MySomeName] = MySome;


        }

    }


    MyWidth.addEventListener('input', Range);
    MyHeight.addEventListener('input', Range);
    MyPadding.addEventListener('input', Range);
    MyBorder.addEventListener('input', Range);
    MyColor.addEventListener('click', ColorContainer);


});
