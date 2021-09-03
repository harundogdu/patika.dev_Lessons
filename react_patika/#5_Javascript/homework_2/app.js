let dutyList = document.querySelector("#list");
let storageDuty = [];

//görev ekleme fonskiyonu
function newElement() {
  let inputVal = document.querySelector("#task").value;
  if (inputVal.length > 0) {
    $(".success").toast("show");
    let newDuty = document.createElement("li");
    newDuty.innerHTML = `${inputVal}<span class="close">x</span>`;
    dutyList.insertAdjacentElement("beforeend", newDuty);
    document.querySelector("#task").value = ""; //ekleme sonrası içerik boşaltma
    localstorageAdd(inputVal);
  } else {
    $(".error").toast("show"); //boş içerik uyarısı
  }
}

//localstorage a ekleme
function localstorageAdd(duty) {
  storageDuty.push(duty);
  localStorage.setItem("duty", storageDuty);
}
//localStorage tan silme
function localstorageDelete(duty) {
  storageDuty.splice(duty, 1); //silinecek görev, diziden çıkartıldı
  localStorage.setItem("duty", storageDuty); // yeni görev dizisi localStorage ta güncellendi
}

//görev silme fonksiyonu
dutyList.addEventListener("click", function (e) {
  const deleteButton = e.target;
  if (deleteButton.classList[0] == "close") {
    let willDelete = deleteButton.closest("li"); //silinecek li elementi seçildi
    willDelete.remove(); // seçilen li elementi silindi
    let a = willDelete.innerText.lastIndexOf("x"); //eleman eklerken silme butonu için element içine eklenen x harfinin konumu bulundu
    let orderOfWillDelete = storageDuty.indexOf(
      willDelete.innerText.slice(0, a)
    ); // depolanan veri dizisinde silinecek verinin indeksi (sondaki fazladan x harfi silindi)
    localstorageDelete(orderOfWillDelete);
  }
});

//yapıldı işaretleme fonksiyonu
dutyList.addEventListener("click", function (e) {
  const doneButton = e.target;
  doneButton.classList.add("bg-primary");
});
