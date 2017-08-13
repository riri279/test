<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Applications/MAMP/htdocs/next-gen/user/plugins/email/email.yaml',
    'modified' => 1502389706,
    'data' => [
        'enabled' => true,
        'from' => NULL,
        'from_name' => NULL,
        'to' => NULL,
        'to_name' => NULL,
        'mailer' => [
            'engine' => 'smtp',
            'smtp' => [
                'server' => 'smtp.mailtrap.io',
                'port' => 2525,
                'encryption' => 'none',
                'user' => 'ff3bba0c90d8bc',
                'password' => '58ee72e7fef101'
            ],
            'sendmail' => [
                'bin' => '/usr/sbin/sendmail'
            ]
        ],
        'content_type' => 'text/html',
        'debug' => false
    ]
];
