<?php
/*
 * Plugin Name: WP Plugin
 * Plugin URI: http://wordpress.org/extend/plugins/jetpack/
 * Description: An example Plugin for WordPress
 * Author: Thomas P. Horton
 * Version: 0.0
 * Author URI: http://thomasphorton.com
 * License: MIT
 */

class WP_Plugin {
  public function __construct() {

    add_action('admin_init', array($this, 'admin_init'));
    add_action('admin_menu', array($this, 'admin_menu'));
  }

  public function admin_init() {

  }

  public function admin_menu() {
    add_menu_page(
      'WP Plugin',
      'WP Plugin',
      'edit_plugins',
      'wp-plugin',
      array($this, 'admin_page')
    );
  }

  public function admin_page() {
    include(dirname(__FILE__) . '/admin.php');
  }
}

$wp_plugin = new WP_Plugin();

?>