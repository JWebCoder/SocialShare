var SocialShare = function() {
    return this;
};
SocialShare.prototype = {
	link : "",
	type : null,
	
	facebook: function(url,image,title,summary) {
		this.link = "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + url + "&p[images][0]=" + image + "&p[title]=" + title + "&p[summary]=" + summary;
		this.type = "facebook";
		this.publish();
	},
	twitter: function(text,url) {
		this.link = "http://twitter.com/share?text=" + text + "&url=" + url;
		this.type = "twitter";
		this.publish();
	},
	linkedin: function(url,title,summary) {
		this.link = "http://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + "&summary=" + summary;
		this.type = "linkedin";
		this.publish();
	},
	google: function(url) {
		this.link = "https://plus.google.com/share?url=" + url;
		this.type = "google";
		this.publish();
	},
	pinterest: function(url,image,summary) {
		this.link = "http://pinterest.com/pin/create/button/?url=" + url + "&media=" + image + "&description=" + summary;
		this.type = "pinterest";
		this.publish();
	},
	share: function(element) {
		if(element.getAttribute("data-type") == "facebook"){
			url = element.getAttribute("data-url");
			image = element.getAttribute("data-image");
			title = element.getAttribute("data-title");
			summary = element.getAttribute("data-summary");
			this.facebook(url,image,title,summary);
		}else if(element.getAttribute("data-type") == "twitter"){
			text = element.getAttribute("data-text");
			url = element.getAttribute("data-url");
			this.twitter(text,url);
		}else if(element.getAttribute("data-type") == "linkedin"){
			url = element.getAttribute("data-url");
			title = element.getAttribute("data-title");
			summary = element.getAttribute("data-summary");
			this.linkedin(url,title,summary);
		}else if(element.getAttribute("data-type") == "google"){
			url = element.getAttribute("data-url");
			this.google(url);
		}else if(element.getAttribute("data-type") == "pinterest"){
			url = element.getAttribute("data-url");
			image = element.getAttribute("data-image");
			summary = element.getAttribute("data-summary");
			this.pinterest(url,image,summary);
		}
	},
	publish: function() {
		if(this.link != ""){
			$params = "";
			if(this.type != "google"){
				$params = "toolbar=0,status=0,width=626,height=436";
			}else if (this.type == "google"){
				$params = "toolbar=0,status=0,width=600,height=600";
			}
			window.open(this.link.replace(/(<([^>]+)>)/ig, ""), 'sharer',$params);
			this.link = "";
		}
	}
};