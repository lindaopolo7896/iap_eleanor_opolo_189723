<?php
require 'ClassAutoLoad.php';
$ObjLayout->header($config);
$ObjLayout->nav($config);
$ObjLayout->banner($config);
$ObjLayout->form_frame($config, $ObjForm);
$ObjLayout->footer($config);