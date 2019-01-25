class TestUtil {
    result = null
    name = '默认测试'
    fun = function () {}

    constructor (name, result) {
        this.name = name
        this.result = result
    }

    should (shouldResult) {
        if (shouldResult == this.result) {
            this.success()
        } else {
            this.error()
        }
    }

    success () {
        console.log(`%c √ ${this.name} test successfully！`,'color:#0f0;')
    }

    error () {
        console.log(`%c × ${this.name} runs wrong！`,'color:#f00;')
    }
}

export default function (name,  testFun) {
    return new TestUtil(name, testFun)
}