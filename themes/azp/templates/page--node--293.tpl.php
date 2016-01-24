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
  if ($lang == 'uk') { $lang = 'ua'; }
?>
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
                            <li><a href="/join" title="<?php print "Join"; ?>"><?php print "Join"; ?> <i class="fa fa-plug"></i></a></li>
                            <li><a href="/user" title="<?php print t("User account"); ?>"><i class="fa fa-user"></i></a></li>
                            <li><a href="/user/logout" title="<?php print t("Logout"); ?>"><i class="fa fa-sign-out"></i></a></li>
                      <?php endif; ?>
                      
                       <?php if (!$user->uid): ?>
                            <li><a href="/user/login?destination=join" title="<?php print "Join"; ?>"><?php print "Join"; ?> <i class="fa fa-plug"></i></a></li>
                      <?php endif; ?>        
                      </ul>
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
              <div class="region region-content">
                <section id="azpLocation">
                    <div class="c text-center"><p class="text-center">Загальна територія «Арт-заводу Платформа» - 120 000 м<sup>2</sup><br>
                        Робочий/Діловий простір (офіси, коворкінг) - 25 000 м<sup>2</sup><br>
                        Закрытые  выставочные площадки, мастерские, галереи, арт-пространства – 16000 м<sup>2</sup><br>
                        Закриті виставкові майданчики, майстерні, галереї, арт-простори - 16000 м<sup>2</sup><br>
                        Івент-простори для проведення фестивалів, конференцій, хакатонів, концертів та маркетів - 60 000 м<sup>2</sup></p></div>
<div id="mapImage">
                        <div class="imgContainer">
                            <img class="mapImage" src="/sites/default/files/map.jpg" />
                            <a href="#" data-toggle="modal" data-target="#modalPlace1"><span data-x="810" data-y="170" class="mapDot badge">1</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace2"><span data-x="600" data-y="237" class="mapDot badge">2</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace31"><span data-x="1104" data-y="211" class="mapDot badge">3.1</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace32"><span data-x="1245" data-y="136" class="mapDot badge">3.2</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace33"><span data-x="1365" data-y="84" class="mapDot badge">3.3</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace34"><span data-x="1477" data-y="412" class="mapDot badge">3.4</span></a>
                                       
                            <a href="#" data-toggle="modal" data-target="#modalPlace4"><span data-x="1218" data-y="475" class="mapDot badge">4</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace6"><span data-x="994" data-y="404" class="mapDot badge">6</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace7"><span data-x="1005" data-y="300" class="mapDot badge">7</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace8"><span data-x="1651" data-y="499" class="mapDot badge">8</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace91"><span data-x="1186" data-y="202" class="mapDot badge">9.1</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace92"><span data-x="1312" data-y="153" class="mapDot badge">9.2</span></a>
                            <a href="#" data-toggle="modal" data-target="#modalPlace21"><span data-x="799" data-y="64" class="mapDot badge">21</span></a>
                        </div> 
                         
                    </div>
                </section> 
              </div> 
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
        
        <a href="/<?php print $lang; ?>/contacts"><i class="fa fa-map-marker"></i> <span><?php print t("Map"); ?></span></a>
        <a href="/<?php print $lang; ?>/events"><i class="fa fa-calendar"></i> <span><?php print t("Calendar"); ?></span></a>
        </div> 
      <div class="col col-sm-4 col-3">
      <?php print render($page['footer_third']); ?>
    </div>
    </div>
</footer>

<div id="mapLegend">

<div class="myModal normal modal fade" id="modalPlace1" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabel">
  <div class="modal-dialog container" role="document">  
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
        <h4 class="modal-title" id="modalPlace1">Парк</h4>
      </div>
      <div class="modal-body">
        <div class="place place1">
            <?php $nnode = node_load(514); ?>
            <h3><?php print $nnode->title; ?></h3>
            <?php
                $prepared_node = node_view($nnode, 'teaser');
                $rendered_teaser = render($prepared_node);
                print $rendered_teaser; 
             ?>
           </div> 
        </div>
    </div>
  </div>
</div>

<div class="myModal normal modal fade" id="modalPlace2" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe2">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace2">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place2">
                    <?php $nnode = node_load(515); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser; 
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace31" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe31">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace31">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place31">
                    <?php $nnode = node_load(516); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace32" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe32">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace32">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place32">
                    <?php $nnode = node_load(517); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace33" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe33">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace33">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place33">
                    <?php $nnode = node_load(518); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace34" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe34">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace34">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place34">
                    <?php $nnode = node_load(519); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace4" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe4">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace4">Галерея Арт-Дом</h4>
            </div>
            <div class="modal-body">
                <div class="place place4">
                    <?php $nnode = node_load(520); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace6" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe6">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace6">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place6">
                    <?php $nnode = node_load(521); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace7" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe7">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace7">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place7">
                    <?php $nnode = node_load(522); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace8" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe8">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace8">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place8">
                    <?php $nnode = node_load(523); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="myModal normal modal fade" id="modalPlace91" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe91">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace91">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place91">
                    <?php $nnode = node_load(524); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>     
</div>

<div class="myModal normal modal fade" id="modalPlace92" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe92"> 
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace92">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place92">
                    <?php $nnode = node_load(525); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>     
</div>

<div class="myModal normal modal fade" id="modalPlace21" tabindex="-1" role="dialog" aria-labelledby="modalPlacelLabe21">
    <div class="modal-dialog container" role="document">  
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace21">Pop-Up Beach</h4>
            </div>
            <div class="modal-body">
                <div class="place place21">
                    <?php $nnode = node_load(526); ?>
                    <h3><?php print $nnode->title; ?></h3>
                    <?php
                        $prepared_node = node_view($nnode, 'teaser');
                        $rendered_teaser = render($prepared_node);
                        print $rendered_teaser;  
                     ?>
                </div>
            </div>
        </div>
    </div>
</div>



</div>