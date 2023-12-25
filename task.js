const item = document.getElementById("items");
const xhr = new XMLHttpRequest();
xhr.open("get", "https://students.netoservices.ru/nestjs-backend/slow-get-courses")
xhr.responseType = "json"
xhr.send()
xhr.onload = function () {
  if (xhr.status == 200) {
    const data = xhr.response.response.Valute
    document.getElementById("loader").classList.remove("loader_active");
    for (let i in data) {
      item.insertAdjacentHTML('beforeEnd', `<div class="item"><div class="item__code">${data[i].CharCode}</div><div class="item__value">${ data[i].Value}</div><div class="item__currency">руб.</div></div>`)
    };
  } else if (xhr.status == 404) {
    console.log("Запрашиваемый ресурс не найден!")
  } else if (xhr.status == 500) {
    console.log("Ошибка на стороне сервера!")
  } else {
    console.log("Запрос не удался")
  }
}