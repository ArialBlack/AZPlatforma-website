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
                    <div class="c text-center"><p class="text-center">Общая  территория «Арт-завод Платформа» -   120&nbsp;000 м2. <br>
                        Рабочее пространство  (офисы, коворкинг) - 25&nbsp;000 м2 <br>
                        Закрытые  выставочные площадки, мастерские, галереи, арт-пространства – 16000 м2<br>
                        Ивент-пространства  для проведения фестивалей, конференций, хакатонов, концертов и маркетов –  60&nbsp;000 м2<br>
                        Пространства  для отдыха и развлечений – 10&nbsp;000 м2</p></div>
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
        <h4 class="modal-title" id="modalMapTitle">Modal title</h4>
      </div>
      <div class="modal-body">
         
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.944031702218!2d30.638141451461397!3d50.46076689440154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daaee41f7ce5%3A0x3735bc69913d8fa4!2z0JDRgNGCINC30LDQstC-0LQ!5e0!3m2!1sru!2sua!4v1444982721407" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>    
            
      </div>
    </div>
  </div>
</div>

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
            <h3><span>1.</span> Парк</h3>
                
                <div class="col-sm-4">
                    <p>Наши жители, гости и друзья всегда могут прогуляться по парку и подышать свежим воздухом. На территории парка проходят мастер-классы, пре-пати, брейнсторминги, пикники и занятия спортом. </p>
                    <p>4500 м<sup>2</sup></p>
               </div>
               
               <div class="col-sm-8">
                    <img class="img-responsive" src="/sites/default/files/park.jpg" />
               </div>
               
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
                    <h3><span>2.</span>Территория отдыха</h3>
                    <div class="col-sm-4">
                        <p>С мая 2016 года на территории «Арт-завода Платформа» откроется зона для отдыха с бассейном, баром и площадкой для пляжного спорта, первых посетителей встретит йога-центр. Это «оазис в городе» для отдыха с семьей и друзьями в пределах мегаполиса. </p>
                        <p>Площадь – 2770 м2</p>
                        <p>Открытый басейн – 340 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/pop.jpg" />
                    </div>
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
                    <h3><span>Л 3.1 </span> Ивент-пространствор</h3>
                    <div class="col-sm-4">
                        <p>Первые этажи зданий используются под лектории, хакатоны, воркшопы, выставки и маркеты. Территория удобно трансформируется и ее можно делить на отдельные зоны для организации любого мероприятия.</p>
                        <p>Площадь - 3300 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/p1.jpg" />
                    </div>
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
                    <h3><span>3.2 Л3.2 </span> П2 Арт-пространство</h3>
                    <div class="col-sm-4">
                        <p>ЛЛ2 - Первые этажи зданий используются под презентации, выставки и маркеты. Территория удобно трансформируется и ее можно делить на отдельные зоны для организации пространств под спектакли, галереи и перформансы.</p>
                        <p>Площадь - 3600 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/p2.jpg" /> 
                    </div>
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
                    <h3><span>Л 3.3 </span> Творческие мастерские</h3>
                    <div class="col-sm-4">
                        <p>Творческие мастерские – душа нашего креативного кластера. 
Мы рады приветствовать мастеров, фотографов, ремесленников, художников и скульпторов. Мы открыты к арт-коллаборациям и другим совместным проектам. 
Наши гости и жители могут познакомиться с мастерами и наблюдать за процессом их работы. 
«Арт-завод Платформа» - место, где каждый может реализовать свои идеи.</p>
<p>Площадь - 4750 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/p3.jpg" />
                    </div>
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
                    <h3><span>3.4.</span> Галерея Космос</h3>
                    <div class="col-sm-4">
                        <p>Пространства для организации выставок, презентаций и воркшопов.<br>
550 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/p4.jpg" />
                    </div>
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
                    <h3><span>4.</span> Галерея Арт-Дом</h3>
                    <div class="col-sm-4">
                        <p>Территория Галереи Арт-Дом разделена на две части: 
