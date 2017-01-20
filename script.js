function Telefon(marka,cena,kolor) {
  this.marka = marka;
  this.cena = cena;
  this.kolor = kolor;
}

Telefon.prototype.printInfo = function(){
  console.log("Marka telefonu to " + this.marka + " jego kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var iPhone6s = new Telefon("Apple", 3699, "space-grey");

var samsung6S = new Telefon("Samsung", 3500, "black");

var nokia = new Telefon("Nokia", 500, "3310");

nokia.printInfo();