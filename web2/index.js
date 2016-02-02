/**
 * Created by Jason on 2016-01-12.
 */
/*导航*/
window.onload = function () {
    var Adivnavigation = document.getElementById('divnavigation');
    var AdivnavigationLi = Adivnavigation.getElementsByTagName('li');
    var AdivnavigationSpan = Adivnavigation.getElementsByTagName('span');
    var Adivsubmenu = document.getElementById('divsubmenu');
    var AdivsubmenuP = Adivsubmenu.getElementsByTagName('P');
    var Adivnavigationnum = 0;
    var AdivnavigationTime = null;
    /* 延时的菜单 */
    for (var i = 0; i < AdivnavigationLi.length; i++) {
        AdivnavigationLi[i].index = i;
        AdivsubmenuP[i].index = i;
        AdivnavigationLi[i].onmouseover = Adivnavigationshow;
        AdivnavigationLi[i].onmouseout = Adivnavigationhide;
        AdivsubmenuP[i].onmouseover = Adivnavigationshow;
        AdivsubmenuP[i].onmouseout = Adivnavigationhide;

    }

    function Adivnavigationshow() {
        clearInterval(AdivnavigationTime);
        for (var j = 0; j < AdivnavigationLi.length; j++) {
            AdivsubmenuP[j].style.display = "none";
            AdivnavigationSpan[j].style.display = "block";

        }
        AdivsubmenuP[this.index].style.display = "block";
        AdivnavigationSpan[this.index].style.display = "none";
    }

    function Adivnavigationhide() {
        AdivnavigationTime = setTimeout(function () {
            for (var j = 0; j < AdivnavigationLi.length; j++) {
                AdivsubmenuP[j].style.display = "none";
                AdivnavigationSpan[j].style.display = "block";
            }
            AdivsubmenuP[Adivnavigationnum].style.display = "block";
            AdivnavigationSpan[Adivnavigationnum].style.display = "none";
        }, 500);
    }
}