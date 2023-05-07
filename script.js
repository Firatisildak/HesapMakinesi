"use";
var _buttonlar = document.getElementsByName("button"),
_Length = _buttonlar.length,
i=0,
_Result = document.getElementById("result");



for(i=0; i<_Length; i++){
    _buttonlar[i].onclick = hesapla;
}

function hesapla(){
    var _deger = this.innerHTML;
    if(_deger == "="){
        try{
            _Result.value = eval(_Result.value);
        } catch(e){
            _Result.value="0";
        }
        return;
    }

    _Result.value += _deger;
}