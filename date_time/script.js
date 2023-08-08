function replace_date_time(){
    var date = new Date();
    document.querySelector("#fuu_year").innerHTML = `${date.getFullYear().toString()}年`;
    var month = date.getMonth() + 1;
    document.querySelector('#month').innerHTML = `${month.toString()}月`;
    document.querySelector('#date').innerHTML = `${date.getDate().toString()}日`;
    document.querySelector('#h').innerHTML = `${date.getHours().toString()}時`;
    document.querySelector('#m').innerHTML = `${date.getMinutes().toString()}分`;
    document.querySelector('#s').innerHTML = `${date.getSeconds().toString()}秒`;
    document.querySelector('#mils').innerHTML = `${date.getMilliseconds().toString()}`;
    document.querySelector('.load_').classList.add('__');
}