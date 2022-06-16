<?php   if ( ! defined( 'ABSPATH' )  ) { die; } 
/*
 * 即刻取图API
 * Author: CYC
 * WeChat: code0223
 * URL: https://www.wxshare.com/
 * Copyright 2022 www.wxshares.com All rights reserved.
 */
   
 require_once PLUGIN_PATH . '/api/jike-api-wxset.php';
  require_once PLUGIN_PATH . '/api/jike-api-dyset.php';
  require_once PLUGIN_PATH . '/api/jike-api-ksset.php';
 require_once PLUGIN_PATH . '/api/jike-api-posts.php';
 class JikeApi_init{
     	public function __construct()
	    {
	       $this->load_class();
	    }
      public static function init(){
      
        
      }
      private function load_class(){
        add_action('rest_api_init', array(new JikeApiWxSet(),'register_routes'));
        add_action('rest_api_init', array(new JikeApiDySet(),'register_routes'));
         add_action('rest_api_init', array(new JikeApiKsSet(),'register_routes'));
        add_action('rest_api_init', array(new JikeApiPosts(),'register_routes'));
      }
  
      
 }