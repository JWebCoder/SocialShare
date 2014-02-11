//	Author: João Moura
//	Author blog: http://JWebCoder.wordpress.com
//
//	SocialShare v0.93
//
//	JavaScript plugin to create sharing buttons
//
//  Supported Social Networks
//
//  Facebook
//  Twitter
//  LinkedIn
//  Google +
//  Google Bookmark
//  Pinterest
//  Tumblr
//  Delicious
//  Reddit
//  Tapiture
//  StumbleUpon
//  Newsvine


var SocialShare = function(options) {
	if(options){
		if (options.imageManager) {
			if (options.themeUrl) {
				this.themeUrl = options.themeUrl;
			}
			if (options.theme) {
				this.theme = options.theme;
			}
			if (options.invertTheme) {
				this.invertTheme = options.invertTheme;
			}
			this.imageClass = options.imageManager;

			var objectSSControl = this;
			if(document.addEventListener){
				document.addEventListener('DOMContentLoaded', function() { objectSSControl.imagesManager(); });
			}else{
				if(document.onreadystatechange){
					var curronready = document.onreadystatechange;
					var newonready = function(){
						curronready();
						if(document.readyState == "complete"){
							objectSSControl.imagesManager();
						}
					};
					document.onreadystatechange = newonready;
				}
				else{
					document.onreadystatechange = function(){
						if(document.readyState == "complete"){
							objectSSControl.imagesManager();
						}
					};
				}
			}
		}
	}
    return this;
};
SocialShare.prototype = {
    link: "",
    type: null,
    imageClass: null,
    themeUrl: null,
    theme: "default",
    invertTheme: null,
    images: null,

    strip: function(html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html.replace("\\n", " ");
        return tmp.textContent || tmp.innerText || "";
    },

    facebook: function(url, image, title, summary) {
        summary = this.strip(summary);
        this.link = "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + url + "&p[images][0]=" + encodeURIComponent(image) + "&p[title]=" + encodeURIComponent(title) + "&p[summary]=" + encodeURIComponent(summary);
        this.type = "facebook";
        this.publish();
    },
    twitter: function(text, url) {
        text = this.strip(text);
        this.link = "http://twitter.com/share?text=" + encodeURIComponent(text) + "&url=" + url;
        this.type = "twitter";
        this.publish();
    },
    linkedin: function(url, title, summary) {
        summary = this.strip(summary);
        this.link = "http://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + "&summary=" + summary;
        this.type = "linkedin";
        this.publish();
    },
    googleplus: function(url) {
        this.link = "https://plus.google.com/share?url=" + url;
        this.type = "googleplus";
        this.publish();
    },
    googlebookmark: function(url, title, summary) {
        this.link = "http://www.google.com/bookmarks/mark?op=edit&bkmk=" + url + "&title=" + title + "&annotation=" + summary;
        this.type = "googlebookmark";
        this.publish();
    },

    pinterest: function(url, image, summary) {
        this.link = "http://pinterest.com/pin/create/button/?url=" + url + "&media=" + encodeURIComponent(image) + "&description=" + summary;
        this.type = "pinterest";
        this.publish();
    },
    tumblr: function(url, title, summary, sharetype, image) {
        if (sharetype == "photo") {
            this.link = "http://www.tumblr.com/share/photo?source=" + encodeURIComponent(image) + "&caption=" + summary + "&click_thru=" + encodeURIComponent(url);
        } else {
            this.link = "http://www.tumblr.com/share/link?url=" + encodeURIComponent(url) + "&name=" + title + "&description=" + summary;
        }
        this.type = "tumblr";
        this.publish();
    },
    delicious: function(url, title, summary) {
        this.link = "http://delicious.com/post?url=" + url + "&title=" + title + "&notes=" + summary;
        this.type = "delicious";
        this.publish();
    },
    reddit: function(url, title) {
        this.link = "http://www.reddit.com/submit?url=" + url + "&title=" + title;
        this.type = "reddit";
        this.publish();
    },
    tapiture: function(url, title, imgUrl, imgTitle, width, height) {
        this.link = "http://tapiture.com/bookmarklet/image?img_src=" + imgUrl + "&page_url=" + url + "&page_title=" + title + "&img_title=" + imgTitle + "&img_width=" + width + "img_height=" + height;
        this.type = "tapiture";
        this.publish();
    },
    stumbleupon: function(url, title) {
        this.link = "http://www.stumbleupon.com/submit?url=" + url + "&title=" + title;
        this.type = "stumbleupon";
        this.publish();
    },
    newsvine: function(url, title) {
        this.link = "http://www.newsvine.com/_tools/seed&save?u=" + url + "&h=" + title;
        this.type = "newsvine";
        this.publish();
    },

    share: function(element) {
        if (this.imageClass != null) {
            this.imagesManager();
        }
        if (element.getAttribute("data-type") == "facebook") {
            url = element.getAttribute("data-url");
            image = element.getAttribute("data-image");
            title = element.getAttribute("data-title");
            summary = element.getAttribute("data-summary");
            this.facebook(url, image, title, summary);
        } else if (element.getAttribute("data-type") == "twitter") {
            text = element.getAttribute("data-text");
            url = element.getAttribute("data-url");
            this.twitter(text, url);
        } else if (element.getAttribute("data-type") == "linkedin") {
            url = element.getAttribute("data-url");
            title = element.getAttribute("data-title");
            summary = element.getAttribute("data-summary");
            this.linkedin(url, title, summary);
        } else if (element.getAttribute("data-type") == "googleplus") {
            url = element.getAttribute("data-url");
            this.googleplus(url);
        } else if (element.getAttribute("data-type") == "googlebookmark") {
            url = element.getAttribute("data-url");
            title = element.getAttribute("data-title");
            summary = element.getAttribute("data-summary");
            this.googlebookmark(url, title, summary);
        } else if (element.getAttribute("data-type") == "pinterest") {
            url = element.getAttribute("data-url");
            image = element.getAttribute("data-image");
            summary = element.getAttribute("data-summary");
            this.pinterest(url, image, summary);
        } else if (element.getAttribute("data-type") == "tumblr") {
            url = element.getAttribute("data-url");
            sharetype = element.getAttribute("data-share-type");
            image = element.getAttribute("data-image");
            title = element.getAttribute("data-title");
            summary = element.getAttribute("data-summary");
            this.tumblr(url, title, summary, sharetype, image);
        } else if (element.getAttribute("data-type") == "delicious") {
            url = element.getAttribute("data-url");
            title = element.getAttribute("data-title");
            summary = element.getAttribute("data-summary");
            this.delicious(url, title, summary);
        } else if (element.getAttribute("data-type") == "reddit") {
            url = element.getAttribute("data-url");
            title = element.getAttribute("data-title");
            this.reddit(url, title);
        } else if (element.getAttribute("data-type") == "tapiture") {
            url = element.getAttribute("data-url");
            title = element.getAttribute("data-title");
            imgUrl = element.getAttribute("data-image");
            imgTitle = element.getAttribute("data-image-title");
            width = element.getAttribute("data-image-width");
            height = element.getAttribute("data-image-height");
            this.tapiture(url, title, imgUrl, imgTitle, width, height);
        } else if (element.getAttribute("data-type") == "stumbleupon") {
            url = element.getAttribute("data-url");
            title = element.getAttribute("data-title");
            this.stumbleupon(url, title);
        } else if (element.getAttribute("data-type") == "newsvine") {
            url = element.getAttribute("data-url");
            title = element.getAttribute("data-title");
            this.newsvine(url, title);
        }
    },

    publish: function() {
        if (this.link != "") {
            $params = "";
            if (this.type == "tumblr") {
                $params = "toolbar=0,status=0,width=800,height=500";
            }
            else if (this.type == "googleplus") {
                $params = "toolbar=0,status=0,width=600,height=600";

            } else {
                $params = "toolbar=0,status=0,width=626,height=436";
            }
            window.open(this.link.replace(/(<([^>]+)>)/ig, ""), 'sharer', $params);
            this.link = "";
        }
    },

    imagesManager: function() {
        var elems = document.getElementsByTagName('a'), i;
        if (this.themeUrl == null) {
            for (i in elems) {
                if ((elems[i].className + "").indexOf(this.imageClass) > -1) {
                    elems[i].getElementsByTagName('img')[0].src = elems[i].getAttribute("data-image-button");
                    elems[i].onmouseover = function() {
                        this.getElementsByTagName('img')[0].src = this.getAttribute("data-image-button-over");
                    };
                    elems[i].onmouseout = function() {
                        this.getElementsByTagName('img')[0].src = this.getAttribute("data-image-button");
                    };
                }
            }
        } else {
            var parent = this;
            var path = this.themeUrl + "/" + this.theme + "/";
            this.images = new Array();
            for (i in elems) {
                if ((elems[i].className + "").indexOf(this.imageClass) > -1) {
                    if (this.invertTheme != null) {
                        this.images.push(new Image());
                        this.images[this.images.length - 1].src = path + elems[i].getAttribute("data-type") + ".png";
                        elems[i].getElementsByTagName('img')[0].src = path + elems[i].getAttribute("data-type") + "over.png";
                        elems[i].onmouseover = function() {
                            this.getElementsByTagName('img')[0].src = path + this.getAttribute("data-type") + ".png";
                        };
                        elems[i].onmouseout = function() {
                            this.getElementsByTagName('img')[0].src = path + this.getAttribute("data-type") + "over.png";
                        };
                    } else {
                        this.images.push(new Image());
                        this.images[this.images.length - 1].src = path + elems[i].getAttribute("data-type") + "over.png";
                        elems[i].getElementsByTagName('img')[0].src = path + elems[i].getAttribute("data-type") + ".png";
                        elems[i].onmouseover = function() {
                            this.getElementsByTagName('img')[0].src = path + this.getAttribute("data-type") + "over.png";
                        };
                        elems[i].onmouseout = function() {
                            this.getElementsByTagName('img')[0].src = path + this.getAttribute("data-type") + ".png";
                        };
                    }
                }
            }
        }
    }
};
