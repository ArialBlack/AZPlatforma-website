<?php
/**
 * @file views-bootstrap-grid-plugin-style.tpl.php
 * Default simple view template to display Bootstrap Grids.
 *
 *
 * - $columns contains rows grouped by columns.
 * - $rows contains a nested array of rows. Each row contains an array of
 *   columns.
 * - $column_type contains a number (default Bootstrap grid system column type).
 *
 * @ingroup views_templates
 */
?>

<div id="views-bootstrap-grid-<?php print $id ?>" class="<?php print $classes ?>">
    <div class="row">
<?php $colsmd=1; $colslg=1; $colssm=1; $colsxs=1;
          foreach ($columns as $column): ?>
      <?php foreach ($column as $key => $row): ?>
        <div class="col col-lg-<?php print $options['col_lg'] ?> col-md-<?php print $options['col_md'] ?> col-sm-<?php print $options['col_sm'] ?> col-xs-<?php print $options['col_xs'] ?>">
          <?php print $row;?>
		</div>
<?php
              $colsrowlg = $colslg * $options['col_lg'];
              if ($colsrowlg==12){
                  $colslg=1;?>
			  	<div class="clearfix visible-lg"></div>
			  <?php
              }
              else
                  $colslg++;
          ?>
         <?php
              $colsrowmd = $colsmd * $options['col_md'];
              if ($colsrowmd==12){
                  $colsmd=1;?>
			  	<div class="clearfix visible-md"></div>
			  <?php
              }
              else
                  $colsmd++;
          ?>
          <?php
              $colsrowsm = $colssm * $options['col_sm'];
              if ($colsrowsm==12){
                  $colssm=1;?>
			  	<div class="clearfix visible-sm"></div>
			  <?php
              }
              else
                  $colssm++;
          ?>
          <?php
              $colsrowxs = $colsxs * $options['col_xs'];
              if ($colsrowxs==12){
                  $colsxs=1;?>
			  	<div class="clearfix visible-xs"></div>
			  <?php
              }
              else
                  $colsxs++;
          ?>
      <?php endforeach ?>
  <?php endforeach ?>
      </div>
</div>
