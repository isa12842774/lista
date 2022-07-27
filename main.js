var namesOfPeople = [];
function submit()
{
    var GuestName = document.getElementById("enviar2").value;
    namesOfPeople.push(GuestName);
    console.log(namesOfPeople);
    var comprimento = namesOfPeople.lenght;
    console.log(comprimento);
    document.getElementById("displayname").innerHTML = namesOfPeople.toString();
}
function organizar()
{
    var GuestName = document.getElementById("enviar2").value;
    namesOfPeople.sort(submit());
    var comprimento = namesOfPeople.lenght;
    document.getElementById("displayordem").innerHTML = namesOfPeople.toString();
}
function pesquisar()
{
    var s= document.getElementById("p").value;
    var found=0;
    var j;
    for(j=0; j<namesOfPeople.length; j++)
    {
        if(s==namesOfPeople[j]){
            found=found+1
        }
    }
    document.getElementById("p1").innerHTML="Nome encontrado"+found+"vez(es)";
    console.log("Nome encontrado")+found+"vez(es)";
}