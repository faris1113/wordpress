<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'T;8! DFD3pW5C3(B^7U{s3VC~A&0(W<R:8]YLbN[5kblt-S6^cN>};G&HVRGnFy9' );
define( 'SECURE_AUTH_KEY',  'i&d^v]ige9/hIO=W/lYdkbP%*j.CUyhA3XwZ|JGmm1;@Gz4YA$RqvpBu Db T+@)' );
define( 'LOGGED_IN_KEY',    'Ta&|v s!ik0sL]E2XH(>Zs/`*>h! a1IT:H 82ftaj!%#l,?6:}[jQ=pN-1bl@dL' );
define( 'NONCE_KEY',        'c6MZr#1R~-j~ZLH^S8Lrl(;=CeXzWy?;9/s9#4mM-Pq&NEyLsi+AP;TUKke*R<N<' );
define( 'AUTH_SALT',        ',/k5>zroA/k5e1$kV_}b!k>o/i6$@^?j?u0;P5 h^K;||4G`T|FnXYxxQ2)=n/W2' );
define( 'SECURE_AUTH_SALT', 'R)-U-NojYz?pK,<]Jae0K~kIo0Y%cq>POrg*O1WxJ/}qV,iz=gIj|9GN{)do(dk8' );
define( 'LOGGED_IN_SALT',   '-WUEW,WbfBv2*LRwz]!M;vb?M`yUsOg?y0mEVW_M#S*OSmwgK_sS;PL+5M>uo(0M' );
define( 'NONCE_SALT',       'DVSb!B|XG8XXnZ lH`IVADAKU:XEIieo<FbySQ48GtkM@tSL;W&a-_EaAD,*][3p' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
