<?php

/**
 * @file
 * Default theme implementation for a single paragraph item.
 *
 * Available variables:
 * - $content: An array of content items. Use render($content) to print them
 *   all, or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. By default the following classes are available, where
 *   the parts enclosed by {} are replaced by the appropriate values:
 *   - entity
 *   - entity-paragraphs-item
 *   - paragraphs-item-{bundle}
 *
 * Other variables:
 * - $classes_array: Array of html class attribute values. It is flattened into
 *   a string within the variable $classes.
 *
 * @see template_preprocess()
 * @see template_preprocess_entity()
 * @see template_process()
 */
$havebg = false;
if (isset($content['field_media'])) {
  $fid = $content['field_media']['#items'][0]['fid'];
  $file = file_load($fid);
  $uri = $file->uri;
  //$url = file_create_url($uri);
  $havebg = true;
  //dsm($uri);
  //print render($content['field_long_text']);
}
?>
<?php if ($havebg): ?>
<div class="<?php print $classes; ?>"<?php print $attributes; ?> data-img="<?php print image_style_url("bootstrap_imagefield_gallery_slide", $uri) ?>">
<?php endif; ?>

<?php if (!$havebg): ?>
<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
<?php endif; ?>

  <div class="content"<?php print $content_attributes; ?>>
    <?php
      //print render($content);
      //dsm($content);
      if (isset($content['field_media'])) {
        print render($content['field_long_text']);
      } else {
        print render($content);
      }
    ?>
  </div>
</div>
