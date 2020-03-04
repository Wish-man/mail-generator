function onButtonClick() {
    target = document.getElementById("output");
    form = document.forms.id_form;
    var text = 'おはようございます。'+form.id_grade.value+'回生の'+ form.id_name.value +'です。\n'
        +form.id_date.value.substring(5, 7)+'月'+form.id_date.value.substring(8, 10)+'日の出艇報告です。\n'
        +'時間：'+ form.id_start.value + '～' + form.id_finish.value+'\n'
        +'海上警報：'+form.id_marine.value+'\n'
        +'強風注意報：'+form.id_wind.value+'\n'
        +'安全レベル：'+form.id_safety.value+'\n'
        +'救助艇の電話番号\n'
        +'摩耶：'+form.phone_maya.value+'\n'
        +'KABUTO：'+form.phone_kabuto.value+'\n'
        +'＜配艇＞\n'
        +'470\n';

    for(var i=1;i<=4;i++){
        var form_ids = ['yonnum_'+i, 'yonhelm_'+i, 'yoncrew_'+i]
        if(document.getElementById(form_ids[0]).value != ''){
            text += document.getElementById(form_ids[0]).value+'　'+document.getElementById(form_ids[1]).value+'・'+document.getElementById(form_ids[2]).value+'\n';
        }
    }
    text += 'スナイプ\n';
    for(var i=1;i<=4;i++){
        var form_ids = ['sninum_'+i, 'snihelm_'+i, 'snicrew_'+i]
        if(document.getElementById(form_ids[0]).value != ''){
            text += document.getElementById(form_ids[0]).value+'　'+document.getElementById(form_ids[1]).value+'・'+document.getElementById(form_ids[2]).value+'\n';
        }
    }
    text += 'KABUTO\n' + form.kabuto_mem.value + '\n';
    text += '摩耶\n' + form.maya_mem.value + '\n';
    text += '陸\n' + form.land_mem.value + '\n';
    text += '欠席\n' + form.abs_mem.value + '\n';
    text += '休部\n' + form.rest_mem.value + '\n';

    target.innerText = text;
}

function setToday() {
    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0"+(today.getMonth()+1)).slice(-2);
    var dd = ("0"+today.getDate()).slice(-2);
    document.getElementById("id_date").value=yyyy+'-'+mm+'-'+dd;
}
setToday();

function setForms(){
    var area1 = document.getElementById("member_form");
    for(var i=4; i>=1; i--){
        var form_sample = `<div class="row"> <div class="col"> <input type="text" class="form-control" placeholder="boat number ${i}" id="yonnum_${i}"> </div> <div class="col"> <input type="text" class="form-control" placeholder="helm" id="yonhelm_${i}"> </div> <div class="col"> <input type="text" class="form-control" placeholder="crew" id="yoncrew_${i}"> </div> </div>`;
        area1.insertAdjacentHTML('afterbegin', form_sample);
    }

    var area2 = document.getElementById("snipe_form")
    for(var i=4; i>=1; i--){
        var form_sample = `
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="boat number ${i}" id="sninum_${i}">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="helm" id="snihelm_${i}">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="crew" id="snicrew_${i}">
            </div>
        </div>`;
        area2.insertAdjacentHTML('afterbegin', form_sample);
    }
}
setForms();

function copyToClipboard() {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("output");
    //console.log(copyTarget);

    var element = document.createElement("textarea")

    element.value = copyTarget.innerText;
    console.log(copyTarget.innerText);
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);

    // コピーをお知らせする
    alert("コピーできました！ : " + copyTarget.innerText);
}