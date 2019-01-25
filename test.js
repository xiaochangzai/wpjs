import wp from './utils/wp'
import testUtil from './utils/testUtil'
class Test {

    canIUseTest () {
        testUtil('canIUse test', wp
            .canIUse('openBluetoothAdapter'))
            .should(true)
    }

    getSystemInfoSyncTest () {
        testUtil('getSystemInfoSyncTest test',
            wp.getSystemInfoSync()
            .hasOwnProperty('windowHeight'))
            .should(true)
    }

    getSystemInfoTest () {
        wp.getSystemInfo().success(res => {
            testUtil('getSystemInfoTest-success test').success()
        }).complete(res => {
            testUtil('getSystemInfoTest-complete test').success()
        }).fail(err => {
            console.error('获取信息出错')
            console.error(err)
        })
    }

    getLaunchOptionsSyncTest () {
        testUtil('getLaunchOptionsSyncTest test', wp
            .getLaunchOptionsSync()
            .hasOwnProperty('path'))
            .should(true) 
    }

    switchTabTest () {
        wp.switchTab('/pages/index/index')
        .success(res => {
            testUtil('switchTabTest-success test').success()
        }).complete(res => {
            testUtil('switchTabTest-complete test').success()
        }).fail(err => {
            testUtil('switchTabTest-fail test').success()
        })
    }

    reLaunchTest () {
        wp.reLaunch('/pages/index/index')
        .success(res => {
            testUtil('reLaunchTest-success test').success()
        }).complete(res => {
            testUtil('reLaunchTest-complete test').success()
        }).fail(err => {
            testUtil('reLaunchTest-fail test').success()
        })
    }

    redirectToTest () {
        wp.redirectTo('/pages/index/index')
        .success(res => {
            testUtil('redirectToTest-success test').success()
        }).complete(res => {
            testUtil('redirectToTest-complete test').success()
        }).fail(err => {
            testUtil('redirectToTest-fail test').success()
        })
    }

    navigateToTest () {
        wp.navigateTo('/pages/index/index')
        .success(res => {
            testUtil('navigateToTest-success test').success()
        }).complete(res => {
            testUtil('navigateToTest-complete test').success()
        }).fail(err => {
            testUtil('navigateToTest-fail test').success()
        })
    }

    navigateBackTest () {
        wp.navigateTo('/pages/test/test').success(() => {
            setTimeout(() => {
                wp.navigateBack(1)
                    .success(res => {
                        testUtil('navigateBackTest-success test').success()
                    }).complete(res => {
                        testUtil('navigateBackTest-complete test').success()
                    }).fail(err => {
                        testUtil('navigateBackTest-fail test').success()
                    })
            }, 2000)
            
        })
    }

    showToastTest () {
        wp.showToast({
            title: '提示内容'
        }).success(() => {
            testUtil('showToastTest-success test').success()
        }).complete(() => {
            testUtil('showToastTest-complete test').success()
        })
    }

    showModalTest () {
        wp.showModal({
            title: '标题',
            content: '提示内容',
        }).success((res) => {
            testUtil('showModal-success test', res.confirm || res.cancel).should(true)
        }).complete(() => {
            testUtil('showModal-complete test').success()
        })
    }
}

export default function () {
    let test = new Test()
    test.canIUseTest()
    test.getSystemInfoSyncTest()
    test.getSystemInfoTest()
    test.getLaunchOptionsSyncTest()
    // test.switchTabTest()
    // test.reLaunchTest()
    // test.redirectToTest()
    // test.navigateToTest()
    // test.navigateBackTest()
    test.showToastTest()
    test.showModalTest()
}