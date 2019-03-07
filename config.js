var _Environments = {
    localhost: {
        BASE_URL: 'http://localhost/SmartQ/smartq',
        API_KEY: '',
        IMAGE_URL: 'http://localhost/SmartQ/smartq/images/'
    },
    onewoorks: {
        BASE_URL: 'https://localhost/SmartQ/smartq',
        API_KEY: '',
        IMAGE_URL: 'http://localhost/SmartQ/smartq/images/'
    }
}

function getEnvironment() {
    return _Environments.localhost
}

var Environment = getEnvironment()
module.exports = Environment