define('routes',
    ['core/router', 'core/settings', 'settings_app'],
    function(router, settings, settingsApp) {

    router.addRoutes([
        {'pattern': '^/(app.html|index.html)?$', 'view_name': 'homepage'},
        {'pattern': '^/app/([^/<>"\']+)/?$', 'view_name': 'app'},
        {'pattern': '^/app/([^/<>"\']+)/abuse$', 'view_name': 'app/abuse'},
        {'pattern': '^/app/([^/<>"\']+)/privacy$', 'view_name': 'app/privacy'},
        {'pattern': '^/app/([^/<>"\']+)/ratings$', 'view_name': 'app/ratings'},
        {'pattern': '^/app/([^/<>"\']+)/ratings/add$',
         'view_name': 'app/ratings/add'},
        {'pattern': '^/app/([^/<>"\']+)/ratings/edit$',
         'view_name': 'app/ratings/edit'},
        {'pattern': '^/app/([^/<>"\']+)/ratings/([^/<>"\']+)$',
         'view_name': 'app/ratings/rating'},
        {'pattern': '^/app/([^/<>"\']+)/receipt$', 'view_name': 'app/receipt'},
        {'pattern': '^/category/([^/<>"\']+)$', 'view_name': 'category'},
        {'pattern': '^/debug$', 'view_name': 'debug'},
        {'pattern': '^/debug/features$', 'view_name': 'debug_features'},
        {'pattern': '^/feed/(collection|editorial|shelf)/([^/<>"\']+)/?$',
         'view_name': 'feed_landing'},
        {'pattern': '^/feedback$', 'view_name': 'feedback'},
        {'pattern': '^/games/([^/<>"\']+)$', 'view_name': 'games/listing'},
        {'pattern': '^/langpacks/([^/<>"\']+)$', 'view_name': 'langpacks'},
        {'pattern': '^/new$', 'view_name': 'new'},
        {'pattern': '^/newsletter-signup$', 'view_name': 'newsletter_signup'},
        {'pattern': '^/popular$', 'view_name': 'popular'},
        {'pattern': '^/privacy-policy$', 'view_name': 'privacy'},
        {'pattern': '^/purchases$', 'view_name': 'purchases'},
        {'pattern': '^/recommended$', 'view_name': 'recommended'},
        {'pattern': '^/search/?$', 'view_name': 'search'},
        {'pattern': '^/settings$', 'view_name': 'settings'},
        {'pattern': '^/terms-of-use$', 'view_name': 'terms'},
        {'pattern': '^/usage$', 'view_name': 'usage'},
        {'pattern': '^/website/([^/<>"\']+)/?$', 'view_name': 'website'},
        {'pattern': '^/website/([^/<>"\']+)/issue/?$',
         'view_name': 'website/issue'},
    ]);

    // When this goes away we can remove settings_app from our deps.
    var search = '/api/v2/fireplace/search/?cache=1&vary=0';
    if (settings.meowEnabled) {
        search = '/api/v2/fireplace/multi-search/?cache=1&vary=0';
    }

    router.api.addRoutes({
        'account_info': '/api/v2/account/info/{0}',
        'app': '/api/v2/fireplace/app/{0}/?cache=1&vary=0',
        'app/privacy': '/api/v2/apps/app/{0}/privacy/?cache=1&vary=0',
        'app_abuse': '/api/v2/abuse/app/',
        'category': search + '&cat={0}',
        // consumer_info should be cached by the browser, never served by the
        // CDN, we can keep the Vary header.
        'consumer_info': '/api/v2/fireplace/consumer-info/?cache=1',
        'features': '/api/v2/apps/features/',
        'feed': '/api/v2/feed/get/?cache=21600&vary=0',
        'feed-app': '/api/v2/fireplace/feed/apps/{0}/?cache=1&vary=0',
        'feed-brand': '/api/v2/fireplace/feed/brands/{0}/?cache=1&vary=0',
        'feed-collection': '/api/v2/fireplace/feed/collections/{0}/?cache=1&vary=0',
        'feed-shelf': '/api/v2/fireplace/feed/shelves/{0}/?cache=1&vary=0',
        'feedback': '/api/v2/account/feedback/',
        'games-daily': '/api/v2/games/daily/',
        'installed': '/api/v2/account/installed/mine/',
        'langpacks': '/api/v2/langpacks/?cache=1&vary=0',
        'login': '/api/v2/account/login/',
        'logout': '/api/v2/account/logout/',
        'newsletter': '/api/v2/account/newsletter/',
        'payments_status': '/api/v2/webpay/status/{0}/',
        'prepare_nav_pay': '/api/v2/webpay/prepare/',
        'recommended': '/api/v2/apps/recommend/?cache=1',
        'record_free': '/api/v2/installs/record/',
        'record_paid': '/api/v2/receipts/install/',
        'region': '/api/v2/services/region/{0}/?cache=86400&vary=0',
        'regions': '/api/v2/services/region/',
        'review': '/api/v2/apps/rating/{0}/',
        'reviews': '/api/v2/apps/rating/',
        'search': search,
        'settings': '/api/v2/account/settings/mine/',
        'site-config': '/api/v2/services/config/site/?cache=1&serializer=commonplace&vary=0',
        'website': '/api/v2/websites/website/{0}/?cache=1&vary=0',
        'website_issue': '/api/v2/abuse/website/',
    });
});
