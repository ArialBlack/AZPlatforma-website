<div class="header-container">
    <header id="navbar" role="banner" class="navbar container navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <?php if ($logo): ?>
                    <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
                        <img class="inverse-logo" src="/sites/default/files/azp-logo-inverse.png" alt="<?php print t('Home'); ?>" />
                    </a>
                <?php endif; ?>

                <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
                <div class="navbar-collapse collapse">
                    <nav role="navigation">
                        <?php if (!empty($page['navigation'])): ?>
                            <?php print render($page['navigation']); ?>
                        <?php endif; ?>
                        <?php if (!empty($primary_nav)): ?>
                            <?php print render($primary_nav); ?>
                        <?php endif; ?>
                    </nav>
                </div>
            <?php endif; ?>
        </div>
    </header>
</div>