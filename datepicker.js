for(let i = 2024; i >= 1924; i--) {
    anos.innerHTML += `<option>${i}</option>`;
    // anos.innerHTML = '<option>'+i+'</options>';
}

for(let i = 1; i <= 12; i++){
    meses.innerHTML +=`<option>${i}</option>`;
    
}
for(let i = 1; i <= 31; i++){
    dias.innerHTML += `<option>${i}</option>`;
}
meses.onchange = () => {
    let qtdDias = 0;
    let mesSelecionado = Number(meses.value);
    if(mesSelecionado == 1 || mesSelecionado == 3 || mesSelecionado == 5 || mesSelecionado == 7 || mesSelecionado == 8 || mesSelecionado == 10 || mesSelecionado == 12){
        qtdDias = 31;
     }else if(mesSelecionado == 4 || mesSelecionado == 6 || mesSelecionado == 9 || mesSelecionado == 11 ||){
        qtdDias = 30;
     } else {
        qtdDias = 28;
     }
     dias.innerHTML = '';
     for(let i = 1; i <= qtdDias; i++){
        dias.innerHTML += `<option>${i}</option>`;
     } 
     
} 