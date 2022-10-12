import Cookies from 'js-cookie'
import { v4 as uuid } from 'uuid'

const DuplicateWindow = function() {
    let localStorageTimeout = (5) * 1000 // 15,000 milliseconds = 15 seconds.
    let localStorageResetInterval = (1 / 2) * 1000 // 10,000 milliseconds = 10 seconds.
    let localStorageTabKey = 'my-application-browser-tab'
    let sessionStorageGuidKey = 'browser-tab-guid'

    let ItemType = {
        Session: 1,
        Local: 2
    }

    function getItem(itemtype) {
        let val = ""
        switch (itemtype) {
            case ItemType.Session:
                val = window.name
                break
            case ItemType.Local:
                val = decodeURIComponent(Cookies.get(localStorageTabKey))
                if (val == undefined || val == 'undefined')
                    val = ""
                break
        }
        return val
    }

    function setItem(itemtype, val) {
        switch (itemtype) {
            case ItemType.Session:
                window.name = val
                break
            case ItemType.Local:
                Cookies.set(localStorageTabKey, val || "")
                break
        }
    }

    function testIfDuplicate() {
        //console.log("In testTab")
        let sessionGuid = getItem(ItemType.Session) || uuid()
        setItem(ItemType.Session, sessionGuid)

        let val = getItem(ItemType.Local)
        let tabObj = (val == "" ? null : JSON.parse(val)) || null

        // If no or stale tab object, our session is the winner.  If the guid matches, ours is still the winner
        if (tabObj === null || (tabObj.timestamp < (new Date()
                .getTime() - localStorageTimeout)) || tabObj.guid === sessionGuid) {
            function setTabObj() {
                //console.log("In setTabObj")
                let newTabObj = {
                    guid: sessionGuid,
                    timestamp: new Date()
                        .getTime()
                }
                setItem(ItemType.Local, JSON.stringify(newTabObj))
            }
            setTabObj()
            setInterval(setTabObj, localStorageResetInterval) //every x interval refresh timestamp in cookie
            return false
        } else {
            // An active tab is already open that does not match our session guid.
            return true
        }
    }

    window.isDuplicate = function() {
        let duplicate = testIfDuplicate()
        //console.log("Is Duplicate: "+ duplicate)
        return duplicate
    }


    window.addEventListener('beforeunload', () => {
        if (testIfDuplicate() == false) {
            setItem(ItemType.Local, "")
        }
    })
}

DuplicateWindow()
