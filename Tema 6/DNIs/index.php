<?
function getDNI(){
  let num = rand(10000000,99999999);
  let l = chr(rand(65,90));
  return num.l;
}
if(isset($_GET['enviar'])){
  $num = $_GET['num'];
  for($i=0; $i<$num; $i++){
    ?><div><?=getDNI();?></div><?
  }
}
?>