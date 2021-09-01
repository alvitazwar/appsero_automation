Feature('Appsero deactivation test');

Scenario('Deactivation', async({ I }) => {
    var data = {
        url: "https://hank.biz",
        site: "Legacy Factors Specialist",
        admin_email: "Deja.Jast85@hotmail.com",
        first_name: "Makenna",
        last_name: "Islam",
        hash: "d1a0129b-2049-4922-8133-ad300a9dd887",
        server: {
            software: "nginx/1.21.0",
            php_version: "7.4.21",
            mysql_version: "8.0.25",
            php_max_upload_size: "512 MB",
            php_default_timezone: "UTC",
            php_soap: "Yes",
            php_fsockopen: "Yes",
            php_curl: "Yes"
        },
        wp: {
            memory_limit: "40M",
            debug_mode: "Yes",
            locale: "en_US",
            version: "5.8",
            multisite: "No",
            theme_slug: "storefront",
            theme_name: "Storefront",
            theme_version: "3.6.0",
            theme_uri: "https://woocommerce.com/storefront/",
            theme_author: "Automattic"
        },
        users: {
            total: "10",
            administrator: "1",
            subscriber: "8",
            customer: "1"
        },
        active_plugins: "8",
        inactive_plugins: "5",
        ip_address: "103.108.147.143",
        project_version: "1.0",
        tracking_skipped: "0",
        reason_id: "did-not-work-as-expected",
        reason_info: null,
        client: "1.2.0"
    };
    const res = await I.sendPostRequest('https://api.appsero.com/deactivate', data);
    await I.assertEqual(res.status, 200);
    console.log(res.data);

});