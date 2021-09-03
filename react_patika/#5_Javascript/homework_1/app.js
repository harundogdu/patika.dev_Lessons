let kullaniciIsim = prompt("İsmini yazar mısın ?");
document.querySelector('#isim').innerHTML = "  " + kullaniciIsim;

function tarihYaz(){
  //tarih bilgisi alınıyor
  let date = new Date();
  let saat = date.getHours();
  let dakika = date.getMinutes();
  let saniye = date.getSeconds();
  let gun;

  let karsilamaYazisi = document.querySelector('h1');
  let saatYazisi = document.querySelector('#tarih');
  karsilamaYazisi.style.backgroundColor = `rgb(${saniye},${saat},${dakika})`;
  saatYazisi.style.backgroundColor = `rgb(${saniye*4},${saniye*3},${saniye*2})`;

  if(date.getDay() == 1){
    gun = 'Pazartesi';
  }
  else if(date.getDay() == 2){
    gun = 'Salı';
  }
  else if(date.getDay() == 3){
    gun = 'Çarşamba';
  }
  else if(date.getDay() == 4){
    gun = 'Perşembe';
  }
  else if(date.getDay() == 5){
    gun = 'Cuma';
  }
  else if(date.getDay() == 6){
    gun = 'Cumartesi';
  }
  else if(date.getDay() == 7){
    gun = 'Pazar';
  }
  if(saniye < 10){
    saniye =`0${saniye}`;
  }
  if(dakika < 10){
    dakika = `0${dakika}`;
  }
  if(saat < 10){
    saat = `0${saat}`;
  }
  document.querySelector('#tarih').innerHTML = `${gun} günü ; ${saat}:${dakika}:${saniye} saatinde bu sayfadasınız.`;

  setTimeout(tarihYaz,1000);
  
}

tarihYaz();
