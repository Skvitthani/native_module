import Foundation
import React

@objc(MyNativeModule)
class MyNativeModule: NSObject {
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    @objc
    func sendDataToReactNative(_ data: NSDictionary) {
        // Your code to handle data
    }
}
