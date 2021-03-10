@charset "UTF-8";

<?php

if(!function_exists('uchat_array2data')) {
    function uchat_array2data($arr) {
        $arr['time'] = time();
        ksort($arr);
        $arr = array_filter($arr);
        $arr['hash'] = md5(implode($arr['token'], $arr));
        unset($arr['token']);
        foreach ($arr as $k => &$v){ $v = $k.' '.urlencode($v); }
        return implode("|", $arr);
    }
}

$joinData = array();

$joinData['room'] = 'room-kmd2410';
$joinData['token'] = 'kmd2410';
$joinData['nick'] = $member['username'];
$joinData['id'] = 'kmd2410';
$joinData['level'] = '5';
$joinData['auth'] = 'member'; // (admin, subadmin, member, guest)중 하나선택, 미선택시 자동(권장)
$joinData['icons'] = '';
$joinData['nickcon'] = '';
$joinData['other'] = '';

?>