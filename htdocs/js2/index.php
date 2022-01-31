<?php

error_reporting(0);
$d = __DIR__."/";
$h = opendir($d);
while($f = readdir($h))
{
    if($f == "." || $f == "..")continue;
    $tf = $d.$f;
    $t = pathinfo($tf);
    //print_r($t);
    if($t[extension]=="js")
    {
	$a = file_get_contents($tf);
	$t2 = $a[0];
	$t2 = trim($t2);
	if($t2 == "// 0")continue;
	$txt .= "// =========== $t[filename] =========\n";
	$txt .= $a."\n";
    }
}
print $txt;
?>