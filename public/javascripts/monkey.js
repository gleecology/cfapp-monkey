CloudFlare.define( 'monkey', [      'monkey/config',   'cloudflare/jquery1.7' ],
                        function(   cfg,               jQuery ){ 
    var  appName = 'monkey',
        $       = jQuery;

    cfg         = cfg || {};

    ['publisher_id', 'scroll', 'debug', 'user_pause_ttl', 'ss_view_max_ct', 'http_only', 'view_ttl' ].map(function(k){
        cfg[k] = parseInt(cfg[k], 10) || 0;
    });

    var D       = cfg.debug || 1;

    $(document).ready( function(){
        if(D) console.log('loaded config', cfg);
    });
} );
