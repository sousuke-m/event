function load_(){
    document.querySelector(".text").select();
    document.querySelector(".messege").innerHTML = "正しいパスワードを入力してからどれかのキーを押してください";
}
window.addEventListener('keydown',keydown__);
function keydown__(){
    var pass_ = "14298"
    if(document.querySelector(".text").value == pass_){
        console.log(`認識成功:${document.querySelector(".text").value}`);
        loadAndPlay();
        document.querySelector(".messege").innerHTML = "認識成功";
        document.querySelector(".text").value = "";
        document.querySelector(".text").select();
        _kanryo();
    }else{
        document.querySelector(".messege").innerHTML = "正しいパスワードを入力してからどれかのキーを押してください";
    }
}
function _kanryo (){
    document.querySelector(".kanryo").innerHTML = `<a href="page.html">開く</a>`;
}