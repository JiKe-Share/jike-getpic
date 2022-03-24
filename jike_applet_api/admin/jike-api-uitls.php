<?php  if ( ! defined( 'ABSPATH' )  ) { die; } 
/*
 * 即刻取图API
 * Author: CYC
 * WeChat: code0223
 * URL: https://www.wxshare.com/
 * Copyright 2022 www.wxshares.com All rights reserved.
 */
 
 class JikeApiUitls{
     public function __construct()
	 {
	 }
     public function get_top_class_list(){
        $args = array(
            'orderby' => '',
            'hide_empty'=>false,
            'order' => 'aSC',
            'hierarchical'=>false,
            
        );
        $class = get_categories($args);
        $reclass = array();
        foreach ($class as $key=>$val){
            $reclass[$val->cat_ID] = $val->cat_name;
        }
        return $reclass;
     }
     public function get_tags_list(){
        $args = array(
            'orderby' => '',
            'hide_empty'=>false,
            'order' => 'aSC',
            'hierarchical'=>false,
            
        );
        $tag = get_tags($args);
        $retag = array();
        foreach ($tag as $key=>$val){
            $retag[$val->term_id] = $val->name;
        }
        return $retag;
     }
     
 }