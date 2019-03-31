 Calculadora={
  valor:"0",
  valorTemp:"0",
  signo:"",
  reducirTamano:function(tag){
    tag.setAttribute("onmousedown", "document.getElementById('"+tag.id+"').style.padding='2%';");
  },
  restaurarTamano:function(tag){
    tag.setAttribute("onmouseup", "document.getElementById('"+tag.id+"').style.padding='0%';");
  },
  ActualizarDisplay:function(){
    if(Calculadora.valor.length>8)
      Calculadora.valor=Calculadora.valor.slice(0,8);
    document.getElementById('display').innerHTML=Calculadora.valor;},
  HabilitarBotones:function(){
    document.getElementById("display").maxLength=8;
    var teclas =document.querySelectorAll(".tecla")
    for(var i in teclas)
    {
      var idTecla=teclas[i].id
      var dom =document.getElementById(idTecla);
      if(dom){
      Calculadora.reducirTamano(dom);
      Calculadora.restaurarTamano(dom);
      dom.addEventListener("click",function(){
        Calculadora.Display(this.id);
      });
      }
      else {
        Calculadora.ActualizarDisplay("on");
        break;
      }
    }
    },
    Display:function(n){
      if(Calculadora.valor=="0")
      Calculadora.valor="";

      switch (n) {
        case "dividido":
          Calculadora.valorTemp=Calculadora.valor;
          Calculadora.signo="/";
          Calculadora.valor="0";
          Calculadora.ActualizarDisplay();
        break;
        case "por":
          Calculadora.valorTemp=Calculadora.valor;
          Calculadora.signo="*";
          Calculadora.valor="0";
          Calculadora.ActualizarDisplay();
        break;
        case "menos":
          Calculadora.valorTemp=Calculadora.valor;
          Calculadora.signo="-";
          Calculadora.valor="0";
          Calculadora.ActualizarDisplay();
        break;
        case "mas":
          Calculadora.valorTemp=Calculadora.valor;
          Calculadora.signo="+";
          Calculadora.valor="0";
          Calculadora.ActualizarDisplay();
        break;
        case "raiz":
          Calculadora.valor=Math.sqrt(Calculadora.valor);
          Calculadora.ActualizarDisplay();
        break;
        case "igual":
          Calculadora.valor=eval(Calculadora.valorTemp+Calculadora.signo+Calculadora.valor).toString();
          Calculadora.ActualizarDisplay();
        break;
        case "punto":
          if(Calculadora.valor.indexOf(".")<0)
          {
            Calculadora.valor+=".";
            Calculadora.ActualizarDisplay();
          }
          break;
        case "sign":
          var x =0;
          x=-Calculadora.valor;
          Calculadora.valor=x.toString();
          Calculadora.ActualizarDisplay();
          break;
        case "on":
          Calculadora.valor="0";
          Calculadora.ActualizarDisplay("on");
          break;
        default:
          Calculadora.valor+=n;
          Calculadora.ActualizarDisplay();
        break;

      }
      if(Calculadora.valor=="")
        Calculadora.valor="0"
    }

}

document.getElementsByTagName('body')[0].addEventListener("load",Calculadora.HabilitarBotones())
