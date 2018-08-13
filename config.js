var _Environments = {
    localhost: { BASE_URL: 'http://localhost/SmartQ/smartq', API_KEY: '' },
    onewoorks: { BASE_URL: 'https://onewoorks-solutions.com/smartq', API_KEY: '' }
}

function getEnvironment() {
    return _Environments.onewoorks
}

var Environment = getEnvironment()
module.exports = Environment