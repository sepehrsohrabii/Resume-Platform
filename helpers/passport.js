const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.initialize();
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: false,
      session: true,
    },
    async (email, pwd, done) => {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      try {
        if (!user) {
          return done(null, false, { message: 'Invalid email.' });
        }
        if (!User.verifyPassword(user, pwd)) {
          return done(null, false, { message: 'Invalid password.' });
        }
        return done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
