# passport-local-generic


[Passport](http://passportjs.org/) strategy for authenticating with a user defined set of inputs.

This module lets you authenticate using a list of user defined fields in your Node.js
applications.  By plugging into Passport, local authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

```bash
$ npm install passport-local-generic
```

## Note

This module is heavily based on [passport-local](https://github.com/jaredhanson/passport-local).

The main purpose of it is to extend authentication to more input values than just username and password. My specific need was to cover the usecase of a domain, username, password combination, however the implementation is flexible enough to support other cases. 


## Usage

#### Configure Strategy

```javascript
var passport = require('passport');
var LocalStrategy = require('passport-local-generic').Strategy;
```

The local authentication strategy authenticates users using a username and
password.  The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user.

```js
passport.use(new LocalStrategy(
  function(credentials, done) {
    User.findOne({ username: credentials.username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(credentials.password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

##### Available Options

This strategy takes an optional options hash before the function, e.g. `new LocalStrategy({/* options */, callback})`.

The available options are:

* `fields` - Optional, array of fields to look for, defaults to `['usernme', 'password']`

It defines names of the relevant properties in the POST body that are sent to the server.

#### Parameters

By default, `LocalStrategy` expects to find credentials in parameters
named username and password. If your site prefers to name these fields
differently, or needs to send more than these two fields, options are available to change the defaults.

    passport.use(new LocalStrategy({
        fields: ['domain', 'user', 'passwd']
        session: false
      },
      function(credentials, done) {
        // ...
      }
    ));

When session support is not necessary, it can be safely disabled by
setting the `session` option to false.

The verify callback can be supplied with the `request` object by setting
the `passReqToCallback` option to true, and changing callback arguments
accordingly.

    passport.use(new LocalStrategy({
        fields: ['domain', 'user', 'passwd'],
        passReqToCallback: true,
        session: false
      },
      function(req, username, password, done) {
        // request object is now first argument
        // ...
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'local'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
app.post('/login', 
  passport.authenticate('local-generic', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
```

## Examples

Developers using the popular [Express](http://expressjs.com/) web framework can
refer to an [example](https://github.com/passport/express-4.x-local-example)
as a starting point for their own web applications.

Additional examples can be found on the [wiki](https://github.com/jaredhanson/passport-local/wiki/Examples).

## Tests

```bash
$ npm install
$ npm test
```

## Credits
- [Tomasz Rakowski](http://www.akayami.com)
- [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Tomasz Rakowski <[http://jaredhanson.net/](http://jaredhanson.net/)>

Copyright (c) 2011-2015 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
