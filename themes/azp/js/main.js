/* ==============================================
Bootstrap fix for WinPhone 8 and IE10 
=============================================== */

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  	var msViewportStyle = document.createElement("style")
  	msViewportStyle.appendChild(
    	document.createTextNode(
      		"@-ms-viewport{width:auto!important}"
    	)
  	)
  	document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

function detectIE() {
	if (jQuery.browser.msie && $.browser.version == 9) {
		return true;
	}
	if (jQuery.browser.msie && $.browser.version == 8) {
		return true;
	}
	return false;
}



function getWindowWidth() {
    return Math.max( jQuery(window).width(), window.innerWidth);
}

function getWindowHeight() {
    return Math.max( jQuery(window).height(), window.innerHeight);
}

jQuery.expr.filters.offscreen = function(el) {
  return (
              (el.offsetLeft + el.offsetWidth) < 0 
              || (el.offsetTop + el.offsetHeight) < 0
              || (el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight)
         );
};

function touchCarousel() {
        var swipeTreshold = 75,
            $carousel = jQuery('.carousel');

        $carousel.swipe( {
            swipeLeft: function(event, direction, distance, duration, fingerCount) {

                $carousel.carousel('next'); 
            },
            swipeRight: function() {
                $carousel.carousel('prev'); 
            },
            threshold: swipeTreshold
        });
}

function changeSomePath() {
    $link = jQuery('.what-we-do .view-we-have a[href$="coworking"]');
    if ($link.length > 0 ) {
        $link.attr("href", "http://coworkingplatforma.com/").attr('target','_blank');
    }
    
    jQuery('.tabs--primary.nav.nav-tabs li a[href$="ulogin"]').parents("li").addClass("ulogin-item-menu");

    imgsrc2 = jQuery("#block-views-news-block-2 .views-row-1 img").attr("src");
    
    jQuery("#block-views-news-block-2 .views-row-1 .views-field-img").css({'background-image': 'url(' + imgsrc2 + ')',});
   // jQuery("#block-views-news-block-2 .views-row-3 .views-field-img").css({'background-image': 'url(' + imgsrc3 + ')',});

    var $headerParagraph = jQuery('.not-front .paragraphs-item-landing-header'),
        $viewsCovers = jQuery('.view .cover-image');

    $headerParagraph.each(function() {
        var $this = jQuery(this),
            $url = $this.data('img');
        $this.addClass('cover-image').css('background-image', 'url("' + $url + '")');
    });

    $viewsCovers.each(function() {
        var $this = jQuery(this),
            $url = $this.data('img');
        $this.css('background-image', 'url("' + $url + '")');
    });
}

function wrapTablesResponsive() {
    jQuery('table').each(function() {
        $this = jQuery(this);
        if( $this.parent("div").not(".table-responsive")) {
            $this.addClass("table").wrap( "<div class='table-responsive'></div>" ); 
        }
    });
}

function showWebformComponents() {
    jQuery(".node-type-webform.join .webform-client-form a.btn").on('click', function(e) {
        jQuery(this).parents(".webform-client-form").addClass("showall");   
        jQuery(this).addClass("hide");
    });
    
    jQuery(".node-type-webform .webform-client-form .webform-submit").wrap( "<div class='webform-submit-container'></div>" );
    
    btn = jQuery(".node-type-webform.join .webform-client-form a.btn.showform").length;
    if (btn < 1) {
        jQuery(".node-type-webform.join .webform-client-form .webform-submit").addClass("show");
    }
}

function calendarCategoriesDots() {
    jQuery("#block-views-calendar-block-3 .views-field-field-event-term a").each(function (index) {
        var $this = jQuery(this),
            str = $this.attr('href'),
            last = str.substring(str.lastIndexOf("/") + 1, str.length);  
            $new_html = '<span class="event-dot ' + last + '"></span>';  
            $this.replaceWith($new_html);       
    });
    
      jQuery("#block-views-calendar-block-4 .item-list h3 a").each(function (index) {
        var $this = jQuery(this),
            str = $this.attr('href'),
            last = str.substring(str.lastIndexOf("/") + 1, str.length); 
            $this.parents("h3").addClass(last).addClass("our-event");                
    });
}

function imageDots() {
            jQuery('.mapDot').each(function() {
                
                var oiw=1920;
                var oih=960;
                
                ich= jQuery("#azpLocation .imgContainer").height();
                icw= jQuery("#azpLocation .imgContainer").width();
                
                _x= (jQuery(this).data('x'))*100/oiw;
                _y= (jQuery(this).data('y'))*100/oih;
                
                jQuery(this).css({
                    'left': _x + "%",
                    'top': _y + "%",
                });
            });
}

 
function sizeMeUp() {
    //bigNewsHeight = jQuery("#block-views-news-block-2 .views-row-1 .views-field-nothing").height();

    //newHeight = (bigNewsHeight / 2 ) - 20;
    //jQuery("#block-views-news-block-2 .views-row-2 .views-field-img, #block-views-news-block-2 .views-row-3 .views-field-img").css("height", newHeight+"px");

    eqBlockHeight ('.view-news-4-front .attachment .row', '.view-news-4-front .attachment .row .col');
    eqBlockHeight ('.view-id-events_4_main .attachment .row', '.view-id-events_4_main .attachment .row .col');
    eqBlockHeight ('.block-views-events-calendar-block-2 .row', '.block-views-events-calendar-block-2 .row .col');
    eqBlockHeight ('#block-views-events-calendar-block-2 .row', '#block-views-events-calendar-block-2 .row .col');
}

    var min_w = 300; // minimum video width allowed
    var vid_w_orig;  // original video dimensions
    var vid_h_orig;
    
