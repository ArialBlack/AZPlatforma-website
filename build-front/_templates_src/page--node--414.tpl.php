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

    <!--(bake parts/header.php)-->

    <div id="mcw">
        <div class="main-container">

            <header role="banner" id="page-header">

                <?php print render($page['header']); ?>
            </header> <!-- /#page-header -->

            <div class="">
                <div class="region region-content">
                    <section id="azpLocation">

                        <div class="azp-location">
                            <div class="azp-location-wrap">
                                <div class="c">
                                    <p>Общая территория «Арт-завода Платформа» – <b>120 000 м<sup>2</sup></b><br>.
                                        Рабочее пространство (офисы, коворкинг) –  <b>25 000 м<sup>2</sup></b><br>.
                                        Закрытые выставочные площадки, мастерские, галереи, арт-пространства – <b>16 000 м<sup>2</sup></b><br>.
                                        Ивент-пространства для проведения фестивалей, конференций, хакатонов, концертов и маркетов – <b>60 000 м<sup>2</sup></b><br>.
                                        Пространства для отдыха и развлечений – <b>10 000 м<sup>2</sup></b><br>.
                                    </p>
                                </div>
                                <div class="links">
                                    <a href="#mapImage" class="azp-button">Детальнее</a>
                                    <a href="/sites/default/files/Loft_presentation_mini.pdf" target="_blank">Скачать PDF</a>
                                </div>
                            </div>
                        </div>

                        <div id="mapImage">
                            <div class="imgContainer">
                                <img src="/sites/all/themes/azp/images/azp-map.svg" width="1920px" height="1357px" border="0" usemap="#Map" />
                                <img src="/sites/all/themes/azp/images/azp-map-legend.svg" width="1920px" height="1357px" border="0" />

                                <map name="Map" id="Map">
                                    <?php $node_1 = node_load(502); ?> <!-- 566 -->
                                    <area data-toggle="modal" data-target="#modalPlace-1" alt="<?php print $node_1->title; ?>" title="<?php print $node_1->title; ?>" href="#mapImage" shape="poly" coords="902,858,902,801,546,593,487,620,487,671,834,887,834,869,842,862,870,878" />

                                    <?php $node_2 = node_load(501); ?> <!-- 565 -->
                                    <area data-toggle="modal" data-target="#modalPlace-2" shape="poly" coords="939,788,1013,744,1014,695,906,638,832,678,832,727" alt="<?php print $node_2->title; ?>" title="<?php print $node_2->title; ?>" href="#mapImage">

                                    <?php $node_31 = node_load(497); ?> <!-- 561 -->
                                    <area data-toggle="modal" data-target="#modalPlace-31" shape="poly" coords="1129,721,1181,689,1181,631,824,460,770,484,770,537" alt="<?php print $node_31->title; ?>" title="<?php print $node_31->title; ?>" href="#mapImage">

                                    <?php $node_32 = node_load(498); ?> <!-- 564 -->
                                    <area data-toggle="modal" data-target="#modalPlace-32" shape="poly" coords="1262,641,1314,610,1313,551,1005,416,950,442,951,495,1035,534,1091,505,1102,509,1102,566,1107,568,1119,556,1152,550,1222,581,1222,622" alt="<?php print $node_32->title; ?>" title="<?php print $node_32->title; ?>" href="#mapImage">

                                    <?php $node_33 = node_load(499); ?> <!-- 563 -->
                                    <area data-toggle="modal" data-target="#modalPlace-33" shape="poly" coords="1392,561,1444,530,1444,475,1137,351,1084,377,1084,428,1169,464,1225,436,1235,440,1235,493" alt="<?php print $node_33->title; ?>" title="<?php print $node_33->title; ?>" href="#mapImage">

                                    <?php $node_4 = node_load(1084); ?> <!-- 1085 -->
                                    <area data-toggle="modal" data-target="#modalPlace-4" shape="poly" coords="1153,550,1120,556,1087,586,1155,619,1181,631,1182,646,1222,623,1222,581" alt="<?php print $node_4->title; ?>" title="<?php print $node_4->title; ?>" href="#mapImage">

                                    <?php $node_5 = node_load(504); ?> <!-- 568 -->
                                    <area data-toggle="modal" data-target="#modalPlace-5" shape="poly" coords="1357,686,1358,620,1464,553,1509,572,1510,637,1405,707"  alt="<?php print $node_5->title; ?>" title="<?php print $node_5->title; ?>" href="#mapImage">

                                    <?php $node_6 = node_load(505); ?> <!-- 569 -->
                                    <area data-toggle="modal" data-target="#modalPlace-6" shape="poly" coords="866,480,824,459,946,403,985,424,950,441,950,493,922,507" alt="<?php print $node_6->title; ?>" title="<?php print $node_6->title; ?>" href="#mapImage">

                                    <?php $node_7 = node_load(506); ?> <!-- 570 -->
                                    <area data-toggle="modal" data-target="#modalPlace-7" shape="poly" coords="946,402,986,424,1004,415,1060,440,1084,428,1084,377,1135,351,1094,334" alt="<?php print $node_7->title; ?>" title="<?php print $node_7->title; ?>" href="#mapImage">

                                    <?php $node_8 = node_load(503); ?> <!-- 567 -->
                                    <area data-toggle="modal" data-target="#modalPlace-8" shape="poly" coords="721,659,721,624,762,588,797,586,861,619,862,655,785,695" alt="<?php print $node_8->title; ?>" title="<?php print $node_8->title; ?>" href="#mapImage">

                                    <?php $node_9 = node_load(496); ?> <!-- 560 -->
                                    <area data-toggle="modal" data-target="#modalPlace-9" shape="poly" coords="571,597,693,540,772,583,660,647" alt="<?php print $node_9->title; ?>" title="<?php print $node_9->title; ?>" href="#mapImage">

                                    <?php $node_10 = node_load(495); ?> <!-- 559 -->
                                    <area data-toggle="modal" data-target="#modalPlace-10" shape="poly" coords="449,544,522,588,771,473,746,460,743,467,739,471,739,482,734,482,733,472,728,467,725,457,721,461,721,471,716,472,716,462,711,457,709,449,706,452,707,463,701,463,701,453,696,448,693,441,691,443,691,454,686,454,686,443,683,442,545,504,545,516,545,531,544,543,541,553,537,558,534,563,533,573,529,572,529,563,524,558,521,548,517,552,517,563,512,563,512,552,508,548,504,540,502,543,502,554,496,553,496,543,492,539,489,531,486,533,487,544,481,544,481,534,479,532,477,531" alt="<?php print $node_10->title; ?>" title="<?php print $node_10->title; ?>" href="#mapImage">

                                    <?php $node_11 = node_load(500); ?> <!-- 562 -->
                                    <area data-toggle="modal" data-target="#modalPlace-11" shape="poly" coords="346,590,432,552,504,595,417,634" alt="<?php print $node_11->title; ?>" title="<?php print $node_11->title; ?>" href="#mapImage">

                                    <?php $node_12 = node_load(507); ?> <!-- 571 -->
                                    <area data-toggle="modal" data-target="#modalPlace-12" shape="poly" coords="367,470,367,434,612,337,646,335,682,369,683,374,680,380,677,388,675,399,675,410,676,418,676,427,677,431,540,491,534,488,531,490,527,493,525,486,520,481,516,477,510,482,509,476,504,471,501,468,495,472,493,466,489,462,486,460,482,461,478,467,474,474,472,484,471,500,471,513,472,519,434,537,396,514,397,488" alt="<?php print $node_12->title; ?>" title="<?php print $node_12->title; ?>" href="#mapImage">

                                    <?php $node_13 = node_load(1079); ?> <!-- 1080 -->
                                    <area data-toggle="modal" data-target="#modalPlace-13" shape="poly" coords="276,479,338,454,395,487,396,554,335,580,276,544"  alt='<?php print $node_13->title; ?>' title='<?php print $node_13->title; ?>' href="#mapImage">
                                </map>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

<!--(bake parts/footer.php)-->

<!--(bake parts/map-legend-modals.php)-->