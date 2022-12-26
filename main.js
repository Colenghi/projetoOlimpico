
canvas = document.getElementById("myCanvas");//o myCanvas foi adicionado a variavel canvas

ctx= canvas.getContext("2d");//o canvas vai fazer os desenhos em 2d

color = "red";//a cor inicial do canvas vai ser vermelho

ctx.beginPath();//é o inicio do desenho
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);//está mostrando como é feito o desenho do circulo
ctx.stroke();//é ussado pra dar uma borda ao circulo

canvas.addEventListener("mousedown", my_mousedown);//o mousedown é quando o mouse é clicado,o addEventListener é o que faz a função acontecer

function my_mousedown(e)//e de evento
{
    //pegando cor da caixa de entrada
    //início da atividade adicional
    color = document.getElementById("color").value;//quando o mouse for precionado ele vai pegar a cor que foi colocada 
    console.log(color);
    //fim da atividade adicional
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);   
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//atividade adicional

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
