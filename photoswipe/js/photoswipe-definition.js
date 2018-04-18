window.onload=function(){
    $("body").append(`
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe.
         It's a separate element as animating opacity is faster than rgba(). -->
            <div class="pswp__bg"></div>

        <!-- Slides wrapper with overflow:hidden. -->
            <div class="pswp__scroll-wrap">

        <!-- Container that holds slides.
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
            <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

        <!--  Controls are self-explanatory. Order can be changed. -->

            <div class="pswp__counter"></div>

            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

            <button class="pswp__button pswp__button--share" title="Share" style="display:none"></button>

            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
        <!-- element will get class pswp__preloader--active when preloader is running -->
            <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
            <div class="pswp__preloader__cut">
            <div class="pswp__preloader__donut"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
            </div>

            </div>

            </div>

            </div>
            `)


    var photoElements=$('.article img');
    var photoNum=$('.article img').length;
    var srcUrl=[];
    for(var i=0;i<photoNum;i++){
        srcUrl.push({"src":photoElements[i].src,"w":photoElements[i].width,"h":photoElements[i].height})
    }
    function openPhotoSwipe(index){
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [];

        for(var i=0;i<srcUrl.length;i++){
            var item=srcUrl[i];
            items.push(item);
        }
        // define options (if needed)
        var options = {
            // history & focus options are disabled on CodePen
            index:index,
            history: false,
            focus: false,

            showAnimationDuration: 0,
            hideAnimationDuration: 0,
            shareButtons: false

        };

        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    }
    //    var openPhotoSwipe = function() {
    //
    //    };
    //
    //    openPhotoSwipe();
    $('.article img').click(function () {
        var index=null;
        var src=this.src;
//        console.log(src);
        var parent=$('.article img');
        for(var i=0;i<parent.length;i++){
            if(parent[i].src==src){
                index=i;
            }
        }

        openPhotoSwipe(index);
    })


}
