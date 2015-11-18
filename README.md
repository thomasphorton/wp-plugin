# wp-plugin
A WordPress plugin skeleton (and build system)

## Getting Started
My workspace is currently set up like this:
```
Repos
|- wordpress (a full WordPress install)
|- wp-plugin (this package)
```

So, starting at `Repos`:
* `git clone git@github.com:thomasphorton/wp-plugin.git`
* `cd wp-plugin`
* `npm install`
* `grunt watch`

If your WordPress install is not in the same relative location as mine, edit `/tasks/options/copy.js` to reference the 'wp-plugins' directory of your installation.

### Setting up FTP
* `cp .ftppass.example .ftppass`
* Edit `.ftppass` to include your FTP credentials.

Use `grunt ftp-deploy` to push to your FTP.