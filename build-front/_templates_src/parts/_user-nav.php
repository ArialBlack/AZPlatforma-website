<section class="block user-nav clearfix">
    <ul>
        <?php if ($user->uid): ?>
            <li><a href="/<?php print $lang; ?>/downloads"><i class="fa fa-download"></i></a></li>
            <li><a href="/<?php print $lang; ?>/join" title="<?php print "Join"; ?>"><?php print "Join"; ?></a></li>
            <li class="break"></li>
            <li><a href="/<?php print $lang; ?>/user" title="<?php print t("User account"); ?>"><i class="fa fa-user"></i></a></li>
            <li><a href="/<?php print $lang; ?>/user/logout" title="<?php print t("Logout"); ?>"><i class="fa fa-sign-out"></i></a></li>
        <?php endif; ?>

        <?php if (!$user->uid): ?>
            <li><a href="/<?php print $lang; ?>/downloads"><i class="fa fa-download"></i></a></li>
            <li><a href="/<?php print $lang; ?>/user/login?destination=join" title="<?php print "Join"; ?>"><?php print "Join"; ?></a></li>
        <?php endif; ?>
    </ul>
    <?php if (sizeof(uc_cart_get_contents()) > 0): ?>
        <ul class="ucart">
            <li><a href="/<?php print $lang; ?>/cart"><i class="fa fa-cart-arrow-down"></i></a></li>
        </ul>
    <?php endif; ?>
</section>