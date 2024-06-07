//import Foundation
//import React
//
//@objc(NativeModule)
//class NativeModule: RCTEventEmitter {
//
//  private var hasListeners = false
//  
//  override init() {
//    super.init()
//    NotificationCenter.default.addObserver(self,
//                                           selector: 
//                                            #selector(calendarEventReminderReceived(_:)),       name: NSNotification.Name(rawValue: "CalendarEventReminderNotification"),object: nil)
//  }
//  deinit {
//    NotificationCenter.default.removeObserver(self)
//  }
//
//  override func supportedEvents() -> [String]! {
//    return ["EventReminder"]
//  }
//
//  override func startObserving() {
//    hasListeners = true
//  }
//
//  override func stopObserving() {
//    hasListeners = false
//  }
//
//  @objc func calendarEventReminderReceived(_ notification: Notification) {
//    print("Has listeners: \(hasListeners)")
//    guard let eventName = notification.userInfo?["name"] as? String else { return }
//    if hasListeners {
//        sendEvent(withName: "EventReminder", body: ["name": eventName])
//    }
//  }
//  
//  @objc func addEvent(_ name: String) {
//    print("Adding event: \(name)")
//    if !name.isEmpty {
//      NotificationCenter.default.post(name: NSNotification.Name(rawValue: "CalendarEventReminderNotification"), object: nil, userInfo: ["name": name])
//    }
//  }
//
//  override class func requiresMainQueueSetup() -> Bool {
//    return true
//  }
//}


import Foundation
import React

@objc(NativeModule)
class NativeModule: RCTEventEmitter {

  private var hasListeners = false
  
  override init() {
    super.init()
    NotificationCenter.default.addObserver(self,
                                           selector:
                                            #selector(calendarEventReminderReceived(_:)),       name: NSNotification.Name(rawValue: "CalendarEventReminderNotification"),object: nil)
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
    print("Has listeners: \(hasListeners)")
    guard let eventName = notification.userInfo?["name"] as? String else { return }
    if hasListeners {
        sendEvent(withName: "EventReminder", body: ["name": eventName])
    }
  }
  
  @objc func addEvent(_ name: String) {
    print("Adding event: \(name)")
    if !name.isEmpty {
      NotificationCenter.default.post(name: NSNotification.Name(rawValue: "CalendarEventReminderNotification"), object: nil, userInfo: ["name": name])
    }
  }

  override class func requiresMainQueueSetup() -> Bool {
    return true
  }
}
