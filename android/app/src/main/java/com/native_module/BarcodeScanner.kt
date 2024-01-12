package com.native_module

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.google.zxing.integration.android.IntentIntegrator
import com.google.zxing.integration.android.IntentResult


private fun sendEvent(reactContext: ReactContext, eventName: String, params: String?) {
    reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
        .emit(eventName, params)
}

class BarcodeScanner(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext)
{

    override fun getName(): String {
        return "BarcodeScannerModule"
    }

    @ReactMethod
    fun scanBarcode() {
        val integrator = IntentIntegrator(currentActivity)
        integrator.setCaptureActivity(AnyOrientationCaptureActivity::class.java)
        integrator.setOrientationLocked(false);
        integrator.setBeepEnabled(false)
        integrator.initiateScan()
    }

    companion object {
        private var reactContext:
                ReactContext? = null
        fun setReactContext(context: ReactContext) {
            reactContext = context
        }
        fun onActivityResult(result: IntentResult?) {
            if (result != null ) {
                val barcode = result?.contents
                if (barcode != null) {
                    sendEvent(reactContext!!,"BarcodeScanned", barcode)
                }else{
                    Log.e("BarcodeScanner", "reactContext or barcode is null")
                }
            }else{
                Log.e("reactContext", "reactContext or barcode is null")
            }
        }
    }

}
