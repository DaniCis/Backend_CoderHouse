import passport from './passport.middleware.js'

const passportControl = (strategy) => {
    return async (req, res, next) => {
      passport.authenticate(strategy, { session: false }, (error, user, info) => {
        if (error) {
          return next(error); // Errores especificos
        }
        if (!user) {
          return res.status(401).json({ error: info.messages ?? `${info}`})
          // valida si info es algo en la diapo utilizan 
          //to string esta es otra forma
        }
        req.user = user;
        next();
      })(req, res, next);
    }
};
export default passportControl