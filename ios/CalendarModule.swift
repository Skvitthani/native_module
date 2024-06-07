import Foundation
import React

@objc(CalendarModule)
class CalendarModule: RCTEventEmitter {

    private var hasListeners = true

    override init() {
        super.init()
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(calendarEventReminderReceived(_:)),
                                               name: NSNotification.Name(rawValue: "CalendarEventReminderNotification"),
                                               object: nil)
    }

    deinit {
        NotificationCenter.default.removeObserver(self)
    }

    override func supportedEvents() -> [String]! {
        return ["EventReminder"]
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
    }

    @objc func calendarEventReminderReceived(_ notification: Notification) {
        guard let eventName = notification.userInfo?["name"] as? String else { return }
      print("tap setting",eventName)
        if hasListeners {
            sendEvent(withName: "EventReminder", body: ["name": eventName])
        }
    }

    @objc func addEvent(_ name: String) {
        if !name.isEmpty {
            NotificationCenter.default.post(name: NSNotification.Name(rawValue: "CalendarEventReminderNotification"), object: nil, userInfo: ["name": name])
        }
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }
}
