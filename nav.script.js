window.addEventListener('hashchange',hash_());
function hash_(){
    const ha = location.hash;
    if(localStorage.getItem("error") == null){
        const reset_ = {error : ['']};
        const json_ = JSON.stringify(reset_);
        console.log(json_.toString());
        localStorage.setItem("error",json_.toString());
    }
    if(ha == "#download"){
        var date = new Date();
        const error_text = `${date.toLocaleString()},error:404,無効な操作またはぺージ,${ha}`;
        alert(error_text)
        console.error(error_text);
        const code_ = `{"date":"${date.toLocaleDateString()}","time":"${date.toLocaleTimeString()}","error":"404","type":"hash","hash":"${location.hash}"}`
        console.log(code_);
        console.log(JSON.stringify(code_));
        alert(`error code:${code_}`)
        /*
        var error___ = localStorage.getItem("error").toJSON();
        var date = new Date();
        var error_data = `{error : ['${date.toLocaleString()} page:download 無効']}`
        var json__ = error_data.toJSON();
        var json__ = JSON.stringify(json__);
        console.log(json__);
        error___.push(json__);
        console.log(error___);
        localStorage.setItem("error",error___);
        */
    }
}