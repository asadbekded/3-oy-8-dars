var elTitle = document.querySelector('.title')
var balance = +prompt('Alisherjon sayohat uchun qancha pulingiz bor ? So`mda kiriting')

if (balance > 9666000) {
   elTitle.textContent = `Oq yol Hurmatli Alisherjon !!!!`;
}
else{elTitle.textContent = `Hurmatli Alisherjon Mablag\'ingiz yetarli emas !!!!`}