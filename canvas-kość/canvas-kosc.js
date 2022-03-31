/* Funkcja randomize - jej zadaniem jest wylosowanie liczby od 1 do 6
   liczba oczek pojawia się taka jaka jest wylosowana liczba */ 
function randomize()
{   
    const sound = new Audio('DiceRoll.wav');
    let random = Math.round(Math.random()*5+1);

    if(random == 1)
    {
        sound.play();
        one();
    }
    else if(random == 2)
    {
        sound.play();
        two();
    }
    else if(random == 3)
    {
        sound.play();
        three();
    }
    else if(random == 4)
    {
        sound.play();
        four();
    }
    else if(random == 5)
    {
        sound.play();
        five();
    }
    else if(random == 6)
    {
        sound.play();
        six();
    }
    console.log(random);
}

/* funkcje w canvas, rysują one liczbę oczek */

const ctx = document.getElementById('canvas').getContext('2d');

function one()
{
    ctx.fillStyle = 'white';
    ctx.strokeRect(100,100,220,220);
    ctx.fillRect(100,100,220,220);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(210,210,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

function two()
{
    ctx.fillStyle = 'white';
    ctx.strokeRect(100,100,220,220);
    ctx.fillRect(100,100,220,220);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(267,267,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(154,154,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

function three()
{
    ctx.fillStyle = 'white';
    ctx.strokeRect(100,100,220,220);
    ctx.fillRect(100,100,220,220);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(267,267,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(210,210,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(154,153,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

function four()
{
    ctx.fillStyle = 'white';
    ctx.strokeRect(100,100,220,220);
    ctx.fillRect(100,100,220,220);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(267,267,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(154,267,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(154,153,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(267,153,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function five()
{
    ctx.fillStyle = 'white';
    ctx.strokeRect(100,100,220,220);
    ctx.fillRect(100,100,220,220);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(267,267,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(154,267,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(154,153,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(267,153,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(210,210,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function six()
{
    ctx.fillStyle = 'white';
    ctx.strokeRect(100,100,220,220);
    ctx.fillRect(100,100,220,220);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(267,267,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(154,267,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(154,153,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(267,153,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(154,210,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(267,210,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}