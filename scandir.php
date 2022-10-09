<?php

$dir    = '.';
$files = scandir($dir);

$find = '  <div class="footer footer-3">' . "\n";

$replace = '  <div id="block-pico-managedad-2" class="block block-adsense block-adsense-managed-ad-block" style="height: auto !important;">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3898965573397574" crossorigin="anonymous"></script>
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3898965573397574" data-ad-slot="2719515034" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>
  <div class="footer footer-3">' . "\n";

foreach($files as $f) {
  if ($f == '.' || $f == '..')
    continue;
  $c = file_get_contents($f);
  $c = str_replace($find, $replace, $c);
  file_put_contents($f, $c);
}
