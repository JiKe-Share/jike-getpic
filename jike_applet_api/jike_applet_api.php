<?php 
/*
Plugin Name: jike_applet_api
Plugin URI: https://www.wxshares.com/
Description: 由<a href="https://www.wxshares.com/" taraget="_blank">极客分享</a>开发的小程序api接口插件，用于对接极客分享开发的前端小程序
Version: 1.0.0
Author: 极客分享
Author URI: https://www.wxshares.com/
Copyright 2022 www.wxshares.com All rights reserved.
*/
if (!defined('WPINC')) {
	die;
}

define('PLUGIN_NAME', 'jike_applet_api');
define('PLUGIN_PATH', plugin_dir_path(__FILE__));
define('A_URL', 'https://www.wxshares.com/');

require_once PLUGIN_PATH . 'admin/cf/codestar-framework.php';
require_once PLUGIN_PATH . 'include/JikeApi-init.php';
require_once PLUGIN_PATH . 'include/JikeApi-image.php';
register_activation_hook( __FILE__, 'jike_applet_api_run' );
register_deactivation_hook( __FILE__, 'jike_applet_api_stop' );
function jike_applet_api_run() {
}
function jike_applet_api_stop(){
}


$init = new JikeApi_init();
$init->init();

// require_once PLUGIN_PATH . 'admin/jike-api-uitls.php';
// $jikeapiuitls = new JikeApiUitls();
// $aaaa = $jikeapiuitls ->get_tags_list();
// var_dump($aaaa);
// die();



