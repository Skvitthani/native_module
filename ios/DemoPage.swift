import SwiftUI
import React

struct ContentView: View {
    var body: some View {
        VStack {
            Button(action: {
                sendDataToReactNative()
            }) {
                Text("Send Data to React Native")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
        }
    }
    
    func sendDataToReactNative() {
        if let bridge = RCTBridge(delegate: self as? RCTBridgeDelegate, launchOptions: nil) {
            let data: [String: Any] = ["key": "value"] // Your data here
            bridge.eventDispatcher()?.sendAppEvent(withName: "EventFromSwiftUI", body: data)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
