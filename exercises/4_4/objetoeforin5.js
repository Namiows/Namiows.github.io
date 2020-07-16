//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.personagem = info.personagem+" e Tio Patinhas" ,
  info.origem = info.origem+" e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  info.nota = info.nota+" e o ultimo MacPatinhas ",
  info.recorrente = "Ambos recorrentes"
  
  for(propriedade in info) {
  console.log(info[propriedade]);
}