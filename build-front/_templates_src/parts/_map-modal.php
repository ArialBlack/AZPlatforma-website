<div class="myModal normal modal fade" id="modalPlace-{{num}}" tabindex="-1" role="dialog" aria-labelledby="modalPlacel-{{num}}">
    <div class="modal-dialog container" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
                <h4 class="modal-title" id="modalPlace-{{num}}"><?php print $node_{{num}}->title; ?></h4>
            </div>
            <div class="modal-body">
                <div class="place place-{{num}}">
                    <h3><?php print $node_{{num}}->title; ?></h3>
                    <?php
                    $prepared_node = node_view($node_{{num}}, 'teaser');
                    $rendered_teaser = render($prepared_node);
                    print $rendered_teaser;
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>