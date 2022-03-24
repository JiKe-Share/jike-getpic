<?php  if ( ! defined( 'ABSPATH' )  ) { die; } 
/*
 * 即刻取图API
 * Author: CYC
 * WeChat: code0223
 * URL: https://www.wxshare.com/
 * Copyright 2022 www.wxshares.com All rights reserved.
 */

class JikeApiController extends WP_REST_Controller{
    public $offset = '15';
    public function __construct()
	{
	    $this->namespace = 'jike/api/v1';
	    $this->offset = $this->option_value('page-offset');
	}
    public function jike_get_post_images($post_content){
        preg_match_all('|<img.*?src=[\'"](.*?)[\'"].*?>|i', do_shortcode($post_content), $matches);
        if($matches){
            foreach ($matches[1] as $key=>$val){
$matches[2][$key]=$this->hui_get_attachment_id_from_src(str_replace($this->option_value('oss-url'),$_SERVER['SERVER_NAME'],$matches[1][$key]));
            }
            return $matches;//自行var_dump($matches)就可以看到效果了。
        }else{
            return false;
        }
    }
	public function get_parame($data,$key,$devalue){
	    if($data->get_param($key)){
	        return $data->get_param($key);
	    }
	    return $devalue;
	}
	public function get_show_class($ids){
	    $args = array(
            'orderby' => '',
            'hide_empty'=>false,
            'order' => 'aSC',
            'hierarchical'=>false,
            'include'=>$ids
        );
         $data = get_categories($args);
         foreach ($data as $key=>$val){
                $redata[$key]['id'] = $val->cat_ID;
                $redata[$key]['name'] = $val->cat_name;
                $redata[$key]['cover'] = z_taxonomy_image_url($val->cat_ID);
         }
         return $data;
	}
	public function get_c_show($get,$ids)
	{
	     $args = array(
            'orderby' => '',
            'hide_empty'=>false,
            'order' => 'aSC',
            'hierarchical'=>false,
            'include'=>$ids
        );
         $redata=array();
        switch ($get) {
            case 'tags':
                $data = get_tags($args);
                 foreach ($data as $key=>$val){
                        $redata[$key]['id'] = $val->term_id;
                        $redata[$key]['name'] = $val->name;
                        $redata[$key]['cover'] = z_taxonomy_image_url($val->term_id);
                    }
                break;
            case 'class':
                $data = get_categories($args);
                 foreach ($data as $key=>$val){
                        $redata[$key]['id'] = $val->cat_ID;
                        $redata[$key]['name'] = $val->cat_name;
                        $redata[$key]['cover'] = z_taxonomy_image_url($val->cat_ID);
                        $redata[$key]['posts'] = $this->jike_get_post($val->cat_ID);
                    }
                break;
            default:
                break;
        }
        return $redata;
	}
	public function jike_get_post($CID){
	     global $wpdb;  
        $sql="SELECT ID,post_title,post_content FROM wp_posts,wp_term_relationships,wp_term_taxonomy WHERE ID=object_id and wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id and post_type='post' and post_status = 'publish' and wp_term_relationships.term_taxonomy_id = $CID and taxonomy = 'category' order by ID desc limit 6"; 
        $data = $wpdb->get_results($sql);
        $data = json_decode(json_encode($data),true);
        foreach ($data as $key=>$val){
            $cover = $this->jike_get_post_imageX($data[$key]['ID']);
            if($cover){
                 $data[$key]['cover'] = $cover;
            }
            else{
                $data[$key]['cover'] = $this->jike_getpost_first_img($data[$key]['post_content']);
            }
         }
        return $data;
	}
    //根据图片获取ID 	
    public function hui_get_attachment_id_from_src($link) {
        global $wpdb;
        $link = preg_replace('/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $link);
        return $this->jike_get_post_imageZ($wpdb->get_var("SELECT ID FROM {$wpdb->posts} WHERE guid='$link'"));
    }
    // 获取文章图片中等图
    public function jike_get_post_imageZ($id) {
	   return wp_get_attachment_image_src($id , 'medium')[0]; 
    }
    // 获取文章特色图大 
    public function jike_get_post_imageX($id) {
	   return wp_get_attachment_image_src(get_post_thumbnail_id($id), 'large')[0]; 
    }
	public function option_value($key)
    {
        $options = get_option('jike-api');
		if (isset($options[$key]) && !empty($options[$key])) {
			return $options[$key];
		}
		return false;
    }
    // 获取文章第一张缩略图
    public function jike_getpost_first_img($post_content) { 
        $first_img = ''; 
        $output = preg_match_all('/<img*.+src=[\'"]([^\'"]+)[\'"].*>/iU', $post_content, $matches); 
        if(empty($output))
        { 
            $first_img = "文章里连图都没有你发什么"; 
        }
        else 
        { 
            $first_img = $matches [1][0]; 
        } 
        return $first_img;
        
    }
   
	//成功返回
	public function return_success($data = null)
	{
		return $this->json(1, '成功！', $data);
	}
    //失败返回
	public function return_error($data = null)
	{
		return $this->json(0, '失败！', $data);
	}
	//返回值
	public function json($code, $msg, $data = null)
	{
		$response = [
			'code' => $code,
			'msg' => $msg,
		];

		if ($data !== null) {
			$response['data'] = $data;
		}

		return $response;
	}
}