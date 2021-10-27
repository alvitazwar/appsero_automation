module.exports = {
    env(envVariable) {
        return process.env[`${process.env.TESTING_ENV}_${envVariable}`]
    }
}