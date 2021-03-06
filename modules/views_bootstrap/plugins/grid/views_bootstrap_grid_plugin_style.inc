<?php
/**
 * @file
 * Definition of views_bootstrap_plugin_style.
 */

/**
 * Class to define a style plugin handler.
 */
class ViewsBootstrapGridPluginStyle extends views_plugin_style {
  /**
   * Definition.
   */
  public function option_definition() {
    $options = parent::option_definition();
    $options['columns'] = array('default' => 3);
    $options['col_lg'] = array('default' => 3);
    $options['col_md'] = array('default' => 4);
    $options['col_sm'] = array('default' => 6);
    $options['col_xs'] = array('default' => 12);
    return $options;
  }

  /**
   * Form.
   */
  function options_form(&$form, &$form_state) {
    $options = array(1, 2, 3, 4, 6, 12);
    $form['columns'] = array(
      '#type' => 'select',
      '#title' => t('Number of columns'),
      '#default_value' => $this->options['columns'],
	        '#description' => t('Number of columns rendered per row.'),
      '#options' => array_combine($options, $options),
      '#required' => TRUE,
    );
   $form['col_lg'] = array(
      '#type' => 'select',
      '#title' => t('Large devices'),
      '#default_value' => $this->options['col_lg'],
      '#description' => t('col-lg-*'),
      '#options' => array_combine($options, $options),
      '#required' => TRUE,
    );
    $form['col_md'] = array(
     '#type' => 'select',
      '#title' => t('Medium devices'),
      '#default_value' => $this->options['col_md'],
      '#description' => t('col-md-*'),
      '#options' => array_combine($options, $options),
      '#required' => TRUE,
    );
    $form['col_sm'] = array(
      '#type' => 'select',
      '#title' => t('Small devices'),
      '#default_value' => $this->options['col_sm'],
      '#description' => t('col-sm-*'),
      '#options' => array_combine($options, $options),
      '#required' => TRUE,
    );
    $form['col_xs'] = array(
      '#type' => 'select',
      '#title' => t('Extra small devices'),
      '#default_value' => $this->options['col_xs'],
      '#description' => t('col-xs-*'),
      '#options' => array_combine($options, $options),
      '#required' => TRUE,
    );
  }
}
