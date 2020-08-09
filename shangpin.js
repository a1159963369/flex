window.onload = function(){
    $.ajax({
        url:"/api",
        async:true,
        type:"get",
        cache: false,//不走缓存
        success:function(val){
            let user = JSON.parse(val)
            let menu = document.getElementById("menulist");
            for(var i=0;i<user.menuList.length;i++){
                var elUl = document.createElement("ul")
                var elLi = document.createElement("li")
                var img = document.createElement("img")
                console.log(user.menuList[i])
               
                $(elLi).html(user.menuList[i].menuNav)
                $(img).attr("src", user.menuList[i].img)
                elLi.appendChild(img)
                
                elUl.appendChild(elLi)
                
                menu.appendChild(elUl)
            }
        },
        err:function(err){
            alert(err)
        }
    })
}