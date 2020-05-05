const {default_avatar,__dataPath} = require('./jx3box');

module.exports = {
    resolveImagePath : function (str){
        return (str && str.length) ?  str.replace(/oss\.jx3box\.com/g,'console.cnyixun.com') : ''
    },

    checkImageLoad : function (jq){
        jq.length &&
        jq.one('error',function (){
            var img_url = $(this).attr("src");
            var fix_url = img_url.replace(
                /console\.cnyixun\.com/g,
                "oss.jx3box.com"
            );
            $(this).attr("src", fix_url);
        })
    },

    showAvatar : function (url,size='s'){

        const styleMap = {
            s : "?x-oss-process=style/avatar_s",
            m : "?x-oss-process=style/avatar_m",
            l : "?x-oss-process=style/avatar_l"
        }

        let avatar = !url ? default_avatar : url.replace(/oss\.jx3box\.com/g,'console.cnyixun.com')

        return avatar + styleMap[size]

    },

    dataPath :function (path,version="latest"){
        return __dataPath + '@' + version + '/data/' + path
    }
}