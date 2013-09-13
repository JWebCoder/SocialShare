SocialShare
===========

JavaScript plugin to create sharing buttons

SocialShare 0.93 javascript plugin
-----------

In our days, everyone wants to share their website content to the most used Social Networks.

With this in mind, i’ve created a new JavaScript Plugin called SocialShare.

The objective is to simplify the process of sharing your content to the Social Networks, by calling only one function in JavaScript and let it do the rest.


Version 0.93 supports
-----------

For now, the plugin supports twelve Social Networks:

* Facebook
* Twitter
* Linkedin
* Google +
* Google bookmarks
* Pinterest
* Tumblr
* Delicious
* Reddit
* Tapiture
* Stumbleupon
* Newsvine

And the new feature Themes

This is how it works
-----------

First we need to create the object in JavaScript:

    var sharer = new SocialShare();

Simple right?

### Now let’s share something to facebook:

    <a href="javascript:void(0)" data-type="facebook" data-url="jwebcoder.wordpress.com" data-image="http://jwebcoder.files.wordpress.com/2013/07/jwebcoder.jpg" data-Title="JWebCoder - The blog you can't miss" data-summary="A blog with a little bit of everything in computer programming, applications, games, hardware, etc... Try, view and comment." onclick="sharer.share(this);">
        <img scr="facebook.png"/>
    </a>
    
Here we have five attributes:

* data-type - the social network to share too.
* data-url - the link you want to share.
* data-image - the image you want as a thumbnail.
* data-title - the title of the share.
* data-summary - the summary of the share.

Same thing happens with the other Social Networks.

### For twitter we have:

    <a href="javascript:void(0)" data-type="twitter" data-text="some text" data-url="url" onclick="sharer.share(this);">
        <img scr="smallTwitter.png"/>
    </a>

The attributes are:

* data-type - the social network to share too.
* data-text - the text that will be tweeted.
* data-url - the link you want to share.

### For linkedIn:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to share.
* data-title - the title to share.
* data-summary - the summary of the share.

### For google +:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.

### For google bookmarks:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.
* data-title - the title to share.
* data-summary - the summary of the share.

### For pinterest:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.
* data-image - the image you want as a thumbnail.
* data-summary - the summary of the share.

### For tumblr:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.
* data-title - the title to share.
* data-summary - the summary of the share.
* data-share-type - the type of share
	* photo - to share a photo
	* normal - to share a link

### For delicious:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.
* data-title - the title to share.
* data-summary - the summary of the share.

### For reddit:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.
* data-title - the title to share.

### For tapiture:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.
* data-title - the title to share.
* data-image - the image you want as a thumbnail.
* data-image-title - the image title you want as a thumbnail.
* data-image-width - the thumbnail width.
* data-image-height - the thumbnail height.

### For stumbleupon:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.
* data-title - the title to share.

### For newsvine:

The attributes are:

* data-type - the social network to share too.
* data-url - the link to be shared.
* data-title - the title to share.

The data-type attribute
--------

This is where we set where we want to share.

For now, the possible values are:

* facebook
* twitter
* linkedin
* googleplus
* googlebookmark
* pinterest
* tumblr
* delicious
* reddit
* tapiture
* stumbleupon
* newsvine

Themes
--------

In order to use the themes, we need to pass some data when we create the object.

	var sharer = new SocialShare({
		"imageManager":"shareButton",
		"themeUrl":"SSThemes",
		"theme":"default"
	});

This will enable the theme manager, and create the mouse over effect on the chosen share links.
The values:

* imageManager - a class used in all the share links.
* themeUrl - the relative path to the theme folder (default value : SSThemes).
* theme - the default theme (default value : default).

Now all we need is to add the class we set in the constructor in the share link. Using twitter has example, we have this:

	<a href="javascript:void(0)" data-type="twitter" class="shareButton" data-text="some text" data-url="url" onclick="sharer.share(this);>
		<img />
	</a>


As you can see, there's no need to put in the image source, that is because we are using a theme now.

Function list
--------

Callable functions you can use to share to the different social networks.

They are not meant to be used, has they are inner functions used by the plugin, however, if you want a more direct approach, you can still use them.

### The functions are:

* new SocialShare().facebook(url,imageLink,tittle,content);
* new SocialShare().twitter(text);
* new SocialShare().linkedin(url,title,content);
* new SocialShare().googleplus(url);
* new SocialShare().googlebookmark(url,title,summary);
* new SocialShare().pinterest(url,image,content);
* new SocialShare().tumblr(url,title,summary);
* new SocialShare().delicious(url,title,summary);
* new SocialShare().reddit(url,title);
* new SocialShare().tapiture(url,title,imgUrl,imgTitle,width,height);
* new SocialShare().stumbleupon(url,title);
* new SocialShare().newsvine(url,title);
* new SocialShare().share([HTML Element]);

If you have any other Social Networks you want me to had, or any doubt about the plugin , just say so.

You can find me in [facebook](https://www.facebook.com/JWebCoder) or [Twitter](https://twitter.com/JWebCoder)
