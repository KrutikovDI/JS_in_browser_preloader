const item = document.getElementById("items");
const xhr = new XMLHttpRequest();
xhr.open("get", "https://students.netoservices.ru/nestjs-backend/slow-get-courses")
xhr.responseType = "json"
xhr.send()
xhr.onload = function () {
      const data = xhr.response.response.Valute
      document.getElementById("loader").classList.remove("loader_active");
      for (let i in data) {
        item.insertAdjacentHTML('beforeEnd', `<div class="item"><div class="item__code">${data[i].CharCode}</div><div class="item__value">${ data[i].Value}</div><div class="item__currency">руб.</div></div>`)
        }
}
