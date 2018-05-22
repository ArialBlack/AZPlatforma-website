<div id="mapLegend">
    <!--(bake _map-modal.php num="1")-->

    <!--(bake _map-modal.php num="2")-->

    <!--(bake _map-modal.php num="31")-->

    <!--(bake _map-modal.php num="32")-->

    <!--(bake _map-modal.php num="33")-->

    <!--(bake _map-modal.php num="4")-->

    <!--(bake _map-modal.php num="5")-->

    <!--(bake _map-modal.php num="6")-->

    <!--(bake _map-modal.php num="7")-->

    <!--(bake _map-modal.php num="8")-->

    <!--(bake _map-modal.php num="9")-->

    <!--(bake _map-modal.php num="10")-->

    <!--(bake _map-modal.php num="11")-->

    <!--(bake _map-modal.php num="12")-->

    <!--(bake _map-modal.php num="13")-->

    <?php $node_1397 = node_load(1398); ?>

    <div class="myModal normal modal fade" id="modalPlace-map" tabindex="-1" role="dialog" aria-labelledby="modalPlacel-map">
      <div class="modal-dialog container" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
            <h4 class="modal-title" id="modalPlace-map"><?php print $node_1397->title; ?></h4>
          </div>
          <div class="modal-body">
            <div class="place place-map">
              <?php
              $prepared_node = node_view($node_1397, 'teaser');
              $rendered_teaser = render($prepared_node['field_photos']);
              print $rendered_teaser;
              ?>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>