- пространство для организации выставок, , фотосессий, лекториев и воркшопов
- атмосферный зал, который быстро и легко трансформируются под ваш формат события, таких как театральные перформансы, кинопоказы 
<br>
740 м2</p>
                    </div>
                    <div class="col-sm-8">    
                        <img class="img-responsive" src="/sites/default/files/artdom.jpg" />
                    </div>
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
                    <h3><span>6.</span> Л6</h3>
                    <div class="col-sm-4">
                        <p>Л6 – пространство для креативных офисов компаний от 50-ти сотрудников. Мы закладываем фундамент для большого расширенного коворкинга «Платформа», готовим конференц-залы, помещения для презентаций и мастер-классов. Крыша здания Л6 оборудуется под ночные вечеринки и кино-показы. <br>
Площадь -  17 770 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/l6.jpg" /> 
                    </div>
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
                    <h3><span>7.</span> Зеленая Лаунж Зона</h3>
                    <div class="col-sm-4">
                        <p>Пространство на открытом воздухе, прекрасно подходит для развлекательных и спортивные мероприятий. Наши гости и жители приходят сюда смотреть кино, читать, заниматься йогой, медитировать, участвовать в мастер-классах, встречах и вечеринках.<br>
Площадь - 2100 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/zl.jpg" />
                    </div>
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
                    <h3><span>8.</span> Коворкинг «Платформа»</h3>
                    <div class="col-sm-4">
                        <p>Коворкинг "Платформа" – это офис, который работает иначе! Современное рабочее пространство для представителей креативного бизнеса – от дизайн студий до ІТ компаний. Каждый коворкер становится частью коворкинга «Платформа». Несмотря на то, что мы все разные, нас всех объединяет желание изменить в лучшую сторону себя и окружающий нас мир.<br>
Площадь -  500 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/cw.jpg" />  
                    </div>
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
                    <h3><span>9.1</span> Пьяцца 1</h3>
                    <div class="col-sm-4">
                        <p>Пьяцца 1 - центральная площадь «Арт-завода Платформа». Пространство подходит под любой тип мероприятий – концерты, конференции, презентации, кинотеатры под открытым небом или арт-перформансы. Вместительность 5000 человек.<br>
2000 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                              <!-- Indicators -->
                              <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="5"></li>
                              </ol>
                            
                              <!-- Wrapper for slides -->
                              <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                   <img src="/sites/default/files/pj1.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                                <div class="item">
                                  <img src="/sites/default/files/pj2.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                                <div class="item">
                                  <img src="/sites/default/files/pj3.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                                <div class="item">
                                  <img src="/sites/default/files/pj4.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                                <div class="item">
                                  <img src="/sites/default/files/pj5.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                                <div class="item">
                                  <img src="/sites/default/files/pj6.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                              </div>
                              <!-- Controls -->
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                              </a>
                        </div>
                    </div>
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
                    <h3><span>9.2</span> Пьяцца 2</h3>
                    <div class="col-sm-4">
                        <p>Пьяцца 2 - открытое пространство для проведения развлекательных ивентов, встреч, нетворкинга, конференций и лекториев. В темное время суток здесь проводятся концерты и вечеринки. <br>
1800 м2</p>
                    </div>
                    <div class="col-sm-8">
                        <div id="carousel-example-generic2" class="carousel slide" data-ride="carousel">
                              <!-- Indicators -->
                              <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic2" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic2" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic2" data-slide-to="2"></li>
                                <li data-target="#carousel-example-generic2" data-slide-to="3"></li>
                              </ol>
                            
                              <!-- Wrapper for slides -->
                              <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                   <img src="/sites/default/files/pj1.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                                <div class="item">
                                  <img src="/sites/default/files/pj2.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                                <div class="item">
                                  <img src="/sites/default/files/pj5.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                                <div class="item">
                                  <img src="/sites/default/files/pj6.jpg" /> 
                                  <div class="carousel-caption">
                                  </div>
                                </div>
                              </div>
                              <!-- Controls -->
                              <a class="left carousel-control" href="#carousel-example-generic2" role="button" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic2" role="button" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                              </a>
                        </div>
                    </div>
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
                    <h3><span>21.</span>  Административное здание Арт-завода Платформа.</h3>
                    <div class="col-sm-4">
                        <p>Мы работаем для вас!</p>
                    </div>
                    <div class="col-sm-8">
                        <img class="img-responsive" src="/sites/default/files/admin.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



</div>