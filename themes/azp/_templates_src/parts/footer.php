<footer id="footer">
    <div  class="footer container XLcontainer">
        <div class="col col-sm-4 col-1">
            <?php print render($page['footer_first']); ?>
        </div>
        <div class="col col-sm-4 col-2">

            <a href="/<?php print $lang; ?>/contacts"><i class="fa fa-map-marker"></i> <span><?php print t("Map"); ?></span></a>
            <a href="/<?php print $lang; ?>/events"><i class="fa fa-calendar"></i> <span><?php print t("Calendar"); ?></span></a>
        </div>
        <div class="col col-sm-4 col-3">
            <?php print render($page['footer_third']); ?>
        </div>
    </div>
</footer>