function bg() {
    jQuery(".no-touch body.front #video-background" ).append('<video autoplay preload loop width="1920" height="1080" poster="/sites/all/themes/azp/images/front.jpg"><source src="/sites/all/themes/azp/video/video.mp4" type="video/mp4" /><source src="/sites/all/themes/azp/video/video.webm" type="video/webm" /><source src="/sites/all/themes/azp/video/video.ogv" type="video/webm" /></video>');
    vid_w_orig = parseInt(jQuery('video').attr('width'));
    vid_h_orig = parseInt(jQuery(' video').attr('height'));

    jQuery(window).resize(function () { resizeToCover(); });
    jQuery(window).trigger('resize');
}

function resizeToCover() {
    var $wh = jQuery(window).height();
    jQuery('#video-background').width(jQuery(window).width());
    jQuery('#video-background').height($wh);

    jQuery('.paragraphs-item-landing-header').height($wh);

    if(jQuery(window).width() < 767) {
        jQuery('.view-display-id-block_2 .views-field-img').height($wh + jQuery('.news .header-container').height() + 110);
    } else {
        jQuery('.view-display-id-block_2 .views-field-img').height($wh);
    }


    var scale_h = jQuery(window).width() / vid_w_orig;
    var scale_v = jQuery(window).height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    jQuery('video').width(scale * vid_w_orig);
    jQuery('video').height(scale * vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('#video-background').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
    //jQuery('#video-viewport').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);

    var $containerMargin = parseInt(jQuery('#navbar').css('margin-left'), 10);
    jQuery('.paragraphs-item-landing-header .field-name-field-long-text .field-items').css('padding-left', $containerMargin + 30 + 'px');
    jQuery('.view-news-4-front.view-id-news_4_front.view-display-id-block > .view-content .views-field-nothing').css('padding-left', $containerMargin + 30 + 'px');

    //jQuery('.news #block-views-news-block-2 .views-field-nothing .field-content .text-inner').css('top', jQuery('.news .header-container').height());
}

function eqBlockHeight (container, block_el, mode) {
            var $list = jQuery(container);
            var $items = jQuery(block_el);
            
            if (mode == 0) {
                $items.css( 'height', 'auto' );
            } else {
                $items.css( 'height', 'auto' );
                var perRow = Math.floor( $list.width() / $items.width() );
                if( perRow == null || perRow < 2 ) return true;
     
                for( var i = 0, j = $items.length; i < j; i += perRow )
                {
                    var maxHeight = 0,
                        $row = $items.slice( i, i + perRow );
     
                    $row.each( function()
                    {
                        var itemHeight = parseInt( jQuery( this ).outerHeight() );  
                        if ( itemHeight > maxHeight ) maxHeight = itemHeight;
                    });
                    $row.css( 'height', maxHeight );
                }
            }
}

function get_pagePosition($element) {
    var $page = jQuery($element);
    var window_offset = $page.offset().top - jQuery(window).scrollTop();    
    return window_offset;
}

function detectOnWhite() {
  if (get_pagePosition(".region.region-content") < 60) {  
      jQuery("body").addClass("on-white");
  }
  else jQuery("body").removeClass("on-white");
}

function _addCorners(userselector, type) {
    var $selector = jQuery(userselector);
    $selector.prepend('<span class="azp-corners azp-corners-' + type + ' azp-corner-top-left"></span><span class="azp-corners azp-corners-' + type + ' azp-corner-top-right"></span><span class="azp-corners azp-corners-' + type + ' azp-corner-bottom-left"></span> <span class="azp-corners azp-corners-' + type + ' azp-corner-bottom-right"></span>');
    $selector.addClass('azp-corners-container azp-corners-container-' + type);
}

function addCorners() {
    _addCorners('#block-views-news-block-2 .views-field-nothing .field-content .text-inner .text-wrap-inner .text-wrap .text-container .text-container-content', 'single');
    _addCorners('.azp-location-wrap .c', 'single');
    _addCorners('.not-front.about .paragraphs-item-p-teaser > .content', 'single');

    _addCorners('.not-front.about .paragraphs-item-landing-header > .content > .field > .field-items > .field-item', 'multiple');
    _addCorners('.events .view-id-events_calendar.view-display-id-block_1 .promo-event-inner', 'multiple');
}


jQuery(document).ready(function($) {
    addCorners();
    changeSomePath();  
    detectOnWhite();
    showWebformComponents();
    calendarCategoriesDots();
    touchCarousel();

    var onMapMouseleaveHandler = function (event) {
    var that = jQuery(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = jQuery(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  jQuery('.maps.embed-container').on('click', onMapClickHandler);
    
    jQuery(".view-events").on('views_load_more.new_content', function(event, content) {
        console.log("e");
        //hover_cards();  
        jQuery(".view .col:even").addClass("even");
        jQuery(".view .col:odd").addClass("odd");
    });
    
    jQuery(".view-news").on('views_load_more.new_content', function(event, content) {
        console.log("n"); 
       // hover_text();
        newsHideImgIfYoutube(); 
        jQuery(".view .col:even").addClass("even"); 
        jQuery(".view .col:odd").addClass("odd"); 
    });
    
    sizeMeUp();
    bg();
    wrapTablesResponsive();
    jQuery(".view .col:even").addClass("even");
    jQuery(".view .col:odd").addClass("odd");
    imageDots();
}); /*---------doc ready */


jQuery(window).resize(function () {
    detectOnWhite();
    sizeMeUp();
    imageDots();
});  

jQuery(window).scroll(function() { 
    detectOnWhite();

    if (jQuery(this).scrollTop() === 300) {
        jQuery('.paragraphs-item-landing-header').addClass('scrolled');
    }
});

jQuery(window).load(function() {
     sizeMeUp();
});







 