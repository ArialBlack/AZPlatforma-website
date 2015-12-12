<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
global $user;
 global $language ;
 $lang = $language->language;
?>
<div class="video_overlay"></div>
<div id="page">
    <header id="navbar" role="banner" class="navbar navbar-default"> 
      <div class="padding"> 
        <div class="navbar-header">
          <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
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
    <?php /*?>          <?php if (!empty($secondary_nav)): ?>
                <?php print render($secondary_nav); ?>
              <?php endif; ?><?php */?>
              <?php if (!empty($page['navigation'])): ?>
                <?php print render($page['navigation']); ?>
              <?php endif; ?>
              <div class="region region-navigation">
                  <section class="block user-nav clearfix">  
                      <ul>
                      <?php if ($user->uid): ?>  
                            <li><a href="/<?php print $lang; ?>/join" title="<?php print "Join"; ?>"><?php print "Join"; ?> <i class="fa fa-plug"></i></a></li>
                            <li><a href="/<?php print $lang; ?>/user" title="<?php print t("User account"); ?>"><i class="fa fa-user"></i></a></li>
                            <li><a href="/<?php print $lang; ?>/user/logout" title="<?php print t("Logout"); ?>"><i class="fa fa-sign-out"></i></a></li>
                      <?php endif; ?>
                      
                       <?php if (!$user->uid): ?>
                            <li><a href="/<?php print $lang; ?>/user/login?destination=join" title="<?php print "Join"; ?>"><?php print "Join"; ?> <i class="fa fa-plug"></i></a></li>
                      <?php endif; ?>        
                      </ul>
                      <?php if (sizeof(uc_cart_get_contents()) > 0): ?>
                        <ul class="ucart">
                            <li><a href="/<?php print $lang; ?>/cart"><i class="fa fa-cart-arrow-down"></i></a></li> 
                        </ul>
                      <?php endif; ?>
                  </section>
              </div>
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
    
  
        
    <div id="mcw">
        <div class="main-container container XLcontainer">
        
          <header role="banner" id="page-header">
        
            <?php print render($page['header']); ?>
          </header> <!-- /#page-header -->
        
          <div class="row">
        
            <?php if (!empty($page['sidebar_first'])): ?>
              <aside class="col-sm-4" role="complementary">
                <?php print render($page['sidebar_first']); ?>
              </aside>  <!-- /#sidebar-first -->
            <?php endif; ?>
        
            <section<?php print $content_column_class; ?>>
              <?php if (!empty($page['highlighted'])): ?>
                <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
              <?php endif; ?>
              <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
              <a id="main-content"></a>

              <?php print $messages; ?>
              <?php if (!empty($tabs)): ?>
                <?php print render($tabs); ?>
              <?php endif; ?>
              <?php if (!empty($page['help'])): ?>
                <?php print render($page['help']); ?>
              <?php endif; ?>
              <?php if (!empty($action_links)): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>
              <?php endif; ?>
              <?php print render($page['content']); ?>
    
    
            </section>
        
            <?php if (!empty($page['sidebar_second'])): ?>
              <aside class="col-sm-4" role="complementary">
                <?php print render($page['sidebar_second']); ?>
              </aside>  <!-- /#sidebar-second -->
            <?php endif; ?>
            
            <?php if (!empty($page['content_bottom'])): ?>
                <?php print render($page['content_bottom']); ?>
            <?php endif; ?>
        
          </div>
        </div>
    </div>
</div>
<footer id="footer">
    <div  class="footer container XLcontainer">
      <div class="col col-sm-4 col-1">
        <?php print render($page['footer_first']); ?>
      </div>
        <div class="col col-sm-4 col-2">
        
        <a href="#" data-toggle="modal" data-target="#modalMap"><i class="fa fa-map-marker"></i> <span><?php print t("Map"); ?></span></a>
        <a href="/events"><i class="fa fa-calendar"></i> <span><?php print t("Calendar"); ?></span></a>
        </div>
      <div class="col col-sm-4 col-3">
      <?php print render($page['footer_third']); ?>
    </div>
    </div>
</footer>


<!-- Modal -->
<div class="myModal modal fade" id="modalMap" tabindex="-1" role="dialog" aria-labelledby="modalMaplLabel">
  <div class="modal-dialog container XLcontainer" role="document">  
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
        <h4 class="modal-title" id="modalMap">Modal title</h4>
      </div>
      <div class="modal-body">
         
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.944031702218!2d30.638141451461397!3d50.46076689440154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daaee41f7ce5%3A0x3735bc69913d8fa4!2z0JDRgNGCINC30LDQstC-0LQ!5e0!3m2!1sru!2sua!4v1444982721407" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>    
            
      </div>
    </div>
  </div>
</div> 