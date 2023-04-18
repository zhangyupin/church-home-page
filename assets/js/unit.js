function setTopBar(data) {
    let d = data.zh;
    if (!isChinese()) d = data.jp;
    $("#topPage").html(d.topPage);

    $("#ikebukuroParent").html(d.ikebukuro.parent);
    $("#ikebukuroPage1").html(d.ikebukuro.page1);
    $("#ikebukuroPage2").html(d.ikebukuro.page2);

    $("#saitamaParent").html(d.saitama.parent);
    $("#saitamaPage1").html(d.saitama.page1);
    $("#saitamaPage2").html(d.saitama.page2);

    $("#religion").html(d.religion);
    $("#pasture").html(d.pasture);
    $("#children").html(d.children);
    $("#clergyman").html(d.clergyman);

    if (isChinese()) $("#languageParent").html(d.language.chinese);
    else $("#languageParent").html(d.language.japanese);
    $("#chinese").html(d.language.chinese);
    $("#japanese").html(d.language.japanese);
}

function reload(lan) {
    let url = location.href;
    location.href = url.substring(0, url.lastIndexOf("#")) + "#" + lan;
    location.reload();
}

function jump(id) {
    let page = "";
    if (id == "topPage") page = "index";
    else if (id == "ikebukuroParent") page = "about-ikebukuro";
    else if (id == "saitamaParent") page = "about-saitama";
    else if (id == "religion") page = "profession-faith";
    else if (id == "clergyman") page = "pastor-introduction";

    let href = location.href;
    if (href.includes(page)) return;
    else if (href.includes("index")) location.href = href.replace("index", page);
    else if (href.includes("about-ikebukuro")) location.href = href.replace("about-ikebukuro", page);
    else if (href.includes("about-saitama")) location.href = href.replace("about-saitama", page);
    else if (href.includes("profession-faith")) location.href = href.replace("profession-faith", page);
    else if (href.includes("pastor-introduction")) location.href = href.replace("pastor-introduction", page);
    else {
        let hash = location.hash;
        location.href = href.replace(hash, "") + page + ".html" + hash;
    }
}

function isChinese() {
    if (location.hash == "#jp") {
        return false;
    } else {
        return true;
    }
}