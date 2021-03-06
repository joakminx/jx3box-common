const { default_avatar, __Root } = require("./jx3box");

module.exports = {
    resolveImagePath: function (str) {
        return str && str.length
            ? str.replace(/oss\.jx3box\.com/g, "console.cnyixun.com")
            : "";
    },

    checkImageLoad: function (jq) {
        jq.length &&
            jq.one("error", function () {
                var img_url = $(this).attr("src");
                var fix_url = img_url.replace(
                    /console\.cnyixun\.com/g,
                    "oss.jx3box.com"
                );
                $(this).attr("src", fix_url);
            });
    },

    showAvatar: function (url, size = "s") {
        const styleMap = {
            s: "?x-oss-process=style/avatar_s",
            m: "?x-oss-process=style/avatar_m",
            l: "?x-oss-process=style/avatar_l",
        };

        let avatar = !url
            ? default_avatar
            : url.replace(/oss\.jx3box\.com/g, "console.cnyixun.com");

        return avatar + styleMap[size];
    },

    showMinibanner: function (url) {
        url = url.replace(/oss\.jx3box\.com/g, "console.cnyixun.com");
        url = url + "?x-oss-process=style/mini_banner";
        return url;
    },

    editLink: function (type, id) {
        return __Root + 'dashboard/publish/#/' + type + "/" + id;
    },

    publishLink: function (type) {
        return __Root + 'dashboard/publish/#/' + type;
    },

    authorLink: function (uid) {
        return __Root + 'author' + "/?uid=" + uid;
    },

    postLink: function (type, pid) {
        return __Root + type + "/?pid=" + pid;
    },

    getRewrite: function (key) {
        let val = "";
        let params = new URLSearchParams(location.search);
        let isRewrite = !params.get(key);
        if (!isRewrite) {
            val = params.get(key);
        } else {
            let arr = location.pathname.slice(1).split("/");
            val = arr[1];
        }
        return val;
    },

    buildTarget: function (edge = 1025) {
        return window.innerWidth < edge ? "_self" : "_blank";
    },
};
