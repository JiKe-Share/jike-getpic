<?php   if ( ! defined( 'ABSPATH' )  ) { die; } 
/*
 * 即刻取图API
 * Author: CYC
 * WeChat: code0223
 * URL: https://www.wxshare.com/
 * Copyright 2022 www.wxshares.com All rights reserved.
 */
 
require_once 'jike-api-controller.php';
class JikeApiPosts extends JikeApiController
{
	public function __construct()
	{
		parent::__construct();
		$this->module = 'posts';
	}
	public function register_routes()
	{
		//获取文章数据
		register_rest_route($this->namespace, '/' . $this->module . '/post', [
			[
			    'methods' => 'GET',
				'callback' => [$this, 'get_post'],
				'args' => [
					'id' => [
						'default' => 0,
						'description' => '文章ID',
						'type' => 'integer',
					],
				]
			]
		]);
        // 按照分类获取文章数据
        register_rest_route($this->namespace, '/' . $this->module . '/classpost', [
		[
			'methods' => 'GET',
			'callback' => [$this, 'get_classpost'],
			'args' => [
				'id' => [
					'default' => 0,
					'description' => '分类ID',
						'type' => 'integer',
					],
				'page' => [
					'default' => 0,
					'description' => '页数',
						'type' => 'integer',
					],
				]
			]
		]);
		 // 按标签（编号）获取文章数据
        register_rest_route($this->namespace, '/' . $this->module . '/tagspost', [
		[
			'methods' => 'GET',
			'callback' => [$this, 'get_tagspost'],
			'args' => [
				'id' => [
					'default' => 0,
					'description' => '标签id',
						'type' => 'integer',
					],
				'name' => [
					'default' => '',
					'description' => '标签名称',
						'type' => 'text',
					],
				'pt' => [
					'default' => 'wx',
					'description' => '平台',
						'type' => 'text',
				],
				'cid' => [
					'default' => 0,
					'description' => '分类ID',
						'type' => 'integer',
				],
				'page' => [
					'default' => 0,
					'description' => '页数',
						'type' => 'integer',
					],
				]
			]
		]);
		// 搜索
        register_rest_route($this->namespace, '/' . $this->module . '/search', [
		[
			'methods' => 'GET',
			'callback' => [$this, 'get_search'],
			'args' => [
				'key' => [
					'default' => '',
					'description' => '关键词',
						'type' => 'text',
					],
				]
			]
		]);
		// 搜索文章
        register_rest_route($this->namespace, '/' . $this->module . '/searchposts', [
		[
			'methods' => 'GET',
			'callback' => [$this, 'get_search_posts'],
			'args' => [
				'key' => [
					'default' => '',
					'description' => '关键词',
						'type' => 'text',
					],
				'page' => [
					'default' => 0,
					'description' => '页数',
						'type' => 'integer',
					],
				]
			]
		]);
	}
	/**
	 * 获取文章内容
	 */
	public function get_post($request)
	{
		$id = $this->get_parame($request,'id',0);
		$data = get_post($id,'ARRAY_A');
		$rdata = array();
		foreach ($data as $k=>$v){
		    $imginfo = $this->jike_get_post_images($data['post_content']);
		    $postcover = $this->jike_get_post_imageX($data['ID']); 
		    if($postcover){
                  $rdata['cover'] =  $postcover;
            }
            else{
                $rdata['cover'] =  $imginfo[1][0];
            }
		    $rdata['id'] = $data['ID'];
		    $rdata['title'] = $data['post_title'];
		    $rdata['dimgs'] =  $imginfo[2];
		    $rdata['date'] = $data['post_date'];
		    $rdata['images']=$imginfo[1];
		    $rdata['tags'] = get_the_tags($data['ID'])[0];
		    $rdata['tags']->cover = z_taxonomy_image_url($rdata['tags']->term_id);
		}
		return $this->return_success($rdata);
	}
	/**
	 * 获取分类下的文章
	 */
	public function get_classpost($request)
	{
		$cid = $this->get_parame($request,'id',0);
		$page = $this->get_parame($request,'page',0);
		$args = array(
		    'category' => $cid,
		    'numberposts' => $this->offset,
		    'offset' =>$this->offset*$page,
		    'orderby'=>'post_date',
		    'order'=> 'DESC',
		    'post_status'=> 'publish'
		);
		$cateinfo = get_category($cid);
		$posts = get_posts($args);
		$posts = json_decode(json_encode($posts),true);
		foreach ($posts as $key=>$val){
            $cover = $this->jike_get_post_imageX($posts[$key]['ID']);
            if($cover){
                 $posts[$key]['cover'] = $cover;
            }
            else{
                $posts[$key]['cover'] = $this->jike_getpost_first_img($posts[$key]['post_content']);
            }
        }
        $data['pages'] = ceil($cateinfo->count/$this->offset);
        $data['ctitle'] = $cateinfo->name;
        $data['posts'] = $posts;
		return $this->return_success($data);
	}
	/**
	 * 获取标签下的文章
	 */
	public function get_tagspost($request)
	{
		$tid = $this->get_parame($request,'id',0);
		$tname = $this->get_parame($request,'name',0);
		$page = $this->get_parame($request,'page',0);
		$pt = $this->get_parame($request,'pt',0);
		$cid =  $this->get_parame($request,'cid',0);
		$brgs = array(
		   'include'=>$tid
        );
        $showclass = $pt=='wx'?$this->option_value('wx-class-show'):$this->option_value('dy-class-show');
		$taginfo = get_tags($brgs,'ARRAY_A')[0];
		$taginfo = json_decode(json_encode($taginfo),true);
	    $taginfo['cover'] = z_taxonomy_image_url($taginfo['term_id']);
	    if($cid==0){
	        foreach ($showclass as $key=>$val){
	            $postcount = count(get_posts(array('category'=>$showclass[$key],'tag' => $tname,'numberposts' => -1)));
	            if(!empty($postcount)){
	                $taginfo['count'] = $postcount;
	                $taginfo['cindex'] = $key;
	            }
	        }
	         $caetID = $showclass[$taginfo['cindex']];
	    }
	    else{
	        $caetID = $cid;
	        $taginfo['count'] = count(get_posts(array('category'=>$caetID,'tag' => $tname,'numberposts' => -1)));
	    }
		if(empty($taginfo['count'])){
		    $taginfo['count'] = count(get_posts(array('category'=>$caetID,'tag' => $tname,'numberposts' => -1)));
		}
	    $args = array(
	        'category'=>$caetID,
		    'tag' => $tname,
		    'numberposts' => $this->offset,
		    'offset' =>$this->offset*$page,
		    'orderby'=>'post_date',
		    'order'=> 'DESC',
		    'post_status'=> 'publish'
		);
		$posts = get_posts($args);
		$posts = json_decode(json_encode($posts),true);
		foreach ($posts as $key=>$val){
            $cover = $this->jike_get_post_imageX($posts[$key]['ID']);
            if($cover){
                 $posts[$key]['cover'] = $cover;
            }
            else{
                $posts[$key]['cover'] = $this->jike_getpost_first_img($posts[$key]['post_content']);
            }
        }
        $data['cid'] = $caetID;
        $data['pages'] = ceil($taginfo['count']/$this->offset);
        $data['showclass'] = $this->get_show_class($showclass);
        $data['taginfo'] = $taginfo;
        $data['posts'] = $posts;
		return $this->return_success($data);
	}
	/**
	 * 搜索
	 */
	public function get_search($request){
	    $key = $this->get_parame($request,'key','');
	    $args = array(
            'name' => $key,
        );
        $data = get_tags($args);
        $rdata = array();
        if(empty($data)){
            $rdata = 'posts';
        }
        else{
            $rdata = $data[0];
        }
	    return $this->return_success($rdata);
	}
	/**
	 * 搜索文章
	 */
	public function get_search_posts($request){
	    $key = $this->get_parame($request,'key','');
	    $page = $this->get_parame($request,'page',0);
	    $args = array(
		   'numberposts' => $this->offset,
		   'offset' =>$this->offset*$page,
		    'orderby'=>'post_date',
		    'order'=> 'DESC',
		    's'=> $key,
		    'post_type' => ['post']
		);
		$posts = get_posts($args);
			$posts = json_decode(json_encode($posts),true);
		foreach ($posts as $key=>$val){
            $cover = $this->jike_get_post_imageX($posts[$key]['ID']);
            if($cover){
                 $posts[$key]['cover'] = $cover;
            }
            else{
                $posts[$key]['cover'] = $this->jike_getpost_first_img($posts[$key]['post_content']);
            }
        }
        $args['numberposts'] = -1;
	
		$data['posts'] = $posts;
		$data['pages'] = ceil(count(get_posts($args))/$this->offset);
	    return $this->return_success($data);
	}
	
	
}
