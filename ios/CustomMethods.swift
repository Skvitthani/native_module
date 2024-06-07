import Foundation
import UIKit

@objc(CustomMethods)
class CustomMethods: NSObject {
    @objc static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc public func MyMethod(_ param: String) {
        DispatchQueue.main.async {
            if let rootViewController = UIApplication.shared.keyWindow?.rootViewController {
                let buttonViewController = ButtonViewController()
                rootViewController.present(buttonViewController, animated: true, completion: nil)
            }
        }
    }
}
