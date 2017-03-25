<header id="navbar" role="banner" class="navbar navbar-default">
    <div class="padding">
        <div class="navbar-header">
          <span id="bw">
              <button type="button" class="navbar-toggle">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <i class="fa fa-times"></i>
              </button>
          </span>
            <a class="logo navbar-btn text-center" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
            </a>
        </div>
        <div class="addNav pull-right">
            <nav role="navigation">
                <?php if (!empty($page['navigation'])): ?>
                    <?php print render($page['navigation']); ?>
                <?php endif; ?>
                <div class="region region-navigation"></div>
            </nav>
        </div>
        <?php if (!empty($primary_nav)): ?>
            <div class="navbar-collapse">
                <nav role="navigation">
                    <?php if (!empty($primary_nav)): ?>
                        <?php print render($primary_nav); ?>
                    <?php endif; ?>
                </nav>
            </div>
        <?php endif; ?>

        <div class="h1-container container XLcontainer">
            <?php print render($title_prefix); ?>
            <?php if (!empty($title)): ?>
                <h1 class="page-header"><?php print $title; ?></h1>
            <?php endif; ?>
            <?php print render($title_suffix); ?>
        </div>
    </div>
</header>